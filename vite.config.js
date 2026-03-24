import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        if (fs.existsSync('dist/index.html')) {
          fs.copyFileSync('dist/index.html', 'dist/404.html')
        }
      }
    }
  ],
})
