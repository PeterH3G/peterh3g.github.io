<script lang="ts" setup>
// Component props
const props = defineProps<{
  application: any
}>()

// Component variables
const appHeader = computed(() => {
  return props.application
})
const appFooter = computed(() => {
  return props.application
})

// CSS variables
const mainBackgroundUrl = computed(() => `url(${ props.application?.avatar_url })`)
</script>

<template>
  <AppHeader :header="appHeader" />

  <UContainer as="main" class="flex flex-col w-full h-full bg-logo">
    <slot />
  </UContainer>

  <AppFooter :footer="appFooter" />
</template>

<style lang="css">
/** Global styles */
#__nuxt.app-layout {
  @apply h-full grid grid-cols-1 grid-rows-[auto_1fr_auto] items-center;
}

main.bg-logo {
  background-image: v-bind(mainBackgroundUrl);
  @apply bg-center bg-no-repeat bg-contain;
}
</style>