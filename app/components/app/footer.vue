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
      title: 'Github Repository',
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
  <UContainer as="footer" class="app-footer text-xs xs:flex xs:flex-col md:flex items-center justify-between gap-4">
    <section class="footer-github w-full mb-4 md:mb-0">
      <UButton v-for="item in footer.items" :key="item.url" trailing-icon="mdi:open-in-new" :href="item.url"
        target="_blank" size="sm" :variant="item.variant" :ui="{
          base: 'w-full h-full justify-center items-center'
        }">
        <UIcon :name="item.icon" />
        <span v-text="item.title" />
      </UButton>
    </section>

    <section class="footer-disclaimer flex flex-col items-center justify-center w-full h-full">
      <strong class="flex items-center justify-center">
        <NuxtImg :src="footer.avatarUrl" alt="logo" width="18" height="18" />
        <span v-text="footer.name" />
      </strong>

      <em v-text="footer.description" />
      <span class="inline-flex items-center">
        <Icon name="mdi:copyright" />
        2025 All rights reserved
      </span>
    </section>
  </UContainer>
</template>