import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@keen-ui': `${path.resolve(__dirname, 'src')}/components/keen-ui`,
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "~/styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),

    // Components({
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: "sass",
    //     }),
    //     // 自动注册图标组件
    //     IconsResolver({
    //       enabledCollections: ['ep'],
    //     }),
    //   ],
    // }),
    // Icons({
    //   autoInstall: true,
    // }),
  ]
})
