<template>
  <transition name="window-fade">
    <div 
      v-if="window && window.isOpen"
      class="fixed flex flex-col bg-[#FAFAFA] dark:bg-[#050505] border border-[#CCCCCC] dark:border-[#222222] shadow-2xl pointer-events-auto window-shell select-none"
      :class="[
        window.isMaximized 
          ? 'inset-x-0 bottom-0 top-[60px] md:top-[72px] rounded-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]' 
          : 'fixed'
      ]"
      :style="{ 
        transform: !window.isMaximized ? `translate3d(${window.x}px, ${window.y}px, 0)` : 'none',
        width: !window.isMaximized ? `${window.width || 800}px` : 'auto',
        height: !window.isMaximized ? `${window.height || 600}px` : 'auto',
        maxWidth: '96vw',
        maxHeight: '90vh',
        zIndex: window.zIndex,
        transition: (isDragging || isResizing) ? 'none' : 'transform 0.3s cubic-bezier(0.16,1,0.3,1), width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1)'
      }"
      @mousedown="focus"
      @touchstart="focus"
      @pointerdown="focus"
    >
      <!-- Window Header (Draggable Area) -->
      <div 
        class="flex justify-between items-center px-4 py-3 border-b border-[#E5E5E5] dark:border-[#222222] bg-[#FAFAFA] dark:bg-[#050505] select-none transition-colors duration-500"
        :class="{ 'cursor-grab active:cursor-grabbing': !window.isMaximized }"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @dblclick="toggleMaximize"
      >
        <!-- Title -->
        <div class="flex items-center gap-3">
          <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#888888] transition-colors">
            {{ window.title }}
          </span>
        </div>

        <!-- Window Controls -->
        <div class="flex gap-4">
          <button 
            @click.stop="toggleMaximize" 
            class="text-[10px] uppercase font-mono tracking-[0.2em] text-[#888888] dark:text-[#555555] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors"
          >
            {{ window.isMaximized ? 'Restore' : 'Maximize' }}
          </button>
          <button 
            @click.stop="close" 
            class="text-[10px] uppercase font-mono tracking-[0.2em] text-[#888888] dark:text-[#555555] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      <!-- Window Content Area -->
      <div class="flex-1 h-full overflow-y-auto overflow-x-hidden relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500 custom-scrollbar flex flex-col items-stretch select-text">
        <slot></slot>
      </div>

      <!-- Resize Handles (Only when not maximized) -->
      <template v-if="!window.isMaximized">
        <!-- Edges -->
        <div class="resize-handle handle-e" @mousedown.stop.prevent="startResize($event, 'e')" @touchstart.stop.prevent="startResize($event, 'e')"></div>
        <div class="resize-handle handle-s" @mousedown.stop.prevent="startResize($event, 's')" @touchstart.stop.prevent="startResize($event, 's')"></div>
        <div class="resize-handle handle-w" @mousedown.stop.prevent="startResize($event, 'w')" @touchstart.stop.prevent="startResize($event, 'w')"></div>
        <div class="resize-handle handle-n" @mousedown.stop.prevent="startResize($event, 'n')" @touchstart.stop.prevent="startResize($event, 'n')"></div>

        <!-- Corners -->
        <div class="resize-handle handle-se" @mousedown.stop.prevent="startResize($event, 'se')" @touchstart.stop.prevent="startResize($event, 'se')"></div>
        <div class="resize-handle handle-sw" @mousedown.stop.prevent="startResize($event, 'sw')" @touchstart.stop.prevent="startResize($event, 'sw')"></div>
        <div class="resize-handle handle-ne" @mousedown.stop.prevent="startResize($event, 'ne')" @touchstart.stop.prevent="startResize($event, 'ne')"></div>
        <div class="resize-handle handle-nw" @mousedown.stop.prevent="startResize($event, 'nw')" @touchstart.stop.prevent="startResize($event, 'nw')"></div>
      </template>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useWindowManager } from '../composables/useWindowManager'
import { useSound } from '../composables/useSound'

const props = defineProps({
  windowId: {
    type: String,
    required: true
  }
})

const { windows, focusWindow, closeWindow, updateWindowBounds, toggleMaximize: maximizeWindow } = useWindowManager()
const { playOpen, playClose, playClick } = useSound()

// Reactive computed reference to window state in global store
const window = computed(() => windows.value.find(w => w.id === props.windowId))

const isDragging = ref(false)
const isResizing = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const resizeState = ref({ direction: '', startX: 0, startY: 0, startW: 0, startH: 0, startWindowX: 0, startWindowY: 0 })

const focus = () => {
  focusWindow(props.windowId)
}

const close = () => {
  playClose()
  closeWindow(props.windowId)
}

const toggleMaximize = () => {
  playClick()
  maximizeWindow(props.windowId)
}

const getClientCoords = (e) => {
  if (e.touches && e.touches.length > 0) {
    return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
  }
  return { clientX: e.clientX, clientY: e.clientY }
}

