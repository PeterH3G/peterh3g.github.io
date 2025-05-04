<script lang="ts" setup>
definePageMeta({
    title: 'Docs',
    description: 'NuxtContent markdown',
    icon: 'mdi:account'
})

// Page props
const props = defineProps<{
    github: any
}>()

// Retrieve NuxtContent data
const { data: docs } = await useAsyncData(useRoute().path, () => {
    return queryCollection('docs').first()
})
</script>

<template>
    <PageCard bodyClass="layout-docs">
        <ContentRenderer v-if="docs" :value="docs" />
        <div v-else>Docs Index not found</div>
    </PageCard>
</template>