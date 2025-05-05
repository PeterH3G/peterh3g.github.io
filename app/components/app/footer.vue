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
    <UCard as="section" :ui="{
      root: 'footer-github flex flex-col justify-center items-center w-full'
    }">
      <UButton v-for="item in footer.items" :key="item.url" trailing-icon="mdi:open-in-new" :href="item.url"
        target="_blank" size="sm" :variant="item.variant" :ui="{
          base: 'flex'
        }">
        <UIcon :name="item.icon" />
        <span v-text="item.title" />
      </UButton>
    </UCard>

    <UCard as="section" :ui="{
      root: 'footer-disclaimer flex items-center justify-center text-center w-full'
    }">

      <div class="app-title flex flex-col w-full">
        <strong class="flex items-center justify-center">
          <NuxtImg :src="footer.avatarUrl" alt="logo" width="18" height="18" />
          <span v-text="footer.name" />
        </strong>
        <em v-text="footer.description" />
      </div>

      <div class="app-disclaimer flex md:flex-col items-center justify-center w-full">
        <span class="inline-flex items-center">
          <Icon name="mdi:copyright" />
          2025 All rights reserved
        </span>
      </div>
    </UCard>
  </UContainer>
</template>