const startDrag = (e) => {
  if (!window.value || window.value.isMaximized) return
  
  isDragging.value = true
  playClick()
  focus()
  
  const { clientX, clientY } = getClientCoords(e)
  dragOffset.value = {
    x: clientX - window.value.x,
    y: clientY - window.value.y
  }

  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchmove', drag, { passive: false })
  document.addEventListener('touchend', stopDrag)
}

const drag = (e) => {
  if (!isDragging.value || !window.value || window.value.isMaximized) return
  if (e.type === 'touchmove') e.preventDefault()

  const { clientX, clientY } = getClientCoords(e)
  let newX = clientX - dragOffset.value.x
  let newY = clientY - dragOffset.value.y

  updateWindowBounds(props.windowId, { x: newX, y: newY })
}

const stopDrag = () => {
  if (isDragging.value) {
    playClick()
  }
  isDragging.value = false
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', drag)
  document.removeEventListener('touchend', stopDrag)
}

// Resize logic
const startResize = (e, direction) => {
  if (!window.value || window.value.isMaximized) return

  isResizing.value = true
  focus()
  
  const { clientX, clientY } = getClientCoords(e)
  resizeState.value = {
    direction,
    startX: clientX,
    startY: clientY,
    startW: window.value.width || 800,
    startH: window.value.height || 600,
    startWindowX: window.value.x,
    startWindowY: window.value.y
  }

  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
  document.addEventListener('touchmove', handleResize, { passive: false })
  document.addEventListener('touchend', stopResize)
}

const handleResize = (e) => {
  if (!isResizing.value || !window.value || window.value.isMaximized) return
  if (e.type === 'touchmove') e.preventDefault()

  const { clientX, clientY } = getClientCoords(e)
  const { direction, startX, startY, startW, startH, startWindowX, startWindowY } = resizeState.value

  const deltaX = clientX - startX
  const deltaY = clientY - startY

  let newWidth = startW
  let newHeight = startH
  let newX = startWindowX
  let newY = startWindowY

  const MIN_WIDTH = 320
  const MIN_HEIGHT = 220

  if (direction.includes('e')) {
    newWidth = Math.max(MIN_WIDTH, startW + deltaX)
  }
  if (direction.includes('s')) {
    newHeight = Math.max(MIN_HEIGHT, startH + deltaY)
  }
  if (direction.includes('w')) {
    const possibleW = startW - deltaX
    if (possibleW >= MIN_WIDTH) {
      newWidth = possibleW
      newX = startWindowX + deltaX
    } else {
      newWidth = MIN_WIDTH
      newX = startWindowX + (startW - MIN_WIDTH)
    }
  }
  if (direction.includes('n')) {
    const possibleH = startH - deltaY
    if (possibleH >= MIN_HEIGHT) {
      newHeight = possibleH
      newY = startWindowY + deltaY
    } else {
      newHeight = MIN_HEIGHT
      newY = startWindowY + (startH - MIN_HEIGHT)
    }
  }

  updateWindowBounds(props.windowId, {
    x: newX,
    y: newY,
    width: newWidth,
    height: newHeight
  })
}

const stopResize = () => {
  if (isResizing.value) {
    playClick()
  }
  isResizing.value = false
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
  document.removeEventListener('touchmove', handleResize)
  document.removeEventListener('touchend', stopResize)
}

onMounted(() => {
  if (window.value && window.value.isOpen) {
    playOpen()
  }
})

watch(() => window.value?.isOpen, (newVal, oldVal) => {
  if (newVal && !oldVal) {
    playOpen()
  }
})

onUnmounted(() => {
  stopDrag()
  stopResize()
})
</script>

<style scoped>
/* Custom Minimalist Scrollbar inside windows */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e5e5;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #222222;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #111111;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555555;
}

/* Window Mount Animation */
.window-fade-enter-active,
.window-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.window-fade-enter-from,
.window-fade-leave-to {
  opacity: 0;
}

/* Resize Handle Styles */
.resize-handle {
  position: absolute;
  z-index: 60;
}

.handle-e {
  top: 0;
  right: -4px;
  width: 8px;
  height: 100%;
  cursor: e-resize;
}
.handle-s {
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: s-resize;
}
.handle-w {
  top: 0;
  left: -4px;
  width: 8px;
  height: 100%;
  cursor: w-resize;
}
.handle-n {
  top: -4px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: n-resize;
}

.handle-se {
  bottom: -6px;
  right: -6px;
  width: 14px;
  height: 14px;
  cursor: se-resize;
}
.handle-sw {
  bottom: -6px;
  left: -6px;
  width: 14px;
  height: 14px;
  cursor: sw-resize;
}
.handle-ne {
  top: -6px;
  right: -6px;
  width: 14px;
  height: 14px;
  cursor: ne-resize;
}
.handle-nw {
  top: -6px;
  left: -6px;
  width: 14px;
  height: 14px;
  cursor: nw-resize;
}
</style>
