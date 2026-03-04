<template>
  <div class="fixed inset-0 w-full h-full z-[999] bg-[#050505] text-[#e5e5e5] font-mono flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 selection:bg-[#e5e5e5] selection:text-[#050505] overflow-hidden">
    
    <!-- Glitch Overlay effect -->
    <div class="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_4px)]"></div>
    <div class="absolute inset-0 pointer-events-none glitch-overlay"></div>

    <div class="relative z-10 max-w-4xl" v-scroll-reveal>
      
      <div class="mb-8">
        <span class="bg-[#e5e5e5] text-[#050505] px-2 py-1 text-xs md:text-sm font-bold uppercase tracking-widest inline-block mb-4">
          FATAL ERROR
        </span>
      </div>

      <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none glitch-text" data-text="404">
        404
      </h1>
      
      <h2 class="text-xl md:text-3xl text-[#888888] mb-12">
        PAGE_FAULT_IN_NONPAGED_AREA
      </h2>

      <div class="space-y-4 text-sm md:text-base text-[#555555]">
        <p>A problem has been detected and the system has been halted to prevent damage to your local reality.</p>
        <p>The routing parameter specified a memory address (URL) that does not exist in the current system mapping: <span class="text-[#e5e5e5]">{{ currentPath }}</span></p>
        
        <br />
        
        <p>If this is the first time you've seen this stop error screen, reboot your system. If this screen appears again, follow these steps:</p>
        <ul class="list-disc list-inside mt-2 space-y-2">
          <li>Check to make sure any new hardware or software is properly installed.</li>
          <li>If problems continue, disable or remove any newly installed structural logic.</li>
          <li>Run <span class="text-[#e5e5e5]">npm run diagnose</span> or reach out to the administrator.</li>
        </ul>
        
        <br />
        <p>Technical information:</p>
        <p class="text-[#888888]">*** STOP: 0x00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)</p>
      </div>

      <div class="mt-16 flex flex-col md:flex-row gap-6">
        <button 
          @click="reboot" 
          @mouseenter="playType"
          class="group relative inline-flex items-center gap-3 border border-[#e5e5e5] px-8 py-4 hover:bg-[#e5e5e5] hover:text-[#050505] transition-all duration-300"
        >
          <span class="text-xs uppercase tracking-[0.2em] font-bold z-10">Reboot System</span>
          <svg class="w-4 h-4 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        </button>
        
        <a 
          href="mailto:azrielalbian23@gmail.com" 
          @mouseenter="playType"
          class="inline-flex items-center gap-3 border border-transparent px-8 py-4 text-[#888888] hover:text-[#e5e5e5] hover:border-[#333333] transition-all duration-300"
        >
          <span class="text-xs uppercase tracking-[0.2em]">Contact Administrator</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSound } from '../composables/useSound'

const router = useRouter()
const route = useRoute()
const { playType, playClose } = useSound()

const currentPath = computed(() => route.path)

onMounted(() => {
  // Play a jarring "error beep" if the browser permits
  // We'll use a slightly dissonant chord for the BSOD feel
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      const audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      
      const playFreq = (freq) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.5);
      }
      // Dissonant minor second
      playFreq(300);
      playFreq(315);
    }
  } catch(e) { /* ignore if audio context fails */ }
})

const reboot = () => {
  playClose()
  router.push('/')
}
</script>

<style scoped>
/* CRT Glitch effect on the text */
.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch-text::before {
  color: #0ff;
  z-index: -1;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch-text::after {
  color: #f0f;
  z-index: -2;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
  0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
  20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
  40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
  80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
  100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
}

@keyframes glitch-anim-2 {
  0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
  20% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, 2px); }
  40% { clip-path: inset(70% 0 10% 0); transform: translate(1px, -1px); }
  60% { clip-path: inset(20% 0 50% 0); transform: translate(-1px, 1px); }
  80% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
  100% { clip-path: inset(5% 0 80% 0); transform: translate(-2px, 1px); }
}

.glitch-overlay {
  background: rgba(255, 255, 255, 0.02);
  mix-blend-mode: overlay;
  animation: static-noise 0.2s infinite;
}

@keyframes static-noise {
  0% { transform: translate(0, 0); }
  10% { transform: translate(-1%, -1%); }
  20% { transform: translate(1%, 1%); }
  30% { transform: translate(-2%, 2%); }
  40% { transform: translate(2%, -2%); }
  50% { transform: translate(-1%, 1%); }
  60% { transform: translate(1%, -1%); }
  70% { transform: translate(2%, 2%); }
  80% { transform: translate(-2%, -2%); }
  90% { transform: translate(1%, 1%); }
  100% { transform: translate(0, 0); }
}
</style>
