<template>
  <div class="min-h-screen bg-[#0a0a0a] text-gray-200 font-outfit overflow-x-hidden selection:bg-indigo-500/30">
    <BootLoader />
    <CustomCursor />
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
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
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
