<script setup lang="ts">
import { defaults  } from '~/constants/app'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const card = {
    title: page.value?.title,
    description: page.value?.description,
    icon: page.value?.icon || 'mdi:cloud-question',
    image: page.value?.image
}
</script>

<template>
  <PageCard :card="card">
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer v-if="page" :value="page" />
  </PageCard>
</template>