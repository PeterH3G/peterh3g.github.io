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
  <UCard as="article" v-if="page" :ui="{
    root: 'page-card bg-page backdrop-blur-md grow',
    header: 'page-card-header flex items-center gap-1',
    body: 'page-card-body',
    footer: 'page-card-footer'
  }">
    <template #header>
      <UIcon :name="page?.icon" />
      {{ page?.title }} | {{ page?.description }}
    </template>
    <ContentRenderer class="card" :value="page" />
  </UCard>

  <UCard v-else class="card">Content not found</UCard>
</template>