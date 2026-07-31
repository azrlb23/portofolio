<template>
  <section id="about" class="relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500 p-6 md:p-12">
    
    <div class="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10 w-full">
      <!-- Section Header -->
      <div class="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <h2 class="text-4xl md:text-6xl lg:text-8xl font-sans tracking-tighter text-[#111111] dark:text-[#e5e5e5] max-w-4xl leading-[1] transition-colors duration-500">
            <span class="text-[#555555] font-light block mb-2 text-2xl md:text-4xl">{{ $t('about.header.prefix') }}</span>
            <span class="font-serif italic text-transparent [-webkit-text-stroke:1px_#111111] dark:[-webkit-text-stroke:1px_#e5e5e5] transition-all duration-500">{{ $t('about.header.logic') }}</span>
            <span class="font-light mx-4 md:mx-6">{{ $t('about.header.amp') }}</span>
            <span class="font-serif italic">{{ $t('about.header.aesthetics') }}</span>
          </h2>
        <a v-scroll-reveal="200" href="/resume.pdf" target="_blank" class="shrink-0 inline-flex items-center gap-4 border-b border-[#CCCCCC] dark:border-[#333333] hover:border-[#111111] dark:hover:border-[#e5e5e5] pb-2 text-[#111111] dark:text-[#e5e5e5] text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 group">
          {{ $t('about.header.cv') }}
          <svg class="w-4 h-4 text-[#888888] group-hover:text-[#111111] dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
        
        <!-- Column 1: Personal Photo & Quick Stats -->
        <div class="lg:col-span-5 flex flex-col gap-12">
          <div v-scroll-reveal="100" class="relative overflow-hidden aspect-[4/5] bg-[#E5E5E5] dark:bg-[#111111] group transition-colors duration-500">
            <img src="../assets/adm.webp" alt="Profile" class="w-full h-full object-cover grayscale transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>

          <div class="grid grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#222222] transition-colors duration-500">
            <div v-scroll-reveal="200" class="p-8 bg-[#FAFAFA] dark:bg-[#050505] flex flex-col items-start justify-center transition-colors duration-500">
              <div class="text-[3rem] font-serif italic text-[#111111] dark:text-[#e5e5e5] mb-2 leading-none transition-colors duration-500">2+</div>
              <div class="text-[10px] uppercase tracking-[0.2em] text-[#888888]">{{ $t('about.stats.yearsExp') }}</div>
            </div>
            <div v-scroll-reveal="300" class="p-8 bg-[#FAFAFA] dark:bg-[#050505] flex flex-col items-start justify-center transition-colors duration-500">
              <div class="text-[3rem] font-serif italic text-[#111111] dark:text-[#e5e5e5] mb-2 leading-none transition-colors duration-500">10+</div>
              <div class="text-[10px] uppercase tracking-[0.2em] text-[#888888]">{{ $t('about.stats.projects') }}</div>
            </div>
          </div>
        </div>
        
        <!-- Column 2: Narrative Philosophy & Workflow -->
        <div class="lg:col-span-7 flex flex-col justify-center">
          <div class="mb-16">
            <h3 v-scroll-reveal="150" class="text-xs uppercase tracking-[0.2em] text-[#111111] dark:text-[#e5e5e5] mb-8 font-medium transition-colors duration-500">{{ $t('about.philosophy.title') }}</h3>
            <div v-scroll-reveal="250" class="text-[#555555] dark:text-[#888888] text-xl md:text-3xl font-light leading-snug space-y-8 font-serif transition-colors duration-500">
              <p>
                {{ $t('about.philosophy.p1_1') }}<em class="text-[#111111] dark:text-[#e5e5e5] not-italic font-normal transition-colors duration-500">{{ $t('about.philosophy.p1_highlight') }}</em>{{ $t('about.philosophy.p1_2') }}
              </p>
              <p>
                {{ $t('about.philosophy.p2') }}
              </p>
            </div>
          </div>

          <!-- Workflow Steps -->
          <h3 v-scroll-reveal="350" class="text-xs uppercase tracking-[0.2em] text-[#111111] dark:text-[#e5e5e5] mb-8 font-medium transition-colors duration-500">{{ $t('about.process.title') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div v-scroll-reveal="400" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">{{ $t('about.process.step1.title') }}</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">{{ $t('about.process.step1.desc') }}</p>
            </div>
            <div v-scroll-reveal="450" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">{{ $t('about.process.step2.title') }}</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">{{ $t('about.process.step2.desc') }}</p>
            </div>
            <div v-scroll-reveal="500" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">{{ $t('about.process.step3.title') }}</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">{{ $t('about.process.step3.desc') }}</p>
            </div>
            <div v-scroll-reveal="550" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">{{ $t('about.process.step4.title') }}</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">{{ $t('about.process.step4.desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Matrix & Timeline Divider -->
      <div v-scroll-reveal class="w-full h-px bg-[#E5E5E5] dark:bg-[#222222] my-24 transition-colors duration-500"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <!-- Technical Expertise (Skills) -->
        <div class="lg:col-span-7 flex flex-col gap-8">
          
          <h3 v-scroll-reveal class="text-xs uppercase tracking-[0.2em] text-[#111111] dark:text-[#e5e5e5] mb-4 font-medium transition-colors duration-500">{{ $t('about.skills.title') }}</h3>

          <!-- Skills Content Wrapper for smooth transition -->
          <div class="relative w-full">
            <!-- Hard Skills View -->
            <transition name="fade">
              <div class="w-full">
                <div class="space-y-0 border-t border-[#E5E5E5] dark:border-[#222222] transition-colors duration-500">
                  <div class="py-8 border-b border-[#E5E5E5] dark:border-[#222222] flex flex-col md:flex-row md:items-start gap-4 hover:pl-4 transition-all duration-300 group">
                    <h4 class="text-lg font-serif italic text-[#111111] dark:text-[#e5e5e5] md:w-1/3 transition-colors duration-500">{{ $t('about.skills.se.title') }}</h4>
                    <div class="flex-1 text-[#888888] text-sm leading-relaxed group-hover:text-[#555555] dark:group-hover:text-[#cccccc] transition-colors">
                      {{ $t('about.skills.se.desc') }}
                    </div>
                  </div>

                  <div class="py-8 border-b border-[#E5E5E5] dark:border-[#222222] flex flex-col md:flex-row md:items-start gap-4 hover:pl-4 transition-all duration-300 group">
                    <h4 class="text-lg font-serif italic text-[#111111] dark:text-[#e5e5e5] md:w-1/3 transition-colors duration-500">{{ $t('about.skills.design.title') }}</h4>
                    <div class="flex-1 text-[#888888] text-sm leading-relaxed group-hover:text-[#555555] dark:group-hover:text-[#cccccc] transition-colors">
                      {{ $t('about.skills.design.desc') }}
                    </div>
                  </div>

                  <div class="py-8 flex flex-col md:flex-row md:items-start gap-4 hover:pl-4 transition-all duration-300 group">
                    <h4 class="text-lg font-serif italic text-[#111111] dark:text-[#e5e5e5] md:w-1/3 transition-colors duration-500">{{ $t('about.skills.lens.title') }}</h4>
                    <div class="flex-1 text-[#888888] text-sm leading-relaxed group-hover:text-[#555555] dark:group-hover:text-[#cccccc] transition-colors">
                      {{ $t('about.skills.lens.desc') }}
                    </div>
                  </div>
                </div>


              </div>
            </transition>
          </div>
        </div>

        <!-- Career Timeline -->
        <div class="lg:col-span-5 flex flex-col gap-8">
          
          <!-- Category Toggles -->
          <div v-scroll-reveal class="flex items-center gap-6 border-b border-[#CCCCCC] dark:border-[#222222] pb-4 transition-colors duration-500">
            <button 
              @click="activeTimelineTab = 'experience'"
              class="text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer pb-2 relative"
              :class="activeTimelineTab === 'experience' ? 'text-[#111111] dark:text-[#e5e5e5] font-medium' : 'text-[#888888] dark:text-[#555555] hover:text-[#111111] dark:hover:text-[#888888] font-light'"
            >
              {{ $t('about.timeline.tabs.experience') }}
              <span v-if="activeTimelineTab === 'experience'" class="absolute bottom-[-17px] left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transition-colors duration-500"></span>
            </button>
            <button 
              @click="activeTimelineTab = 'github'"
              class="text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer pb-2 relative"
              :class="activeTimelineTab === 'github' ? 'text-[#111111] dark:text-[#e5e5e5] font-medium' : 'text-[#888888] dark:text-[#555555] hover:text-[#111111] dark:hover:text-[#888888] font-light'"
            >
              {{ $t('about.timeline.tabs.github') }}
              <span v-if="activeTimelineTab === 'github'" class="absolute bottom-[-17px] left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transition-colors duration-500"></span>
            </button>
            <button 
              @click="activeTimelineTab = 'organization'"
              class="text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer pb-2 relative"
              :class="activeTimelineTab === 'organization' ? 'text-[#111111] dark:text-[#e5e5e5] font-medium' : 'text-[#888888] dark:text-[#555555] hover:text-[#111111] dark:hover:text-[#888888] font-light'"
            >
              {{ $t('about.timeline.tabs.organization') }}
              <span v-if="activeTimelineTab === 'organization'" class="absolute bottom-[-17px] left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transition-colors duration-500"></span>
            </button>
          </div>

          <!-- Timeline Content Wrapper -->
          <div class="relative min-h-[400px]">
            <transition name="fade" mode="out-in">
              <!-- Experience View -->
              <div v-if="activeTimelineTab === 'experience'" key="experience" class="w-full space-y-12">
                <!-- Timeline Item 1 -->
                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.exp.item1.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.exp.item1.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.exp.item1.desc') }}</p>
                </div>

                <!-- Timeline Item 2 -->
                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.exp.item2.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.exp.item2.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.exp.item2.desc') }}</p>
                </div>

                <!-- Timeline Item 3 -->
                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.exp.item3.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.exp.item3.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.exp.item3.desc') }}</p>
                </div>
              </div>

            <!-- GitHub View -->
              <div v-else-if="activeTimelineTab === 'github'" key="github" class="w-full space-y-12 pb-12">
                
                <!-- Open Source Statistics Grid -->
                <div>
                  <h4 class="text-xs uppercase tracking-[0.2em] font-medium text-[#111111] dark:text-[#e5e5e5] transition-colors mb-6">{{ $t('about.timeline.github.statsTitle') }}</h4>
                  
                  <div class="grid grid-cols-1 gap-6">
                    <!-- GitHub Streak Stats -->
                    <div class="w-full overflow-hidden bg-[#E5E5E5] dark:bg-[#111111] p-6 rounded-sm transition-colors duration-500 group flex items-center justify-center min-h-[160px]">
                      <img 
                        src="https://streak-stats.demolab.com?user=AZRLB23&theme=transparent&hide_border=true&title_color=111111&text_color=555555&icon_color=111111&date_format=j%20M%5B%20Y%5D" 
                        alt="GitHub Streak" 
                        class="w-full h-auto object-contain github-stats transition-all duration-1000 max-h-48"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <!-- Live Telemetry (Green Squares) -->
                <div>
                  <div class="flex items-center justify-between mb-6">
                    <h4 class="text-xs uppercase tracking-[0.2em] font-medium text-[#111111] dark:text-[#e5e5e5] transition-colors">{{ $t('about.timeline.github.graphTitle') }}</h4>
                    <span class="text-[10px] text-[#888888] flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-green-500"></span>
                      {{ $t('about.timeline.github.systemOnline') }}
                    </span>
                  </div>
                  
                  <div class="w-full overflow-hidden bg-[#E5E5E5] dark:bg-[#111111] p-6 rounded-sm transition-colors duration-500 group">
                    <p class="text-xs font-mono text-[#888888] mb-4 group-hover:text-[#555555] dark:group-hover:text-[#cccccc] transition-colors">
                      <span class="text-[#111111] dark:text-[#e5e5e5]">></span> {{ $t('about.timeline.github.fetching') }}
                    </p>
                    
                    <img 
                      :src="`https://ghchart.rshah.org/AZRLB23`" 
                      alt="GitHub Activity Graph" 
                      class="w-full h-auto object-contain github-chart transition-all duration-1000"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>

            <!-- Organization View -->
              <div v-else-if="activeTimelineTab === 'organization'" key="organization" class="w-full space-y-12">
                <!-- Timeline Item 3 (Organization) -->
                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.org.item1.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.org.item1.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.org.item1.desc') }}</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.org.item2.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.org.item2.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.org.item2.desc') }}</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.org.item3.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.org.item3.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.org.item3.desc') }}</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.org.item4.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.org.item4.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.org.item4.desc') }}</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.org.item5.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.org.item5.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.org.item5.desc') }}</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">{{ $t('about.timeline.org.item6.date') }}</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">{{ $t('about.timeline.org.item6.title') }}</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">{{ $t('about.timeline.org.item6.desc') }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTimelineTab = ref('experience')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style>
/* Global unscoped style for the GitHub chart to handle both themes effectively */
html.dark .github-chart {
  /* Invert the white background of the SVG to black, and adjust the hue so the squares look cohesive */
  filter: invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2);
  opacity: 0.8;
}

html:not(.dark) .github-chart {
  /* For light mode, desaturate to fit the minimalist aesthetic */
  filter: grayscale(100%) contrast(1.1);
  opacity: 0.7;
}

html.dark .github-chart:hover {
  filter: invert(1) hue-rotate(180deg) brightness(1) contrast(1.3);
  opacity: 1;
}

html:not(.dark) .github-chart:hover {
  filter: grayscale(0%) contrast(1.1);
  opacity: 1;
}

/* Styles for GitHub Readme Stats to match monochrome aesthetic */
html.dark .github-stats {
  filter: invert(1) grayscale(100%);
  opacity: 0.8;
}

html:not(.dark) .github-stats {
  filter: grayscale(100%);
  opacity: 0.8;
}

html.dark .github-stats:hover,
html:not(.dark) .github-stats:hover {
  opacity: 1;
}
</style>
