<script lang="ts" setup>
const props = defineProps<{
    logo?: any,
    ui?: any,
}>()

const button = computed(() => {
    return {
        logoSrc: props.logo?.logoUrl || '',
        name: props.logo?.name || '',
        description: props.logo?.description || '',
        size: props.logo?.size || '',
        to: '/',
        variant: props.logo?.variant || 'ghost',
        ui: props.ui || {},
    }
})
</script>

<template>
    <UButton :avatar="{ src: button.logoSrc }" :to="button.to" :variant="button.variant" :size="button.size" :ui="{
        base: `app-logo grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-x-1 p-2 ${button.ui.base}`,
        leadingAvatar: 'row-span-2 col-start-1 col-end-1'
    }">
        <strong v-text="button.name" class="app-name col-start-2 row-start-1 row-end-1 text-sm" />
        <em class="app-description row-start-2 col-start-2 text-xs" v-text="button.description" />
    </UButton>
</template>