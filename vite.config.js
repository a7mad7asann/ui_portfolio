import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@fortawesome')) return 'vendor-fa';
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('@fancyapps')) return 'vendor-fancy';
            return 'vendor';
          }
        }
      }
    }
  }
})
