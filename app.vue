<script setup>
// .ENV data
const githubUser = useRuntimeConfig().public.githubUser;

// Application data
const brandName = githubUser + " Pages";

// Github API data
const { data: github } = await useFetch("https://api.github.com/users/" + githubUser, {
  pick: ["avatar_url", "bio", "html_url", "name"],
});

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

// Test items
const testItems = [
  { id: 0, title: "test item 1", body: "item 1 body" },
  { id: 1, title: "test item 2", body: "item 2 body" },
];
</script>

<template>
  <AppNavigation
    :brandName="brandName"
    :githubName="github.name"
    :githubAvatarUrl="github.avatar_url"
    :routes="routes"
  >
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
    <NuxtPage :testItems="testItems" />
  </main>

  <AppFooter :brandName="brandName" :github="github" />
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
