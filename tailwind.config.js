/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'sans-serif'], // Keep just in case
      },
      keyframes: {
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'shine': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'blob': 'blob 10s infinite',
        'shine': 'shine 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      }
    },
    cursor: {
      default: 'url(/images/cursor.png), default',
      pointer: 'url(/images/cursor-pointer.png), pointer',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

