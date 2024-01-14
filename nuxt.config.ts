// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["nuxt-icons"],

  css: ["~/assets/css/main.css"],

  imports: {
    dirs: ["composables"],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "MaN",
      charset: "utf-8",
      htmlAttrs: {
        lang: "fa-IR",
        dir: "rtl",
      },
    },
  },
});
