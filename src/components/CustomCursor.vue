<template>
  <div class="custom-cursor-wrapper" aria-hidden="true">
    <!-- Outer ring -->
    <div
      ref="ringRef"
      class="cursor-ring"
      :class="{ 'cursor-hover': isHovering }"
    ></div>
    <!-- Inner dot -->
    <div
      ref="dotRef"
      class="cursor-dot"
      :class="{ 'cursor-hover': isHovering }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ringRef = ref(null)
const dotRef = ref(null)
const isHovering = ref(false)

let ringX = 0, ringY = 0
let dotX = 0, dotY = 0
let targetX = 0, targetY = 0
let rafId = null

function onMove(e) {
  targetX = e.clientX
  targetY = e.clientY
}

function onEnterHover() { isHovering.value = true }
function onLeaveHover() { isHovering.value = false }

function addHoverListeners() {
  const targets = document.querySelectorAll('a, button, [data-cursor-hover]')
  targets.forEach(el => {
    el.addEventListener('mouseenter', onEnterHover)
    el.addEventListener('mouseleave', onLeaveHover)
  })
}

function loop() {
  // Dot follows immediately
  dotX += (targetX - dotX) * 0.9
  dotY += (targetY - dotY) * 0.9
  // Ring follows with lag
  ringX += (targetX - ringX) * 0.12
  ringY += (targetY - ringY) * 0.12

  if (dotRef.value) {
    dotRef.value.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`
  }
  if (ringRef.value) {
    ringRef.value.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
  }

  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  addHoverListeners()

  // Re-observe on DOM mutations for dynamically added elements
  const observer = new MutationObserver(addHoverListeners)
  observer.observe(document.body, { childList: true, subtree: true })

  loop()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.custom-cursor-wrapper {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  /* mix-blend-mode difference requires a non-transparent stacking context */
  mix-blend-mode: difference;
}

.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border: 1.5px solid #ffffff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.25s ease;
  will-change: transform;
}

.cursor-ring.cursor-hover {
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.15);
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  will-change: transform;
}

.cursor-dot.cursor-hover {
  width: 4px;
  height: 4px;
  opacity: 0.5;
}
</style>
