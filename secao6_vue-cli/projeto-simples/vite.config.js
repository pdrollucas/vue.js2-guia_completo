import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { resolve } from 'path';
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist'), // Diretório de saída
    emptyOutDir: true, // Esvaziar o diretório de saída antes de criar novos arquivos
    rollupOptions: {
      // Indique ao Rollup para usar o arquivo main.js como ponto de entrada
      input: {
        main: resolve(__dirname, 'electron/main.js')
      }
    }
  }
})
