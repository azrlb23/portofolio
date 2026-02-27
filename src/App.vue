<template>
  <div class="min-h-screen bg-[#0a0a0a] text-gray-200 font-outfit overflow-x-hidden selection:bg-indigo-500/30">
    <BootLoader />
    <CustomCursor />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import CustomCursor from './components/CustomCursor.vue'
import BootLoader from './components/BootLoader.vue'
</script>

<style>
/* Global Styles */
html {
  scroll-behavior: smooth;
}

/* Page Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
