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
  <UCard as="article" class="page-card" :ui="{
    root: 'grid grid-cols-1 grid-rows-[auto_1fr_auto] h-full bg-default/90',
    header: 'flex justify-between items-center w-full',
  }">
    <template #header>
      <strong class="page-title">
        <UIcon :name="`${page?.icon}`" />
        <span v-text="`${page?.title} | ${page?.description}`" />
      </strong>

      <span class="page-options">Options</span>
    </template>

    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Content not found</div>
  </UCard>
</template>

<style lang="css" scoped>
.page-title,
.page-icon,
.page-options {
  @apply flex items-center;
}

.page-title {
  @apply justify-start;
}

.page-icon {
  @apply mx-auto;
}

.page-options {
  @apply justify-end;
}
</style>