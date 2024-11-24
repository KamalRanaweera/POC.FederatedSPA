import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'remote-app',
      filename: 'appComponentSimple.js',
      // Modules to expose
      exposes: {
          './TestComponent': './src/components/TestComponent.vue',
      },
      shared: ['vue']
  })
  ],
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})