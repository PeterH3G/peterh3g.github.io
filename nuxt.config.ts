import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@unocss/nuxt", "@pinia/nuxt"],
  mode: "spa",
  router: {
    base: "/",
  },
  runtimeConfig: {
    public: {
      githubUser: "",
    },
  },
});
