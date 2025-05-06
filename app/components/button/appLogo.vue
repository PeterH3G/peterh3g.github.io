<script lang="ts" setup>
const props = defineProps<{
    logo?: any
}>()

const button = computed(() => {
    return {
        logoSrc: props.logo?.logoUrl || '',
        name: props.logo?.name || '',
        size: props.logo?.size || 'sm',
        to: '/',
        variant: props.logo?.variant || 'outline'
    }
})
</script>

<template>
    <UButton class="app-logo" :avatar="{ src: button.logoSrc }" :to="button.to" :variant="button.variant"
        :size="button.size">
        <span v-text="button.name" />
    </UButton>
</template>