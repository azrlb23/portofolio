<template>
  <div class="relative w-full min-h-screen bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500">
    
    <!-- OS Window Manager Layer (Fixed over viewport) -->
    <div class="fixed inset-0 z-40 pointer-events-none">
      <div class="w-full h-full relative pointer-events-none">
        <DraggableWindow 
          v-for="win in activeWindows" 
          :key="win.id" 
          :windowId="win.id"
        >
          <About v-if="win.id === 'about'" />
          <Portfolio v-if="win.id === 'portfolio'" />
          <Contact v-if="win.id === 'contact'" />
          <ProjectDetailView v-if="win.id === 'project-detail'" :projectId="activeProjectId" />
        </DraggableWindow>
      </div>
    </div>

    <!-- Background Content (Natural Scroll Flow) -->
    <Navbar />
    <Hero />
    <Footer />

  </div>
</template>

<script setup>
import { useWindowManager } from '../composables/useWindowManager'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import DraggableWindow from '../components/DraggableWindow.vue'
import ProjectDetailView from './ProjectDetailView.vue'

const { activeWindows, activeProjectId } = useWindowManager()
</script>
