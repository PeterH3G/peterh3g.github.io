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
      <div class="app-name flex flex-col justify-center items-center gap-x-1 text-sm">
        <span class="inline-flex items-center">
          <NuxtImg :src="footer.appLogoUrl" alt="logo" width="16" height="16" />
          <strong v-text="footer.appName" />
        </span>
        <em class="app-description" v-text="footer.appDescription" />
      </div>

      <sub class="disclaimer-text flex items-center justify-center">
        <Icon name="mdi:copyright" /> 2025 All rights reserved
      </sub>
    </UCard>
  </UContainer>
</template>