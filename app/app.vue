<script lang="ts" setup>
// import 'defaults' for fallback values
import { defaults } from '~/constants/app'

// SEO configuration
useSeoMeta({
  title: defaults.name,
  ogTitle: defaults.description,
  description: defaults.description,
  ogDescription: defaults.description,
})

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

// Application Component configirations
const application = computed(() => {
  const avatarUrl = apiGithubUser.data.value?.avatar_url || defaults.logoUrl
  const name = apiGithubUser.data.value?.name || defaults.name
  const description = apiGithubUser.data.value?.bio || defaults.description

  return {
    avatarUrl,
    name,
    description
  }
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtLayout :application="application">
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