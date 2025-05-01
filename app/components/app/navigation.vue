<script setup lang="ts">
const props = defineProps<{
    class?: string,
    isHeader?: boolean,
    variant?: any,
    ui?: object
}>()

const navigation = {
    class: props.class || '',
    ui: props.ui || {},
}

// Transform each route into a NavigationMenuItem
const items = useRouter().options.routes.map(route => {
    return {
        icon: route.meta?.icon || 'mdi:cloud-question', // Provide default values if necessary
        label: route.meta?.title || 'Untitled', // Example of a fallback value
        to: route.path,
    }
})
</script>

<template>
    <UNavigationMenu v-if="props.isHeader" :class="'hidden md:flex data-[orientation=horizontal]:w-full'" :items="items"
        :orientation="props.isHeader ? 'horizontal' : 'vertical'" :ui="navigation.ui" />

    <UNavigationMenu v-else :class="'data-[orientation=vertical]:w-full'" :items="items" orientation="vertical"
        :ui="navigation.ui" />
</template>