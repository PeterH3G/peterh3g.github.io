<script lang="ts" setup>
import { developer } from '~/constants/app'

definePageMeta({
    title: 'Developer',
    description: 'Development Information',
    icon: 'mdi:code'
})
</script>

<template>
    <PageCard>
        <pre>{{ developer }}</pre>
    </PageCard>
</template>