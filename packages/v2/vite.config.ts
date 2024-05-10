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
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),

    // UnoCSS(),
  ],
})
