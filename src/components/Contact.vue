<template>
  <section id="contact" class="relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500 p-6 md:p-12 min-h-full flex flex-col items-stretch justify-start overflow-y-auto">
    <div class="max-w-3xl mx-auto w-full relative z-10 flex flex-col mt-4 md:mt-12">
      
      <!-- Header -->
      <div class="mb-12 text-center">
        <span class="text-[10px] uppercase tracking-[0.3em] font-mono text-[#555555] dark:text-[#888888] mb-6 block transition-colors duration-500">
          [ {{ $t('contact.subtitle') }} ]
        </span>
        <h2 class="text-4xl md:text-6xl font-serif italic text-[#111111] dark:text-[#e5e5e5] leading-[0.9] tracking-tighter transition-colors duration-500">
          {{ $t('contact.title1') }}<br />
          <span class="font-sans font-light not-italic text-transparent [-webkit-text-stroke:1px_#111111] dark:[-webkit-text-stroke:1px_#e5e5e5] transition-all duration-500">{{ $t('contact.title2') }}</span>
        </h2>
      </div>

      <!-- Form Status Notices -->
      <transition name="fade">
        <div v-if="submissionStatus === 'success'" class="w-full bg-[#E5E5E5] dark:bg-[#111111] p-6 mb-8 text-center border border-[#CCCCCC] dark:border-[#222222]">
          <h3 class="font-serif italic text-2xl text-[#111111] dark:text-[#e5e5e5] mb-2">{{ $t('contact.success.title') }}</h3>
          <p class="text-sm font-light text-[#555555] dark:text-[#888888]">{{ $t('contact.success.desc') }}</p>
          <button @click="resetForm" class="mt-6 text-[10px] uppercase tracking-[0.2em] border-b border-[#111111] dark:border-[#e5e5e5] pb-1 text-[#111111] dark:text-[#e5e5e5]">{{ $t('contact.success.btn') }}</button>
        </div>
        
        <div v-else-if="submissionStatus === 'error'" class="w-full bg-red-50 dark:bg-red-950/20 p-6 mb-8 text-center border-l-2 border-red-500">
          <p class="text-sm font-light text-red-600 dark:text-red-400">{{ $t('contact.error.desc') }}</p>
          <div class="mt-4 flex gap-4 justify-center">
            <button @click="submissionStatus = 'idle'" class="text-[10px] uppercase tracking-[0.2em] border-b border-red-600 dark:border-red-400 pb-1 text-red-600 dark:text-red-400">{{ $t('contact.error.retryBtn') }}</button>
            <a href="mailto:azrielalbian23@gmail.com" class="text-[10px] uppercase tracking-[0.2em] border-b border-[#111111] dark:border-[#e5e5e5] pb-1 text-[#111111] dark:text-[#e5e5e5]">{{ $t('contact.error.directBtn') }}</a>
          </div>
        </div>
      </transition>
      
      <!-- Contact Form -->
      <form v-if="submissionStatus === 'idle' || submissionStatus === 'submitting'" @submit.prevent="submitForm" class="flex flex-col gap-8 w-full">
        
        <!-- Input Group: Name -->
        <div class="flex flex-col gap-2">
          <label 
            for="name" 
            class="text-[10px] uppercase font-mono tracking-[0.2em] text-[#555555] dark:text-[#888888]"
          >
            {{ $t('contact.form.name') }}
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name"
            required
            @keydown="handleTypingSound"
            class="block w-full bg-transparent border border-[#CCCCCC] dark:border-[#222222] focus:border-[#111111] dark:focus:border-[#e5e5e5] focus:outline-none focus:ring-0 text-[#111111] dark:text-[#e5e5e5] text-sm md:text-base py-3 px-4 font-light transition-colors"
            :placeholder="$t('contact.form.name')"
          />
        </div>

        <!-- Input Group: Email -->
        <div class="flex flex-col gap-2">
          <label 
            for="email" 
            class="text-[10px] uppercase font-mono tracking-[0.2em] text-[#555555] dark:text-[#888888]"
          >
            {{ $t('contact.form.emailLabel') }}
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            required
            @keydown="handleTypingSound"
            class="block w-full bg-transparent border border-[#CCCCCC] dark:border-[#222222] focus:border-[#111111] dark:focus:border-[#e5e5e5] focus:outline-none focus:ring-0 text-[#111111] dark:text-[#e5e5e5] text-sm md:text-base py-3 px-4 font-light transition-colors"
            :placeholder="$t('contact.form.emailPlaceholder')"
          />
        </div>

        <!-- Input Group: Message -->
        <div class="flex flex-col gap-2">
          <label 
            for="message" 
            class="text-[10px] uppercase font-mono tracking-[0.2em] text-[#555555] dark:text-[#888888]"
          >
            {{ $t('contact.form.messageLabel') }}
          </label>
          <textarea 
            id="message" 
            v-model="formData.message"
            required
            @keydown="handleTypingSound"
            class="block w-full h-32 md:h-40 bg-transparent border border-[#CCCCCC] dark:border-[#222222] focus:border-[#111111] dark:focus:border-[#e5e5e5] focus:outline-none focus:ring-0 text-[#111111] dark:text-[#e5e5e5] text-sm md:text-base p-4 font-light transition-colors resize-none custom-scrollbar"
            :placeholder="$t('contact.form.messagePlaceholder')"
          ></textarea>
        </div>

        <!-- Submission Controls -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
          <p class="text-[10px] text-[#888888] uppercase tracking-wider text-center sm:text-left">
            {{ $t('contact.poweredBy') }} <a href="https://web3forms.com" target="_blank" class="border-b border-[#CCCCCC] dark:border-[#555555] hover:text-[#111111] dark:hover:text-white transition-colors">Web3Forms</a>
          </p>

          <button 
            type="submit" 
            :disabled="submissionStatus === 'submitting'"
            class="relative cursor-pointer group overflow-hidden border border-[#111111] dark:border-[#e5e5e5] px-12 py-4 transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
          >
            <div class="absolute inset-0 w-full h-full bg-[#111111] dark:bg-[#e5e5e5] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"></div>
            
            <div class="relative z-10 flex items-center justify-center gap-3">
              <!-- Loading Spinner -->
              <svg v-if="submissionStatus === 'submitting'" class="animate-spin -ml-1 mr-2 h-4 w-4 text-[#111111] dark:text-[#e5e5e5] group-hover:text-[#FAFAFA] dark:group-hover:text-[#050505]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              
              <span class="text-[#111111] dark:text-[#e5e5e5] group-hover:text-[#FAFAFA] dark:group-hover:text-[#050505] text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-500">
                {{ submissionStatus === 'submitting' ? $t('contact.btn.submitting') : $t('contact.btn.idle') }}
              </span>
            </div>
          </button>
        </div>

      </form>
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useSound } from '../composables/useSound'

