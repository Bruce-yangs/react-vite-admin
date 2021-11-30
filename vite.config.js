
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  // base: "./",
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": resolve(__dirname, "src"),
      img: resolve(__dirname, "src/assest/images"),
      views: resolve(__dirname, "src/views"),
      // "components": resolve(__dirname, "src/components"),
      // "utils": resolve(__dirname, "src/utils"),
    },
  },
  // css: {
  //   // 🔥此处添加全局scss🔥
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/variables.scss";'
  //     }
  //   }
  // },
  server: {
    open: true,
    host: "localhost",
    // port: 8090,
    https: false,
    // http 代理配置
    proxy: {
      // "/api": {
      //   target: "http://192.168.10.131:8899",
      // changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
    },
  },
});
