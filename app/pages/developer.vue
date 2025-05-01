<script lang="ts" setup>
definePageMeta({
    title: 'Developer',
    description: 'Development Information',
    icon: 'mdi:code'
})

defineProps<{
    app: object
}>()

// Server API query
const { data: developer, status } = await useLazyFetch('/api/developer', {
    pick: ['itemsAccordion']
})
</script>

<template>
    <PageCard :app="app">
        <PageAccordion :items="developer?.itemsAccordion" />
    </PageCard>
</template>