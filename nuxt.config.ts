import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@unocss/nuxt"],
  mode: 'spa',
  router: {
    base: '/'
  },
  runtimeConfig: {
    public: {
      appName: "",
      githubUser: "", // Or a default value
    },
  },
});
