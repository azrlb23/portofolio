<template>
  <section id="home" class="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-x-hidden bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500">
    
    <!-- Interactive Parallax Canvas Background -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

    <!-- Grain Overlay -->
    <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-[1]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    
    <div class="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10 w-full">
      <!-- High Fashion Editorial Typography -->
      <div class="flex flex-col items-start w-full">
        <h1 class="text-[3rem] sm:text-[5rem] md:text-[9rem] lg:text-[12rem] font-serif tracking-tighter text-[#111111] dark:text-[#e5e5e5] mb-4 leading-[0.85] w-full flex flex-col uppercase transition-colors duration-500">
          <span v-scroll-reveal="100" class="font-normal block">Creative</span>
          <span v-scroll-reveal="200" class="font-light italic text-[#888888] dark:text-[#555555] lowercase ml-6 sm:ml-12 md:ml-32 lg:ml-64 tracking-normal transition-colors duration-500">& Developer</span>
          <span v-scroll-reveal="300" class="font-normal block text-transparent [-webkit-text-stroke:1px_#111111] dark:[-webkit-text-stroke:1px_#e5e5e5] text-right mt-2 transition-all duration-500">Designer</span>
        </h1>
        
        <div class="w-full h-[1px] bg-[#E5E5E5] dark:bg-[#222222] my-8 md:my-12 transition-colors duration-500" v-scroll-reveal="400"></div>

        <div class="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12">
          <p v-scroll-reveal="500" class="text-base md:text-lg text-[#555555] dark:text-[#888888] font-light max-w-md leading-relaxed transition-colors duration-500">
            Crafting digital experiences through minimal code, brutalist semantics, and high-fashion aesthetics. Elevating the standard of web interaction.
          </p>
          
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)

let animFrameId = null
let particles = []
let mouse = { x: 0, y: 0 }
let targetMouse = { x: 0, y: 0 }

const isMobile = () => window.innerWidth < 768
const NUM_PARTICLES = () => isMobile() ? 50 : 100

const isDark = () => document.documentElement.classList.contains('dark')

function initParticles(w, h) {
  particles = []
  for (let i = 0; i < NUM_PARTICLES(); i++) {
    const depth = Math.random() * 0.9 + 0.1 // 0.1 → 1.0
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      baseX: Math.random() * w,
      baseY: Math.random() * h,
      depth,
      size: depth * 2.2,
      opacity: depth * 0.6,
    })
  }
}

function draw(canvas, ctx) {
  const w = canvas.width
  const h = canvas.height
  ctx.clearRect(0, 0, w, h)

  const color = isDark() ? '229,229,229' : '17,17,17'

  // Smooth mouse lerp
  mouse.x += (targetMouse.x - mouse.x) * 0.06
  mouse.y += (targetMouse.y - mouse.y) * 0.06

  const cx = w / 2
  const cy = h / 2

  for (const p of particles) {
    const dx = ((mouse.x - cx) / cx) * p.depth * 28
    const dy = ((mouse.y - cy) / cy) * p.depth * 28

    const px = p.baseX + dx
    const py = p.baseY + dy

    ctx.beginPath()
    ctx.arc(px, py, p.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${color}, ${p.opacity})`
    ctx.fill()
  }

  animFrameId = requestAnimationFrame(() => draw(canvas, ctx))
}

function onMouseMove(e) {
  targetMouse.x = e.clientX
  targetMouse.y = e.clientY
}

function resize(canvas) {
  const rect = canvas.parentElement.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height
  initParticles(canvas.width, canvas.height)
}

let resizeHandler = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  resize(canvas)

  resizeHandler = () => resize(canvas)

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', resizeHandler)

  // Start centered
  mouse.x = canvas.width / 2
  mouse.y = canvas.height / 2
  targetMouse.x = mouse.x
  targetMouse.y = mouse.y

  draw(canvas, ctx)
})

onUnmounted(() => {
  cancelAnimationFrame(animFrameId)
  window.removeEventListener('mousemove', onMouseMove)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
})
</script>
