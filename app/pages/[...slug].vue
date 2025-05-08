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
    root: 'page grow',
    header: 'header',
    body: 'body prose',
    footer: 'footer'
  }">
    <template #header>
      <UIcon :name="card.icon" />
      {{ card.title }} | {{ card.description }}
    </template>

    <ContentRenderer v-if="page" :value="page" />

    <div v-else>Content not found</div>

    <template #footer></template>
  </UCard>
</template>