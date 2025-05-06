<script lang="ts" setup>
// Component props
const props = defineProps<{
  app: any
}>()

// CSS variables
const logoUrl = computed(() => `url(${props.app?.appLogoUrl})`)
</script>

<template>
  <AppHeader :app="props.app" />

  <UContainer as="main" class="content">
    <slot />
  </UContainer>

  <AppFooter :app="props.app" />
</template>

<style lang="css">
/** Global styles */
#__nuxt.app-layout {
  @apply h-full grid grid-cols-1 grid-rows-[auto_1fr_auto] items-center;
}

main.content {
  background-image: v-bind(logoUrl);
  @apply bg-center bg-no-repeat;
  @apply flex flex-col w-full h-full;
}

nav .mobile div:first {
  height: 100% !important;
}
</style>