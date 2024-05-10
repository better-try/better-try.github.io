// vite.config.ts
// import UnoCSS from 'unocss/vite'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {NaiveUiResolver, QuasarResolver,} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    //
    // TODO X: UI Framework Support
    //
    Components({
      /* options */
      dts: true, // enabled by default if `typescript` is installed
      resolvers: [QuasarResolver(), NaiveUiResolver()],
    }),

    AutoImport({
      /* options */
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      autoImportComponentCase: 'combined',
      sassVariables: 'src/quasar-variables.sass',
    }),

    // UnoCSS(),
  ],

  // fix:
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 'vue-vender': ['vue', 'vuex', 'vue-router'],
          // 'naive-vender': ['naive-ui'],
          // vue: ['vue', 'vue-router', 'pinia'],
          quasar: ['quasar'],
          // naive: ['naive-ui'],
          lodash: ['lodash'],
          // 'naive-ui': ['naive-ui'],
        },
      },
    },

    chunkSizeWarningLimit: 500, // ref: https://github.com/vitejs/vite/discussions/9440
  },
})
