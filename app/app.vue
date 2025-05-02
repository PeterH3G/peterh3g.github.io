<script lang="ts" setup>
import { appDescription, appName } from '~/constants/app'

// SEO configuration
useSeoMeta({
  title: appName,
  ogTitle: appDescription,
  description: appDescription,
  ogDescription: appDescription,
})

const header = {
  class: useAppConfig().ui.header.class,
  buttons: {
    isIcon: useAppConfig().ui.header.buttons.isIcon,
  }
}
const sidebar = {
  buttons: {
    isIcon: useAppConfig().ui.sidebar.buttons.isIcon,
  }
}
const modal = {
  icon: 'lucide:eye', // button & dialog
  label: "Information", // button
  title: "Application Information", // dialog
  description: "Specifications and features", // dialog
}

// Github API data
const githubApi = 'https://api.github.com/users/peterh3g'
interface GithubData {
  avatar_url: string,
  url: string,
  html_url: string,
  name: string,
  blog: string,
  hireable: boolean,
  bio: string
}
const { data: github } = await useLazyFetch<GithubData>(githubApi, {
  pick: ["avatar_url", "bio", "blog", "hireable", "html_url", "name", "url"]
})

const logo = computed(() => {
  let avatar_url = github.value?.avatar_url || ''
  let name = github.value?.name || ''
  return {
    avatar_url: avatar_url,
    name: name,
  } 
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <UContainer as="header" class="app-header inline-flex items-center justify-between gap-4" :class="header.class">
      <AppBtnLogo :logo="logo" />
      
      <sub class="app-description flex items-center w-full" v-text="github?.bio" />

      <AppNavigation isHeader />

      <AppButtons isHeader>
        <template #buttons>
          <AppBtnTheme :isIcon="header.buttons.isIcon" class="app-theme" label="Theme" />
        </template>
      </AppButtons>

      <AppBtnSidebar class="app-sidebar flex md:hidden" :description="appDescription" :title="appName" label="Menu"
        :isIcon="header.buttons.isIcon">
        <template #body>
          <AppNavigation />
        </template>
        <template #footer>
          <AppBtnTheme :isIcon="sidebar.buttons.isIcon" class="app-theme" label="Theme" />
        </template>
      </AppBtnSidebar>
    </UContainer>

    <UContainer as="main" class="flex flex-col w-full h-full bg-logo">
      <NuxtPage :github="github" />
    </UContainer>

    <UContainer as="footer" class="app-footer">
      <div class="flex items-center justify-center">
        <AppBtnLogo :logo="logo" />
        <p>&copy;2025 | All rights reserved.</p>
      </div>
    </UContainer>
  </UApp>
</template>

<style lang="css">
/** Global styles */
#__nuxt.app-layout {
  @apply h-full grid grid-cols-1 grid-rows-[auto_1fr_auto] items-center;
}

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