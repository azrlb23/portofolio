<template>
  <nav class="fixed w-full z-[100] bg-[#FAFAFA] dark:bg-[#050505] border-b border-[#E5E5E5] dark:border-[#222222] transition-all duration-300" :class="{ 'py-3': !scrolled, 'py-2': scrolled }">
    <div class="max-w-screen-2xl mx-auto px-6 lg:px-12">
      <div class="flex justify-between items-center h-8">
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="font-sans font-medium text-xs tracking-[0.2em] uppercase text-[#111111] dark:text-[#e5e5e5] hover:text-[#555555] dark:hover:text-white transition-colors">
            AZRLB.
          </a>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-12">
          <button v-for="link in navLinks" :key="link.name" @click="handleNavClick(link.id)" class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#555555] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors relative group">
            {{ link.name }}
            <span class="absolute -bottom-2 left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          
          <button @click="toggleTheme" class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#555555] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors relative group">
            [ {{ isDarkMode ? 'Light' : 'Dark' }} ]
          </button>
          
          <button @click="handleNavClick('contact')" class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#FAFAFA] dark:text-[#050505] bg-[#111111] dark:bg-[#e5e5e5] hover:bg-[#555555] dark:hover:bg-white px-4 py-1.5 transition-colors">
            Let's Talk
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-6">
          <button @click="toggleTheme" class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#555555] dark:text-[#888888]">
            [ {{ isDarkMode ? 'L' : 'D' }} ]
          </button>
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-[#555555] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#e5e5e5] focus:outline-none p-2" aria-label="Toggle menu">
            <svg v-if="!isMobileMenuOpen" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-[#FAFAFA] dark:bg-[#050505] border-b border-[#E5E5E5] dark:border-[#222222]">
        <div class="px-6 py-6 space-y-6 flex flex-col items-center">
          <button v-for="link in navLinks" :key="link.name" @click="handleNavClickMobile(link.id)" class="block text-xs uppercase tracking-[0.2em] font-medium text-[#555555] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors">
            {{ link.name }}
          </button>
          <div class="w-full h-[1px] bg-[#E5E5E5] dark:bg-[#222222]"></div>
          <button @click="handleNavClickMobile('contact')" class="block text-xs uppercase tracking-[0.2em] font-medium text-[#FAFAFA] dark:text-[#050505] bg-[#111111] dark:bg-[#e5e5e5] hover:bg-[#555555] dark:hover:bg-white px-8 py-3 transition-colors">
            Let's Talk
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowManager } from '../composables/useWindowManager'

const scrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDarkMode = ref(true)

const { toggleWindow } = useWindowManager()

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const handleNavClick = (id) => {
  if (id === 'home') {
    // Scroll to top or do nothing (let's just scroll to top for now to see Hero)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    toggleWindow(id)
  }
}

const handleNavClickMobile = (id) => {
  handleNavClick(id)
  isMobileMenuOpen.value = false
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Check local storage or system preference on load
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDarkMode.value = false
    document.documentElement.classList.remove('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Selected Works', id: 'portfolio' },
]
</script>
