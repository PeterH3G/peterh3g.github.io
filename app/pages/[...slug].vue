<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: `${page.value?.title} | ${page.value?.description}`,
  description: () => `${page.value?.description}`
})
</script>

<template>
  <ContentRenderer tag="article" class="card" v-if="page" :value="page" />
  <article v-else class="card">Content not found</article>
</template>