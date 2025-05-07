<script lang="ts" setup>
const props = defineProps<{
  app: any,
  isFooter?: boolean
}>()

const footer = computed(() => {
  const github = [
    {
      name: 'profile',
      icon: 'mdi:github' as string,
      url: 'https://github.com/peterh3g',
      title: 'Take a look at my Github profile',
      buttonLabel: '',
      variant: 'ghost'
    },
    {
      name: 'repository',
      icon: 'mdi:github' as string,
      url: 'https://github.com/PeterH3G/peterh3g.github.io',
      title: 'Github Repository',
      variant: 'ghost'
    }
  ]

  return {
    ...props.app,
    github,
  }
})
</script>

<template>
  <UContainer as="footer" class="app-footer backdrop-blur-md">
    <UCard as="section" :ui="{
      root: 'footer-disclaimer bg-glass flex flex-col justify-center items-center w-full',
    }">
      <strong class="app-name flex justify-center items-center">
        <NuxtImg :src="footer.appLogoUrl" alt="logo" width="18" height="18" />
        <span v-text="footer.appName" />
      </strong>

      <em class="description flex" v-text="footer.appDescription" />

      <span class="disclaimer-text flex items-center">
        <Icon name="mdi:copyright" />
        2025 All rights reserved
      </span>
    </UCard>
  </UContainer>
</template>