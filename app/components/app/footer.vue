<script lang="ts" setup>
const props = defineProps<{
  footer: any
}>()

const footer = computed(() => {
  return props.footer
})
</script>

<template>
  <UContainer as="footer" class="app-footer">
    <div class="flex items-center justify-center">
      <ButtonAppLogo :logo="{ type: 'default', avatarUrl: footer.avatarUrl, name: footer.name }" />
      <p>&copy;2025 | All rights reserved.</p>
    </div>
  </UContainer>
</template>

<style lang="css" scoped></style>