<template>
  <section id="portfolio" class="relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500 p-6 md:p-12 min-h-full flex flex-col items-stretch">
    <div class="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex-1">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div v-scroll-reveal>
          <h2 class="text-4xl md:text-6xl font-serif text-[#111111] dark:text-[#e5e5e5] mb-6 italic tracking-tight transition-colors duration-500">Selected Works</h2>
          <p class="text-[#555555] dark:text-[#888888] text-sm md:text-base max-w-md font-light leading-relaxed transition-colors duration-500">An archive of technical engineering, precise editorial design, and emotional photography.</p>
        </div>
        
        <!-- Minimalist Filters -->
        <div v-scroll-reveal="150" class="flex items-center gap-6 border-b border-[#CCCCCC] dark:border-[#222222] pb-4 overflow-x-auto no-scrollbar transition-colors duration-500">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            @click="activeFilter = filter.id"
            class="text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer pb-2 relative"
            :class="activeFilter === filter.id ? 'text-[#111111] dark:text-[#e5e5e5] font-medium' : 'text-[#888888] dark:text-[#555555] hover:text-[#111111] dark:hover:text-[#888888] font-light'"
          >
            {{ filter.label }}
            <span v-if="activeFilter === filter.id" class="absolute bottom-[-17px] left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transition-colors duration-500"></span>
          </button>
        </div>
      </div>

      <!-- Portfolio Editorial Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-12 auto-rows-[250px] md:auto-rows-[400px] gap-px bg-[#E5E5E5] dark:bg-[#222222] border border-[#E5E5E5] dark:border-[#222222] transition-all duration-500 grid-flow-row-dense">
        <div 
          v-for="(item, index) in filteredPortfolio" 
          :key="item.id" 
          v-scroll-reveal="index * 100"
          @click="goToProject(item.id)"
          :class="[
            'group relative overflow-hidden bg-[#FAFAFA] dark:bg-[#050505] transition-all duration-700 cursor-pointer flex flex-col',
            activeFilter !== 'all' ? 'col-span-1 lg:col-span-4 row-span-1' : 
            index % 6 === 0 ? 'col-span-2 lg:col-span-8 row-span-1 lg:row-span-2' :
            index % 6 === 1 ? 'col-span-1 lg:col-span-4 row-span-1' :
            index % 6 === 2 ? 'col-span-1 lg:col-span-4 row-span-1' :
            index % 6 === 3 ? 'col-span-2 lg:col-span-4 row-span-1 lg:row-span-2' :
            index % 6 === 4 ? 'col-span-2 lg:col-span-8 row-span-1' :
            'col-span-1 lg:col-span-4 row-span-1'
          ]"
        >
          <!-- Vignette for text readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] dark:from-[#050505] via-[#FAFAFA]/20 dark:via-[#050505]/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-all duration-700"></div>
          
          <!-- Image Layer -->
          <div class="absolute inset-0 w-full h-full bg-[#E5E5E5] dark:bg-[#111111] transition-colors duration-500">
            <img 
              v-if="item.image" 
              :src="item.image" 
              :alt="item.title" 
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-40 transform scale-100 group-hover:scale-110 transition-all duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
            
            <!-- Minimal Fallback -->
            <template v-else>
               <div class="w-full h-full flex items-center justify-center text-[#CCCCCC] dark:text-[#222222] group-hover:scale-105 transition-all duration-[2s]">
                  <span class="font-serif italic text-4xl opacity-20">{{ item.category }}</span>
               </div>
            </template>
          </div>

          <!-- Project Details -->
          <div class="relative z-20 mt-auto p-3 md:p-8 lg:p-12 flex flex-col items-start translate-y-2 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-[0.8s] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden">
            <span class="text-[7px] md:text-[9px] font-mono text-[#555555] dark:text-[#888888] uppercase tracking-[0.3em] mb-1 md:mb-4 block transition-colors duration-500">
              [ {{ item.category }} ]
            </span>
            
            <h3 class="text-base md:text-3xl lg:text-5xl font-serif italic text-[#111111] dark:text-[#e5e5e5] mb-2 md:mb-4 tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors duration-500 leading-none break-words hyphens-auto w-full">{{ item.title }}</h3>
            
            <p class="text-[#555555] dark:text-[#888888] text-[9px] md:text-sm max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-2 group-hover:translate-y-0 font-light leading-relaxed hidden md:block">
              {{ item.description }}
            </p>
            
            <!-- Editorial Read More -->
            <div class="flex items-center gap-2 md:gap-4 text-[#111111] dark:text-[#e5e5e5] text-[8px] md:text-xs uppercase tracking-[0.2em] font-medium opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
              <span>View Case</span>
              <div class="w-3 md:w-8 h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transform origin-left scale-x-100 md:scale-x-0 group-hover:scale-x-100 transition-all duration-700 delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { portfolioItems } from '../data/projects'
import { useWindowManager } from '../composables/useWindowManager'

const { openProjectWindow } = useWindowManager()
const activeFilter = ref('all')

const goToProject = (id) => {
  openProjectWindow(id)
}

const filters = [
  { id: 'all', label: 'Index' },
  { id: 'web', label: 'Engineering' },
  { id: 'design', label: 'Design' },
  { id: 'photo', label: 'Lens' }
]

const filteredPortfolio = computed(() => {
  if (activeFilter.value === 'all') {
    return portfolioItems
  }
  return portfolioItems.filter(item => item.type === activeFilter.value)
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