const { playType, playClick } = useSound()

const submissionStatus = ref('idle') // 'idle', 'submitting', 'success', 'error'
const formData = ref({
  name: '',
  email: '',
  message: ''
})

// Replace this with your actual Web3Forms Access Key
// Get one for free at https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = 'f6eafed6-c63c-46f8-b588-4e2dfbf9088b'

let lastTypeTime = 0
const handleTypingSound = (e) => {
  // Ignore modifier keys and ensure we don't play sounds too rapidly
  const now = performance.now()
  if (e.key.length === 1 && now - lastTypeTime > 50) {
    playType()
    lastTypeTime = now
  }
}

const submitForm = async () => {
  if (submissionStatus.value === 'submitting') return
  
  playClick()
  submissionStatus.value = 'submitting'

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
        // Optional: you can add a subject or redirect
        from_name: `Portfolio Contact: ${formData.value.name}`,
        subject: `New Inquiry from ${formData.value.name}`
      })
    })

    const result = await response.json()

    if (response.status === 200) {
      submissionStatus.value = 'success'
      playClick() // A success tick
    } else {
      console.error(result.message)
      submissionStatus.value = 'error'
    }
  } catch (error) {
    console.error('Submission failed', error)
    submissionStatus.value = 'error'
  }
}

const resetForm = () => {
  playClick()
  formData.value = { name: '', email: '', message: '' }
  submissionStatus.value = 'idle'
}
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

/* Custom Minimalist Scrollbar inside textarea */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e5e5;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #222222;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #111111;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555555;
}
</style>
