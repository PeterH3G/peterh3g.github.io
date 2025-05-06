<script lang="ts" setup>
// Github API data
interface GithubUser {
  avatar_url?: string;
  bio?: string;
  blog?: string;
  hireable?: boolean;
  html_url: string;
  name: string;
  url: string;
}
const apiGithubUser = await useFetch<GithubUser>('https://api.github.com/users/peterh3g', {
  pick: ['avatar_url', 'bio', 'blog', 'hireable', 'html_url', 'name', 'url']
})

// Application Component configiration with fallback values
const config = computed(() => {
  return {
    appName: apiGithubUser.data.value?.name || useAppConfig().app.name,
    appDescription: apiGithubUser.data.value?.bio || useAppConfig().app.description,
    appLogoUrl: apiGithubUser.data.value?.avatar_url || useAppConfig().app.logoUrl
  }
})

// SEO configuration
useSeoMeta({
  title: config.value.appName,
  ogTitle: config.value.appDescription,
  description: config.value.appDescription,
  ogDescription: config.value.appDescription,
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtLayout :app="config">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style lang="css">
/** Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>