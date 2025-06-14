import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from "sass"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' }
    ]
  },
})
