<script lang="ts" setup>
import { Body, NuxtImg } from '#components';

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
  <UContainer as="footer" class="app-footer text-xs grid md:grid-cols-2 items-center gap-4">

    <UCard as="section" class="github" :ui="{
      root: 'w-full h-full flex justify-center items-center',
      body: 'w-full h-full flex flex-col justify-center items-center'
    }">
      <UButton v-for="item in footer.items" :key="item.url" trailing-icon="mdi:open-in-new" :href="item.url"
        target="_blank" :variant="item.variant" :ui="{
          base: 'flex',
          hover: 'hover:bg-primary-600',
          focus: 'focus:bg-primary-700'
        }">
        <UIcon :name="item.icon" />
        <span v-text="item.title" />
      </UButton>
    </UCard>

    <UCard as="section" class="disclaimer" :ui="{
      root: 'w-full h-full flex justify-center items-center',
      body: 'w-full h-full flex flex-col justify-center items-center'
    }">
      <strong class="app-name flex justify-center items-center">
        <NuxtImg :src="footer.avatarUrl" alt="logo" width="18" height="18" />
        <span v-text="footer.name" />
      </strong>

      <em class="description flex" v-text="footer.description" />

      <span class="disclaimer-text flex items-center">
        <Icon name="mdi:copyright" />
        2025 All rights reserved
      </span>
    </UCard>
  </UContainer>
</template>