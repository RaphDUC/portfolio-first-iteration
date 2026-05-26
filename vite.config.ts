import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue({ template: { transformAssetUrls: false } })],
  base: '/portfolio-first-iteration/',
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  }
})
