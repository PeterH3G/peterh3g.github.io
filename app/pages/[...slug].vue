<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
</script>

<template>
  <PageCard :page="page">
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer v-if="page" :value="page" />
  </PageCard>
</template>