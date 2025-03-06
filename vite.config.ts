import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lpcode-landing-page/',
  resolve: {
    alias: {
      '@styles': '/src/styles',
    },
  },
})
