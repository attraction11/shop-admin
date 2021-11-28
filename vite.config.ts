import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import dotenv from 'dotenv'
import legacy from '@vitejs/plugin-legacy'

const NODE_ENV = process.env.NODE_ENV || 'development'
dotenv.config({ path: `./env.${NODE_ENV}` })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false // 禁用 eslint 缓存
    }),
    vueJsx({
      // 配置选项
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
        additionalData: '@import "@/styles/variables.scss";'
      },
      css: {
        charset: false
      }
    }
  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://shop.fed.lagou.com/api/admin', // 代理的目标地址
        // 兼容基于名字的虚拟主机
        // a.com ==>(通过域名映射主机本地端口) locahost:2xxx
        // b.com ==>(通过域名映射主机本地端口) locahost:3xxx
        // HTTP 请求头部的 origin 字段(默认真实 origin: localhost:3000)
        // 设置 changeOrigin: true 后代理服务会把 origin 字段修改为代理的目标地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
