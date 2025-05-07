<script lang="ts" setup>
const props = defineProps<{
  app: any
}>()

const header = computed(() => {
  return props.app
})
</script>

<template>
  <UContainer as="header" class="app-header inline-flex items-center justify-between gap-4">
    <ButtonAppLogo :logo="{
      type: 'default',
      logoUrl: header.appLogoUrl,
      name: header.appName
    }" />

    <em class="app-description hidden md:flex items-center w-full" v-text="header.appDescription" />

    <AppNavigation isHeader />

    <UButtonGroup :ui="{
      base: 'app-buttons hidden md:flex'
    }">
      <ButtonAppTheme class="app-theme" label="Theme" />
    </UButtonGroup>

    <ButtonAppSidebar class="app-sidebar" :sidebar="{
      type: 'default',
      logoUrl: header.appLogoUrl,
      title: header.appName,
      description: header.appDescription,
      label: 'Menu'
    }" />
  </UContainer>
</template>