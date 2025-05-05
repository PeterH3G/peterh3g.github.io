<script lang="ts" setup>
import { NuxtImg } from '#components';

const props = defineProps<{
  footer: any,
  isFooter?: boolean
}>()

const footer = computed(() => {
  const items = [
    {
      icon: 'mdi:github' as string,
      url: 'https://github.com/peterh3g',
      title: 'My Github Profile',
      variant: 'ghost'
    },
    {
      icon: 'mdi:github' as string,
      url: 'https://github.com/PeterH3G/peterh3g.github.io',
      title: 'Application Repository',
      variant: 'ghost'
    }
  ]

  return {
    ...props.footer,
    items
  }
})
</script>

<template>
  <UContainer as="footer" class="app-footer text-xs">
    <div class="footer-github">
      <UButton v-for="item in footer.items" :key="item.url" trailing-icon="mdi:open-in-new" :href="item.url"
        target="_blank" size="sm" :variant="item.variant">
        <UIcon :name="item.icon" />
        <span v-text="item.title" />
      </UButton>
    </div>

    <div class="footer-disclaimer">
      <NuxtImg :src="footer.avatarUrl" alt="logo" width="18" height="18" class="m-auto" />
      <span v-text="footer.name" />
      <span v-text="footer.description" />
      <span>&copy;2025 | All rights reserved.</span>
    </div>
  </UContainer>
</template>

<style lang="css" scoped>
.app-footer {
  @apply grid grid-cols-[.3fr_.4fr_.3fr] grid-rows-1;
  @apply items-center justify-center;
  grid-template-areas: "Github Disclaimer ..."
}

.footer-github {
  @apply grid grid-cols-1 grid-rows-[auto] h-full;
  grid-area: Github;
}

.footer-disclaimer {
  @apply grid grid-cols-1 grid-rows-3;
  @apply items-center justify-center;
  grid-area: Disclaimer;
  text-align: center;
}
</style>