<template>
  <div v-if="!hidden" class="fixed inset-0 z-[200] flex items-center justify-center bg-[#FAFAFA] dark:bg-[#050505] transition-opacity duration-700" :class="{ 'opacity-0 pointer-events-none': fading }">
    <div class="text-center font-mono">
      <div class="text-[10px] uppercase tracking-[0.4em] text-[#888888] mb-6">System initializing</div>
      <div class="text-[11px] uppercase tracking-[0.3em] text-[#111111] dark:text-[#e5e5e5] overflow-hidden">
        <span class="typing-text">{{ displayText }}</span><span class="blink-cursor">_</span>
      </div>
      <div class="mt-8 w-48 h-[1px] bg-[#E5E5E5] dark:bg-[#222222] mx-auto overflow-hidden">
        <div class="h-full bg-[#111111] dark:bg-[#e5e5e5] progress-bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const displayText = ref('')
const fading = ref(false)
const hidden = ref(false)

const messages = ['azrlb', 'Loading assets...', 'Ready.']

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

async function typeText(text) {
  displayText.value = ''
  for (const char of text) {
    displayText.value += char
    await sleep(45)
  }
}

onMounted(async () => {
  await sleep(200)
  for (const msg of messages) {
    await typeText(msg)
    await sleep(400)
  }
  await sleep(300)
  fading.value = true
  await sleep(700)
  hidden.value = true
})
</script>

<style scoped>
.blink-cursor {
  animation: blink 0.8s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.progress-bar {
  animation: progress 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: left;
}
@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}
</style>
