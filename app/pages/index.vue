<script lang="ts" setup>
const props = defineProps<{
    github: any
}>()

definePageMeta({
    title: 'Home',
    description: 'This is the home page',
    icon: 'mdi:home'
})
</script>

<template>
    <PageCard bodyClass="flex flex-col justify-center items-center">
        <h1>Hello Universe!</h1>
        <pre>{{ props.github }}</pre>
    </PageCard>
</template>