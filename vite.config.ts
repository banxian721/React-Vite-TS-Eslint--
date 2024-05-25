import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false, // failOnError 表示在Eslint检测到错误后直接退出构建
      // fix: true, // fix 表示在Eslint检测到错误后自动修复
      // cache: false, // cache 表示在缓存中缓存Eslint检测结果以加速下一次构建
    })
  ],
  resolve: {
    alias: {
      // 别名
      '@': '/src'
    }
  }
})