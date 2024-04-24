import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import daisyui from 'daisyui';

export default {
  plugins: [
    tailwind({
      content: [
        './src/**/*.{html,js,vue,ts,md}',
        './.vitepress/**/*.{html,js,vue,ts,md}',
      ],
      plugins: [daisyui],
      daisyui: {
        styled: true,
        themes: ['emerald'],
        base: false,
        utils: false,
        logs: false,
        rtl: false,
        prefix: 'ds-',
        darkTheme: "dark",
      },
    }),
    autoprefixer()
  ],
};
