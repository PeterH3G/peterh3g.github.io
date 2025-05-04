<script lang="ts" setup>
const props = defineProps<{
    github: any
}>()

// Retrieve NuxtContent data
const { data: home } = await useAsyncData('/', () => {
  return queryCollection('content')
  .where('navigation', '=', 'true')
  .first()
})

definePageMeta({
    title: 'Home',
    description: 'This is the home page',
    icon: 'mdi:home'
})
</script>

<template>
    <PageCard bodyClass="layout-home">
        <ContentRenderer v-if="home" :value="home" />
        <div v-else>Home not found</div>
    </PageCard>
</template>