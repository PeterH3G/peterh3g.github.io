<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <UCard :ui="{
    root: 'grid grid-cols-1 grid-rows-[auto_1fr_auto] h-full',
    header: 'inline-flex justify-between items-center w-full'
  }">
    <template #header>
      <span class="title">
        <UIcon :name="`${page?.icon}`" />
        {{ page?.title }}
      </span>
      <span class="description">
        {{ page?.description }}
        <UIcon name="mdi:language-markdown" />
      </span>
    </template>

    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Content not found</div>
  </UCard>
</template>