<script lang="ts" setup>
const props = defineProps<{
  app: any,
  ui?: any,
}>()

const header = computed(() => {
  const app = props.app || {}
  const ui = props.ui || {}

  return {
    ...app,
    ...ui,
  }
})
</script>

<template>
  <UContainer as="header" class="app-header inline-flex items-center justify-between gap-2">
    <ButtonAppLogo :logo="{
      type: 'default',
      logoUrl: header.appLogoUrl,
      name: header.appName,
      description: header.appDescription,
    }" :ui="{}" />

    <AppNavigation isHeader />

    <UButtonGroup class="app-buttons hidden md:flex self-stretch">
      <ButtonAppTheme isHeader />
    </UButtonGroup>

    <ButtonAppSidebar :sidebar="{
      type: 'default',
      logoUrl: header.appLogoUrl,
      title: header.appName,
      description: header.appDescription,
      label: 'Menu'
    }" :ui="{
      base: 'app-sidebar'
    }" />
  </UContainer>
</template>