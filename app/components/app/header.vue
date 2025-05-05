<script lang="ts" setup>
const props = defineProps<{
  header: any
}>()

const header = computed(() => {
  return props.header
})
</script>

<template>
  <UContainer as="header" class="app-header inline-flex items-center justify-between gap-4">
    <ButtonAppLogo :logo="{ type: 'default', avatarUrl: header.avatarUrl, name: header.name }" />

    <em class="app-description items-center flex w-full text-xs" v-text="header.description" />

    <AppNavigation isHeader />

    <UButtonGroup class="app-buttons" :class="'hidden md:flex'">
      <ButtonAppTheme class="app-theme" label="Theme" />
    </UButtonGroup>

    <ButtonAppSidebar class="app-sidebar" :sidebar="{
      type: 'default', title: header.name, label: 'Menu'
    }" />
  </UContainer>
</template>