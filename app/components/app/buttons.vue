<script lang="ts" setup>
const props = defineProps<{
    class?: string,
    isHeader?: boolean,
}>()
</script>

<template>
    <UButtonGroup class="app-buttons" :class="props.isHeader ? 'hidden md:flex' : 'flex'">
        <slot name="buttons" />
    </UButtonGroup>
</template>