<script lang="ts" setup>
definePageMeta({
    title: 'Developer',
    description: 'Development Information',
    icon: 'mdi:code'
})

// Server API query
const { data: developer, status } = await useLazyFetch('/api/developer', {
    pick: ['itemsAccordion']
})
</script>

<template>
    <PageCard>
        <PageAccordion :items="developer?.itemsAccordion" />
    </PageCard>
</template>