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
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <UContainer as="header" class="app-header inline-flex items-center justify-between" :class="header.class">
      <AppBtnLogo />

      <AppNavigation isHeader />

      <AppButtons isHeader>
        <template #buttons>
          <AppBtnModal :isIcon="header.buttons.isIcon" class="app-modal" :modal="modal" />
          <AppBtnTheme :isIcon="header.buttons.isIcon" class="app-theme" label="Theme" />
        </template>
      </AppButtons>

      <AppBtnSidebar class="app-sidebar flex md:hidden" :description="appDescription" :title="appName" label="Menu"
        :isIcon="header.buttons.isIcon">
        <template #body>
          <AppNavigation />
        </template>
        <template #footer>
          <AppBtnModal :isIcon="sidebar.buttons.isIcon" class="app-modal" :modal="modal" />
          <AppBtnTheme :isIcon="sidebar.buttons.isIcon" class="app-theme" label="Theme" />
        </template>
      </AppBtnSidebar>
    </UContainer>

    <UContainer as="main" class="flex flex-col w-full h-full bg-logo">
      <NuxtPage />
    </UContainer>

    <UContainer as="footer" class="app-footer">
      <div class="flex items-center justify-center">
        <AppBtnLogo />
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