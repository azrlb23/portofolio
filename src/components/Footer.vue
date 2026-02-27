<template>
  <footer class="py-12 border-t border-[#E5E5E5] dark:border-[#222222] bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500">
    <div class="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex flex-col items-center md:items-start gap-2">
        <a href="#" class="font-sans font-medium text-xs tracking-[0.2em] uppercase text-[#111111] dark:text-[#e5e5e5] hover:text-[#555555] dark:hover:text-white transition-colors">
          AZRLB.
        </a>
        <p class="text-[#888888] dark:text-[#555555] text-[10px] uppercase tracking-[0.2em] transition-colors duration-500">
          &copy; {{ new Date().getFullYear() }} INDONESIA.
        </p>
      </div>
      
      <div class="flex gap-8">
        <a href="https://github.com/azrlb23" target="_blank" rel="noopener noreferrer" class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#888888] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors relative group">
          GTHB
          <span class="absolute -bottom-1 left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
        </a>
        <a href="www.linkedin.com/in/mochammad-azriel-albian-putra-1126721b0" target="_blank" rel="noopener noreferrer" class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#888888] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors relative group">
          LKDN
          <span class="absolute -bottom-1 left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
        </a>
        <a href="https://instagram.com/azrlb" target="_blank" rel="noopener noreferrer" class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#888888] hover:text-[#111111] dark:hover:text-[#e5e5e5] transition-colors relative group">
          INST
          <span class="absolute -bottom-1 left-0 w-full h-[1px] bg-[#111111] dark:bg-[#e5e5e5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
        </a>
      </div>
    </div>
  </footer>
</template>
