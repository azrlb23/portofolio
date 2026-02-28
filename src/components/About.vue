<template>
  <section id="about" class="relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500 p-6 md:p-12">
    
    <div class="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10 w-full">
      <!-- Section Header -->
      <div class="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <h2 class="text-4xl md:text-6xl lg:text-8xl font-sans tracking-tighter text-[#111111] dark:text-[#e5e5e5] max-w-4xl leading-[1] transition-colors duration-500">
            <span class="text-[#555555] font-light block mb-2 text-2xl md:text-4xl">Bridging the gap between</span>
            <span class="font-serif italic text-transparent [-webkit-text-stroke:1px_#111111] dark:[-webkit-text-stroke:1px_#e5e5e5] transition-all duration-500">logic</span>
            <span class="font-light mx-4 md:mx-6">&</span>
            <span class="font-serif italic">aesthetics.</span>
          </h2>
        <a v-scroll-reveal="200" href="/resume.pdf" target="_blank" class="shrink-0 inline-flex items-center gap-4 border-b border-[#CCCCCC] dark:border-[#333333] hover:border-[#111111] dark:hover:border-[#e5e5e5] pb-2 text-[#111111] dark:text-[#e5e5e5] text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 group">
          Curriculum Vitae
          <svg class="w-4 h-4 text-[#888888] group-hover:text-[#111111] dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
        
        <!-- Column 1: Personal Photo & Quick Stats -->
        <div class="lg:col-span-5 flex flex-col gap-12">
          <div v-scroll-reveal="100" class="relative overflow-hidden aspect-[4/5] bg-[#E5E5E5] dark:bg-[#111111] group transition-colors duration-500">
            <img src="../assets/adm.png" alt="Profile" class="w-full h-full object-cover grayscale transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>

          <div class="grid grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#222222] transition-colors duration-500">
            <div v-scroll-reveal="200" class="p-8 bg-[#FAFAFA] dark:bg-[#050505] flex flex-col items-start justify-center transition-colors duration-500">
              <div class="text-[3rem] font-serif italic text-[#111111] dark:text-[#e5e5e5] mb-2 leading-none transition-colors duration-500">2+</div>
              <div class="text-[10px] uppercase tracking-[0.2em] text-[#888888]">Years Exp.</div>
            </div>
            <div v-scroll-reveal="300" class="p-8 bg-[#FAFAFA] dark:bg-[#050505] flex flex-col items-start justify-center transition-colors duration-500">
              <div class="text-[3rem] font-serif italic text-[#111111] dark:text-[#e5e5e5] mb-2 leading-none transition-colors duration-500">10+</div>
              <div class="text-[10px] uppercase tracking-[0.2em] text-[#888888]">Projects</div>
            </div>
          </div>
        </div>
        
        <!-- Column 2: Narrative Philosophy & Workflow -->
        <div class="lg:col-span-7 flex flex-col justify-center">
          <div class="mb-16">
            <h3 v-scroll-reveal="150" class="text-xs uppercase tracking-[0.2em] text-[#111111] dark:text-[#e5e5e5] mb-8 font-medium transition-colors duration-500">Philosophy</h3>
            <div v-scroll-reveal="250" class="text-[#555555] dark:text-[#888888] text-xl md:text-3xl font-light leading-snug space-y-8 font-serif transition-colors duration-500">
              <p>
                I believe that <em class="text-[#111111] dark:text-[#e5e5e5] not-italic font-normal transition-colors duration-500">great design must be supported by clean code</em>, and robust systems need intuitive interfaces to truly shine.
              </p>
              <p>
                Through the lens of a photographer, I learned to identify crucial details and framing. As a designer, I learned empathy for the user. And as a developer, I learned how to build scalable logic to bring those aesthetic visions to life.
              </p>
            </div>
          </div>

          <!-- Workflow Steps -->
          <h3 v-scroll-reveal="350" class="text-xs uppercase tracking-[0.2em] text-[#111111] dark:text-[#e5e5e5] mb-8 font-medium transition-colors duration-500">Process</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div v-scroll-reveal="400" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">01 // Discovery</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">Understanding core goals, target audience, technical constraints, and competitive landscape.</p>
            </div>
            <div v-scroll-reveal="450" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">02 // Concept</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">Wireframing, moodboards, and establishing a raw, unfiltered visual direction.</p>
            </div>
            <div v-scroll-reveal="500" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">03 // Creation</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">Writing semantic code, designing minimalist components, and executing photoshoots.</p>
            </div>
            <div v-scroll-reveal="550" class="border-t border-[#E5E5E5] dark:border-[#222222] pt-6 group transition-colors duration-500">
              <div class="text-sm font-light text-[#555555] mb-4 font-serif italic transition-colors duration-500">04 // Delivery</div>
              <p class="text-sm text-[#888888] leading-relaxed group-hover:text-[#111111] dark:group-hover:text-[#e5e5e5] transition-colors">Rigorous testing, performance optimization, deployment, and immaculate handoff.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Matrix & Timeline Divider -->
      <div v-scroll-reveal class="w-full h-px bg-[#E5E5E5] dark:bg-[#222222] my-24 transition-colors duration-500"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <!-- Technical Expertise (Skills) -->
        <div class="lg:col-span-7 flex flex-col gap-8">
          
          <h3 v-scroll-reveal class="text-xs uppercase tracking-[0.2em] text-[#111111] dark:text-[#e5e5e5] mb-4 font-medium transition-colors duration-500">Technical Arsenal</h3>

          <!-- Skills Content Wrapper for smooth transition -->
          <div class="relative min-h-[400px]">
            <!-- Hard Skills View -->
            <transition name="fade">
              <div class="absolute inset-0 w-full">
                <div class="space-y-0 border-t border-[#E5E5E5] dark:border-[#222222] transition-colors duration-500">
                  <div class="py-8 border-b border-[#E5E5E5] dark:border-[#222222] flex flex-col md:flex-row md:items-start gap-4 hover:pl-4 transition-all duration-300 group">
                    <h4 class="text-lg font-serif italic text-[#111111] dark:text-[#e5e5e5] md:w-1/3 transition-colors duration-500">Software Engineering</h4>
                    <div class="flex-1 text-[#888888] text-sm leading-relaxed group-hover:text-[#555555] dark:group-hover:text-[#cccccc] transition-colors">
                      Vue.js, Next.js, TailwindCSS, Node.js, Java, Python. Focus on clean architectures and robust REST APIs.
                    </div>
                  </div>

                  <div class="py-8 border-b border-[#E5E5E5] dark:border-[#222222] flex flex-col md:flex-row md:items-start gap-4 hover:pl-4 transition-all duration-300 group">
                    <h4 class="text-lg font-serif italic text-[#111111] dark:text-[#e5e5e5] md:w-1/3 transition-colors duration-500">Art Direction & Design</h4>
                    <div class="flex-1 text-[#888888] text-sm leading-relaxed group-hover:text-[#555555] dark:group-hover:text-[#cccccc] transition-colors">
                      Figma, Adobe Illustrator, UI/UX, Typography, Brand Identity. Crafting interfaces that feel physical.
                    </div>
                  </div>

                  <div class="py-8 border-b border-[#E5E5E5] dark:border-[#222222] flex flex-col md:flex-row md:items-start gap-4 hover:pl-4 transition-all duration-300 group">
                    <h4 class="text-lg font-serif italic text-[#111111] dark:text-[#e5e5e5] md:w-1/3 transition-colors duration-500">Lens Work</h4>
                    <div class="flex-1 text-[#888888] text-sm leading-relaxed group-hover:text-[#555555] dark:group-hover:text-[#cccccc] transition-colors">
                      Portraiture, Commercial Photography, Lightroom, Color Grading. Capturing raw emotional geometry.
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
              Experience
              <span v-if="activeTimelineTab === 'experience'" class="absolute bottom-[-17px] left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transition-colors duration-500"></span>
            </button>
            <button 
              @click="activeTimelineTab = 'organization'"
              class="text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer pb-2 relative"
              :class="activeTimelineTab === 'organization' ? 'text-[#111111] dark:text-[#e5e5e5] font-medium' : 'text-[#888888] dark:text-[#555555] hover:text-[#111111] dark:hover:text-[#888888] font-light'"
            >
              Organization
              <span v-if="activeTimelineTab === 'organization'" class="absolute bottom-[-17px] left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transition-colors duration-500"></span>
            </button>
          </div>

          <!-- Timeline Content Wrapper -->
          <div class="relative min-h-[400px]">
            <!-- Experience View -->
            <transition name="fade">
              <div v-if="activeTimelineTab === 'experience'" class="absolute inset-0 w-full space-y-12">
                <!-- Timeline Item 1 -->
                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">Present</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Freelance Creative Developer</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Building modern web applications and providing full-stack design solutions for high-end clientele.</p>
                </div>

                <!-- Timeline Item 2 -->
                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">2024</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Computer Science Degree</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Graduated with honors, focusing on human-computer interaction, algorithm design, and modern web technologies.</p>
                </div>
              </div>
            </transition>

            <!-- Organization View -->
            <transition name="fade">
              <div v-if="activeTimelineTab === 'organization'" class="absolute inset-0 w-full space-y-12">
                <!-- Timeline Item 3 (Organization) -->
                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">2026 - Present</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Institute of Electrical and Electronics Engineers ITK Student Branch</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Chairperson.</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">2026 - Present</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Informatics Student Association of ITK</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Expert Staff, Student Resource Development.</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">2025 - 2026</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Institute of Electrical and Electronics Engineers ITK Student Branch</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Human Resources Department.</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">2025 - 2026</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Informatics Student Association of ITK</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Staff, Student Resource Development.</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">2023 - 2025</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Anti-Drug Alert Network (Jarwasnaba)</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Member.</p>
                </div>

                <div class="group">
                  <span class="text-[10px] font-medium text-[#555555] uppercase tracking-[0.2em] mb-2 block">2023 - 2024</span>
                  <h4 class="text-[#111111] dark:text-[#e5e5e5] font-serif text-2xl italic mb-3 transition-colors group-hover:text-[#555555] dark:group-hover:text-white">Student Council of SMAN 5 Balikpapan</h4>
                  <p class="text-[#888888] text-sm leading-relaxed">Vice Chairperson.</p>
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
