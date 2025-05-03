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
    <PageCard bodyClass="flex flex-col justify-start items-start max-w-full">
        <UContainer as="h1">Hello Universe!</UContainer>
        <pre class="text-xs">{{ props.github }}</pre>
    </PageCard>
</template>