<script setup>
// Pinia: Accessing getters and state
import { storeToRefs } from "pinia";
import { useMainStore } from "./store/main";
import { useGithubStore } from "./store/github";

const main = useMainStore();
const { brandName, items } = storeToRefs(main);

const github = useGithubStore();
const { user } = storeToRefs(github);

// Head Management
// example: titleTemplate: (title) => `My App - ${title}`
// source:  https://v3.nuxtjs.org/guide/features/head-management
const route = useRoute();
useHead({
  title: "",
  titleTemplate: (title) => `${brandName} | ${route.meta.title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Nuxt 3 Application" }],
  link: [{ rel: "shortcut icon", type: "image/png", href: "/favicon.png" }],
});

// Navigation Routes & Options
const routes = [
  { name: "Welcome", to: "/", icon: "i-mdi-earth" },
  { name: "About", to: "/about", icon: "i-mdi-account-school" },
];
const navOptions = [{ name: "Options", icon: "i-mdi-tune" }];
</script>

<template>
  <AppNavigation :brandName="brandName" :routes="routes">
    <template #nav-menu-options>
      <button
        nav-button
        v-for="(item, index) in navOptions"
        :key="index"
        @click="openModal = !openModal"
        inline-flex
        items-center
        justify-center
      >
        <i nav-button-i :class="item.icon" />
      </button>
    </template>
  </AppNavigation>

  <AppHeader />

  <main main-root flex flex-col justify-start items-stretch>
    <NuxtPage :items="items" />
  </main>

  <AppFooter :brandName="brandName" />
</template>

<style lang="css">
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#__nuxt {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkslategrey;
  background-color: #333;
}

a {
  color: greenyellow;
  text-decoration: none !important;
}
</style>
