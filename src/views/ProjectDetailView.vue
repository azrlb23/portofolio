<template>
  <div class="bg-[#FAFAFA] dark:bg-[#050505] font-sans text-[#111111] dark:text-[#e5e5e5] selection:bg-[#111111] dark:selection:bg-[#e5e5e5] selection:text-[#FAFAFA] dark:selection:text-[#050505] transition-colors duration-500 relative pb-24">
    <div v-if="project">
      
      <!-- Editorial Hero Section -->
      <section class="relative w-full h-[400px] flex items-end justify-center overflow-hidden border-b border-[#E5E5E5] dark:border-[#222222] transition-colors duration-500">
        <!-- Parallax Background Image -->
        <div 
          class="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat z-0 transform transition-transform duration-[2s] ease-out grayscale opacity-40 dark:opacity-60"
          :style="{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.4}px)` 
          }"
        ></div>
        
        <!-- Abstract Fallback (if no image) -->
        <div v-if="!heroImage" class="absolute inset-0 w-full h-full z-0 bg-[#E5E5E5] dark:bg-[#0a0a0a]"></div>

        <!-- Heavy Vignette -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] dark:from-[#050505] via-[#FAFAFA]/80 dark:via-[#050505]/80 to-transparent z-10 block transition-colors duration-500"></div>

        <!-- Hero Content -->
        <div class="relative z-20 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full pb-12">
          <div class="max-w-4xl" v-scroll-reveal>
            <!-- Category Tag -->
            <div class="mb-4 overflow-hidden">
              <span class="text-[10px] text-[#555555] dark:text-[#888888] font-mono tracking-[0.3em] uppercase block transition-colors">
                [ {{ project.category }} ]
              </span>
            </div>
            
            <!-- Windowed Title -->
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[#111111] dark:text-[#e5e5e5] leading-[0.85] tracking-tighter mb-6 transition-colors duration-500">
              {{ project.title }}
            </h1>
            
            <!-- Brief Subheading -->
            <p class="text-sm md:text-base text-[#555555] dark:text-[#888888] font-light leading-relaxed max-w-xl transition-colors duration-500">
              {{ project.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Main Storytelling Content Area -->
      <section class="relative z-20 max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        <div v-if="project.type === 'web'" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- Left Column: Details & Tech Stack -->
          <div class="lg:col-span-4 lg:col-start-1" v-scroll-reveal>
            <div class="space-y-12">
              
              <!-- Quick Stats / Roles -->
              <div class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 transition-colors duration-500">
                <h3 class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#111111] dark:text-[#e5e5e5] mb-6 transition-colors">Specifications</h3>
                
                <div class="space-y-4">
                  <div class="flex justify-between items-end pb-3 border-b border-[#CCCCCC] dark:border-[#111111] transition-colors">
                    <span class="text-[#888888] dark:text-[#555555] text-[10px] uppercase tracking-[0.1em] transition-colors">Role</span>
                    <span class="text-[#555555] dark:text-[#888888] text-xs font-serif italic transition-colors">{{ getRole(project.type) }}</span>
                  </div>
                  <div class="flex justify-between items-end pb-3 border-b border-[#CCCCCC] dark:border-[#111111] transition-colors">
                    <span class="text-[#888888] dark:text-[#555555] text-[10px] uppercase tracking-[0.1em] transition-colors">Category</span>
                    <span class="text-[#555555] dark:text-[#888888] text-xs font-serif italic transition-colors">{{ project.category }}</span>
                  </div>
                  <div class="flex justify-between items-end pb-3 border-b border-[#CCCCCC] dark:border-[#111111] transition-colors">
                    <span class="text-[#888888] dark:text-[#555555] text-[10px] uppercase tracking-[0.1em] transition-colors">Year</span>
                    <span class="text-[#555555] dark:text-[#888888] text-xs font-serif italic transition-colors">2024</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="mt-8 flex flex-col gap-3">
                  <a v-if="project.liveLink" :href="project.liveLink" target="_blank" class="w-full relative group border border-[#CCCCCC] dark:border-[#555555] hover:border-[#111111] dark:hover:border-[#e5e5e5] px-6 py-3 flex items-center justify-between transition-colors duration-500">
                    <span class="relative z-10 text-[10px] uppercase tracking-[0.2em] font-medium text-[#111111] dark:text-[#e5e5e5] transition-colors">Live Site</span>
                    <svg class="w-3 h-3 text-[#888888] group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                  <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="w-full group border border-[#E5E5E5] dark:border-[#222222] hover:border-[#888888] dark:hover:border-[#555555] px-6 py-3 flex items-center justify-between transition-colors duration-500">
                    <span class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#555555] dark:text-[#888888] group-hover:text-[#111111] dark:group-hover:text-[#c5c5c5] transition-colors">Repository</span>
                  </a>
                </div>
              </div>

              <!-- Tech Stack -->
              <div v-if="project.tools && project.tools.length" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 transition-colors duration-500">
                <h3 class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#111111] dark:text-[#e5e5e5] mb-6 transition-colors">Stack</h3>
                <div class="flex flex-col gap-2">
                  <span v-for="tool in project.tools" :key="tool" class="text-xs font-serif italic text-[#555555] dark:text-[#888888] block transition-colors">
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: The Story / Overview -->
          <div class="lg:col-span-8 lg:col-start-5">
            <article class="max-w-2xl" v-scroll-reveal="100">
              <span class="text-[#888888] dark:text-[#555555] text-[10px] uppercase tracking-[0.2em] font-medium mb-6 block transition-colors">Overview</span>
              <div class="text-[#111111] dark:text-[#e5e5e5] font-serif text-lg md:text-2xl font-light leading-relaxed space-y-6 whitespace-pre-line transition-colors duration-500">
                {{ project.fullDescription || project.description }}
              </div>
            </article>

            <!-- Dynamic Image Gallery -->
            <div v-if="galleryImages.length > 0" class="mt-20 space-y-12" v-scroll-reveal="200">
              <div class="flex items-center gap-6 border-b border-[#E5E5E5] dark:border-[#222222] pb-4 transition-colors duration-500">
                <span class="text-[#888888] dark:text-[#555555] text-[8px] uppercase tracking-[0.2em] transition-colors">Exhibits</span>
              </div>
              
              <div class="flex flex-col gap-8">
                <div 
                  v-for="(img, idx) in galleryImages" 
                  :key="idx"
                  class="w-full bg-[#E5E5E5] dark:bg-[#111] relative group transition-colors duration-500"
                  v-scroll-reveal="idx * 50"
                >
                  <img 
                    :src="img" 
                    :alt="`${project.title} screenshot ${idx + 1}`"
                    class="w-full h-auto object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Layout for Photography & Design (Visual Showcase) -->
        <div v-else class="flex flex-col items-center max-w-4xl mx-auto w-full">
          <!-- Minimalist Info & Overview -->
          <div class="w-full space-y-8 mb-20 border-t border-[#E5E5E5] dark:border-[#222222] pt-8 transition-colors duration-500" v-scroll-reveal>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px] uppercase tracking-[0.2em]">
              <div>
                <span class="text-[#888888] dark:text-[#555555] block mb-2 transition-colors">Role</span>
                <span class="text-[#111111] dark:text-[#e5e5e5] transition-colors">{{ getRole(project.type) }}</span>
              </div>
              <div>
                <span class="text-[#888888] dark:text-[#555555] block mb-2 transition-colors">Category</span>
                <span class="text-[#111111] dark:text-[#e5e5e5] transition-colors">{{ project.category }}</span>
              </div>
              <div>
                <span class="text-[#888888] dark:text-[#555555] block mb-2 transition-colors">Tools</span>
                <span class="text-[#111111] dark:text-[#e5e5e5] transition-colors">{{ project.tools ? project.tools.join(', ') : 'N/A' }}</span>
              </div>
            </div>
            
            <article class="max-w-3xl pt-6" v-scroll-reveal="100">
              <div class="text-[#555555] dark:text-[#888888] font-serif text-xl md:text-3xl font-light leading-snug space-y-6 whitespace-pre-line text-balance transition-colors duration-500">
                {{ project.fullDescription || project.description }}
              </div>
            </article>

            <!-- Action Buttons if present -->
            <div v-if="project.liveLink || project.githubLink" class="flex gap-6 pt-8" v-scroll-reveal="200">
              <a v-if="project.liveLink" :href="project.liveLink" target="_blank" class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#111111] dark:text-[#e5e5e5] border-b border-[#111111] dark:border-[#e5e5e5] pb-1 hover:text-[#555555] dark:hover:text-[#888888] hover:border-[#555555] dark:hover:border-[#888888] transition-colors">
                View Details
              </a>
              <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888] dark:text-[#555555] border-b border-[#888888] dark:border-[#555555] pb-1 hover:text-[#111111] dark:hover:text-[#e5e5e5] hover:border-[#111111] dark:hover:border-[#e5e5e5] transition-colors">
                Source
              </a>
            </div>
          </div>

          <!-- Masonry Image Gallery for Photo/Design -->
          <div v-if="galleryImages.length > 0" class="w-full columns-1 md:columns-2 gap-4 md:gap-6 gap-y-6" v-scroll-reveal="300">
            <div 
              v-for="(img, idx) in galleryImages" 
              :key="idx"
              class="break-inside-avoid mb-4 md:mb-6 bg-[#E5E5E5] dark:bg-[#111111] relative group transition-colors duration-500"
              v-scroll-reveal="idx * 50"
            >
              <img 
                :src="img" 
                :alt="`${project.title} artwork ${idx + 1}`"
                class="w-full h-auto object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.2,1,0.2,1)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
    
    <!-- Error State -->
    <div v-else class="h-64 flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500">
      <span class="font-serif italic text-4xl text-[#888888] dark:text-[#555555] mb-4 transition-colors">404</span>
      <h2 class="text-[10px] uppercase tracking-[0.2em] text-[#111111] dark:text-[#e5e5e5] transition-colors">Project Not Found</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { portfolioItems } from '../data/projects'

const props = defineProps({
  projectId: {
    type: [Number, String],
    required: false
  }
})

const project = ref(null)

watch(() => props.projectId, (newId) => {
  if (newId) {
    project.value = portfolioItems.find(p => p.id === parseInt(newId))
  } else {
    project.value = null
  }
}, { immediate: true })

const scrollY = ref(0)
const handleScroll = (e) => {
  // Since it's in a window, we might need to listen to the window's own scroll container
  // For now, attaching to the window object might not work perfectly for parallax inside an overflow container,
  // but we leave it here just in case.
  scrollY.value = e.target.scrollTop || window.scrollY
}

// Logic to determine main image and gallery images
const heroImage = computed(() => {
  if (!project.value) return null
  if (project.value.image) return project.value.image
  if (project.value.images && project.value.images.length > 0) return project.value.images[0]
  return null
})

const galleryImages = computed(() => {
  if (!project.value || !project.value.images || project.value.images.length <= 1) return []
  return project.value.images
})

const getRole = (type) => {
  switch (type) {
    case 'web': return 'Lead Developer'
    case 'design': return 'UI/UX Designer'
    case 'photo': return 'Photographer'
    default: return 'Creator'
  }
}
</script>
