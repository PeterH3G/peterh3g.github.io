<script lang="ts" setup>
const props = defineProps<{
    logo?: any
}>()

const button = computed(() => {
    return {
        avatarURl: props.logo?.avatarUrl || '',
        name: props.logo?.name || '',
        variant: props.logo?.variant || 'ghost',
        size: props.logo?.size || 'sm',
        to: '/'
    }
})
</script>

<template>
    <UButton class="app-logo" :avatar="{ src: button.avatarURl }" :to="button.to" :variant="button.variant"
        :size="button.size">
        <span v-text="button.name" />
    </UButton>
</template>