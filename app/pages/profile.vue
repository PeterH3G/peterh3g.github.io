<script lang="ts" setup>
definePageMeta({
    title: 'Profile',
    description: 'Developer Information',
    icon: 'mdi:account'
})

const props = defineProps<{
    github: any
}>()
</script>

<template>
    <PageCard>
        <UContainer as="pre">{{ props.github }}</UContainer>
    </PageCard>
</template>