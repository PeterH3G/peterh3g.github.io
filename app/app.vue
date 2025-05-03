<script lang="ts" setup>
// import 'defaults' for fallback values
import { defaults } from '~/constants/app'

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
  return {
    name: apiGithubUser.data.value?.name || defaults.name,
    avatarUrl: apiGithubUser.data.value?.avatar_url || defaults.logoUrl,
    description: apiGithubUser.data.value?.bio || defaults.description,

    header: {
      class: useAppConfig().ui.header.class,
      buttons: {
        isIcon: useAppConfig().ui.header.buttons.isIcon,
      }
    },
    sidebar: {
      buttons: {
        isIcon: useAppConfig().ui.sidebar.buttons.isIcon,
      }
    },
    footer: {
      buttons: {
        isIcon: useAppConfig().ui.sidebar.buttons.isIcon,
      }
    },

    modal: {
      icon: 'lucide:eye', // button & dialog
      label: "Information", // button
      title: "Application Information", // dialog
      description: "Specifications and features", // dialog
    },
  }
})

// SEO configuration
useSeoMeta({
  title: application.value.name || defaults.name,
  ogTitle: application.value.name || defaults.description,
  description: application.value.description || defaults.description,
  ogDescription: application.value.description || defaults.description,
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <UContainer as="header" class="app-header inline-flex items-center justify-between gap-4"
      :class="application.header.class">
      <AppBtnLogo :logo="{ type: 'default', avatarUrl: application.avatarUrl, name: application.name }" />

      <sub class="app-description items-center w-full hidden md:flex" v-text="application.description" />

      <AppNavigation isHeader />

      <AppButtons isHeader>
        <template #buttons>
          <AppBtnTheme :isIcon="application.header.buttons.isIcon" class="app-theme" label="Theme" />
        </template>
      </AppButtons>

      <AppBtnSidebar class="app-sidebar flex md:hidden" :sidebar="{
        type: 'default', title: application.name, description: application.description, label: 'Menu'
      }" :isIcon="application.header.buttons.isIcon">
        <template #body>
          <AppNavigation />
        </template>
        <template #footer>
          <AppBtnTheme :isIcon="application.sidebar.buttons.isIcon" class="app-theme" label="Theme" />
        </template>
      </AppBtnSidebar>
    </UContainer>

    <UContainer as="main" class="flex flex-col w-full h-full bg-logo">
      <NuxtPage :github="apiGithubUser" />
    </UContainer>

    <UContainer as="footer" class="app-footer">
      <div class="flex items-center justify-center">
        <AppBtnLogo :logo="{ type: 'default', avatarUrl: application.avatarUrl, name: application.name }" />
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