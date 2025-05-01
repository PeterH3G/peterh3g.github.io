<script lang="ts" setup>
definePageMeta({
    title: 'Home',
    description: 'This is the home page',
    icon: 'mdi:home'
})

defineProps<{
    app: object
}>()
</script>

<template>
    <PageCard :app="app">
        Home Page
    </PageCard>
</template>