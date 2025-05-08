<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: `${page.value?.title} | ${page.value?.description}`,
  description: () => `${page.value?.description}`
})

const card = computed(() => {
  return {
    title: page.value?.title || 'Card',
    description: page.value?.description || '',
    icon: page.value?.icon || '' as string,
  }
})
</script>

<template>
  <UCard as="article" :ui="{
    root: 'page-card bg-page backdrop-blur-md grow',
    header: 'page-card-header flex items-center gap-1',
    body: 'page-card-body prose',
    footer: 'page-card-footer'
  }">
    <template #header>
      <UIcon :name="card.icon" />
      {{ card.title }} | {{ card.description }}
    </template>

    <ContentRenderer v-if="page" class="card" :value="page" />
    <div v-else class="card">Content not found</div>
  </UCard>
</template>