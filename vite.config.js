// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path - change this to your GitHub repository name
  // For example, if your repo is at https://github.com/yourusername/portfolio
  // then the base would be '/portfolio/'
  base: '/Sajid-web--v2/',
})