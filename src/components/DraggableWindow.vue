<template>
  <transition name="window-fade">
    <div 
      v-show="window.isOpen"
      class="fixed flex flex-col bg-[#FAFAFA] dark:bg-[#050505] border border-[#CCCCCC] dark:border-[#222222] shadow-2xl pointer-events-auto window-shell"
      :class="[
        window.isMaximized 
          ? 'inset-x-0 bottom-0 top-[60px] md:top-[72px] z-50 rounded-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]' 
          : 'w-[90vw] md:w-[800px] h-[80vh] md:h-[600px] absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
      ]"
      :style="!window.isMaximized ? { 
        transform: `translate(${window.x}px, ${window.y}px)`, 
        zIndex: window.zIndex 
      } : { zIndex: window.zIndex }"
      @mousedown="focus"
    >
    <!-- Window Header (Draggable Area) -->
    <div 
      class="flex justify-between items-center px-4 py-3 border-b border-[#E5E5E5] dark:border-[#222222] bg-[#FAFAFA] dark:bg-[#050505] select-none transition-colors duration-500"
      :class="{ 'cursor-move': !window.isMaximized }"
      @mousedown="startDrag"
    >
      <!-- Title -->
      <div class="flex items-center gap-3">
        <span class="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#e5e5e5] opacity-50"></span>
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
    <div class="flex-1 h-full overflow-y-auto overflow-x-hidden relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500 custom-scrollbar flex flex-col items-stretch">
      <slot></slot>
    </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowManager } from '../composables/useWindowManager'

const props = defineProps({
  windowId: {
    type: String,
    required: true
  }
})

const { windows, focusWindow, closeWindow, updateWindowPosition, toggleMaximize: maximizeWindow } = useWindowManager()

// Reactive reference to the specific window state
const window = ref(windows.value.find(w => w.id === props.windowId))

// Dragging Logic
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

const focus = () => {
  focusWindow(props.windowId)
}

const close = () => {
  closeWindow(props.windowId)
}

const toggleMaximize = () => {
  maximizeWindow(props.windowId)
}

const startDrag = (e) => {
  if (window.value.isMaximized) return
  
  isDragging.value = true
  focus() // Bring to front when starting to drag
  
  // Calculate offset from the top-left of the window
  dragOffset.value = {
    x: e.clientX - window.value.x,
    y: e.clientY - window.value.y
  }

  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', stopDrag)
}

const drag = (e) => {
  if (!isDragging.value || window.value.isMaximized) return

  // Calculate new position
  let newX = e.clientX - dragOffset.value.x
  let newY = e.clientY - dragOffset.value.y

  // Optional: Add boundary constraints so it doesn't get lost off-screen
  // newX = Math.max(0, Math.min(newX, window.innerWidth - window.value.width))
  // newY = Math.max(0, Math.min(newY, window.innerHeight - 40)) // 40px padding for safety

  updateWindowPosition(props.windowId, newX, newY)
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
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
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.window-fade-enter-from,
.window-fade-leave-to {
  opacity: 0;
}
</style>
