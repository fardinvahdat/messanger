// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
  css: [
    "~/assets/fonts/icon/style.css",
    "~/assets/css/tailwind.css",
    "~/assets/css/Main.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@element-plus/nuxt", "nuxt-swiper"],
  swiper: {
    modules: ["navigation", "pagination"],
  },

  nitro: {
    devServer: {
      // My files are under src, if yours are in the root you can change this to ./
      watch: ["./"],
    },
  },
  routeRules: {
    "/": { redirect: "/home" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
});
