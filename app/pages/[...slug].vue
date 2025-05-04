<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <UCard>
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer v-if="page" :value="page" />
  </UCard>
</template>