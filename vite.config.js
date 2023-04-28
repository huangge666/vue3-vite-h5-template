import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import path from 'path'

// 当前工作目录路径
const root = process.cwd()

// const { resolve } = require('path')
// https://vitejs.dev/config/

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // vant 组件自动按需引入
    Components({
      resolvers: [VantResolver()]
    }),
    // svg icon
    createSvgIconsPlugin({
      // 指定图标文件夹
      iconDirs: [path.resolve(root, 'src/icons/svg')],
      // 指定 symbolId 格式
      symbolId: 'icon-[dir]-[name]'
    }),
    // 允许 setup 语法糖上添加组件名属性
    vueSetupExtend(),
  ],
  resolve: {
    alias: [
      //配置别名
      // { find: '@', replacement: resolve(__dirname, 'src') }
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
  },
  server: {
    host: true,
    https: false, //是否启用 http 2
    cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
    open: true, //服务启动时自动在浏览器中打开应用
    port: '9000',
    strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    force: true, //是否强制依赖预构建
    hmr: true, //禁用或配置 HMR 连接
    // 传递给 chockidar 的文件系统监视器选项
    watch: {
      ignored: ['!**/node_modules/your-package-name/**']
    },
    // proxy: {
    //   '^/dev-api': {
    //     target: ''
    //   }
    // }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
