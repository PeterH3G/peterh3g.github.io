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

  <UContainer as="main" class="content bg-[url()]">
    <slot />
  </UContainer>

  <UCard :ui="{
    root: 'background  bg-size-[auto_250px] md:bg-auto absolute top-0 left-0 right-0 bottom-0 z-[-1] w-full h-full',
    body: 'w-screen h-screen flex items-end justify-center'
  }">
    <UIcon class="flask size-30 md:size-40 animate-[pulse_5s_ease-in-out_infinite]" name="mdi:flask" />
  </UCard>

  <AppFooter :app="props.app" />
</template>

<style lang="css">
main.content {
  @apply flex flex-col w-full h-full;
}

.background {
  @apply bg-center bg-no-repeat;
  background-image: v-bind(logoUrl);
}
</style>