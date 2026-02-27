import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// Custom directive for smooth, seamless scroll reveal
app.directive('scroll-reveal', {
    mounted(el, binding) {
        // Determine optional delay from binding (e.g., v-scroll-reveal="100")
        const delay = binding.value || 0;

        // Initial state: transparent and slightly lower
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-[1200ms]', 'ease-[cubic-bezier(0.22,1,0.36,1)]');

        // Apply optional delay
        if (delay) {
            el.style.transitionDelay = `${delay}ms`;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Fade In & Slide Up seamlessly
                    el.classList.remove('opacity-0', 'translate-y-12');
                    el.classList.add('opacity-100', 'translate-y-0');
                } else {
                    // Reverse animation: reset state when out of view
                    el.classList.add('opacity-0', 'translate-y-12');
                    el.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        }, {
            threshold: 0.1, // Trigger earlier so it doesn't pop in abruptly
            rootMargin: '0px 0px -50px 0px' // Wait until it's slightly higher in the viewport
        });

        observer.observe(el);
    }
})

app.mount('#app')
