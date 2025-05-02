<script lang="ts" setup>
definePageMeta({
    title: 'Developer',
    description: 'Development Information',
    icon: 'mdi:code'
})

const props = defineProps<{
    github: any
}>()
</script>

<template>
    <PageCard>
        <pre>{{ props.github }}</pre>
    </PageCard>
</template>