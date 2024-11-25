import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'spa-poc',
      remotes: {
          "module_simple": "http://localhost:8081/assets/remoteEntry.js",
          "module_pinia": "http://localhost:8082/assets/remoteEntry.js",
          "module_routing": "http://localhost:8083/assets/remoteEntry.js",
      },
      shared: ['vue', 'pinia', '']
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
