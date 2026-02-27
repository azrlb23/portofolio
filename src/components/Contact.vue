<template>
  <section id="contact" class="relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500 p-6 md:p-12">
    <div class="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
      
      <span v-scroll-reveal class="text-xs uppercase tracking-[0.3em] font-mono text-[#555555] dark:text-[#888888] mb-8 block transition-colors duration-500">
        [ Inquiries ]
      </span>

      <h2 v-scroll-reveal="100" class="text-5xl md:text-7xl lg:text-9xl font-serif italic text-[#111111] dark:text-[#e5e5e5] mb-12 leading-[0.9] tracking-tighter transition-colors duration-500">
        Initiate<br />
        <span class="font-sans font-light not-italic text-transparent [-webkit-text-stroke:1px_#111111] dark:[-webkit-text-stroke:1px_#e5e5e5] transition-all duration-500">Dialogue.</span>
      </h2>
      
      <p v-scroll-reveal="200" class="text-base md:text-xl text-[#555555] dark:text-[#888888] mb-16 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-500">
        Currently accepting commissions for web engineering, brand identity, and editorial photography.
      </p>
      
      <a v-scroll-reveal="300" href="mailto:azrielalbian23@gmail.com" class="relative group overflow-hidden border border-[#CCCCCC] dark:border-[#555555] hover:border-[#111111] dark:hover:border-[#e5e5e5] px-12 py-5 transition-colors duration-500">
        <div class="absolute inset-0 w-full h-full bg-[#111111] dark:bg-[#e5e5e5] origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"></div>
        <span class="relative z-10 text-[#111111] dark:text-[#e5e5e5] group-hover:text-[#FAFAFA] dark:group-hover:text-[#050505] text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500">
          Connect
        </span>
      </a>
    </div>
  </section>
</template>
