<script lang="ts" setup>
const props = defineProps<{
  footer: any
}>()

const footer = computed(() => {
  const socials = [
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
    socials
  }
})
</script>

<template>
  <UContainer as="footer" class="app-footer">
    <div class="footer-socials">
      <UButton v-for="item in footer.socials" :key="item.url" trailing-icon="mdi:open-in-new" :href="item.url"
        target="_blank" size="sm" :variant="item.variant">
        <UIcon :name="item.icon" />
        <span v-text="item.title" />
      </UButton>
    </div>

    <div class="footer-bottom text-xs">
      <ButtonAppLogo :logo="{ type: 'default', avatarUrl: footer.avatarUrl, name: footer.name }" />
      <span class="pr-1">&copy;2025 | All rights reserved.</span>
    </div>
  </UContainer>
</template>

<style lang="css" scoped>
.footer-socials {
  @apply flex flex-col items-center;
}

.footer-bottom {
  @apply flex items-center justify-center;
}
</style>