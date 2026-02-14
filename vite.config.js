import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        sidebar: 'src/sidebar/index.html',
        popup: 'src/popup/index.html',
        content: 'src/content/index.js'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        inlineDynamicImports: false,
        manualChunks: undefined
      }
    },
    outDir: 'dist',
    cssCodeSplit: false
  }
})
