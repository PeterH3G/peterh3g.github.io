<script lang="ts" setup>
// Component props
const props = defineProps<{
  app: any
}>()

const logoUrl = `url(${props.app.appLogoUrl})`
</script>

<template>
  <AppHeader :app="props.app" />
  <UContainer as="main" class="content">
    <slot />
  </UContainer>
  <AppFooter :app="props.app" />
</template>

<style lang="css">
:is(.app-layout) main.content {
  @apply flex flex-col w-full h-full;
  @apply bg-center bg-no-repeat;
  background-image: v-bind(logoUrl);
}
</style>