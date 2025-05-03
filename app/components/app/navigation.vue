<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

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

// Map each route as type <NavigationMenuItem>
const items: NavigationMenuItem[] = useRouter().options.routes.map(route => {
    const icon = typeof route.meta?.icon === 'string' ? route.meta.icon : 'mdi:cloud-question'
    const label = route.meta?.title?.toString() || 'Default Label' // Ensure label is a string
    return {
        icon: icon,
        label: label,
        to: route.path,
    }
})
</script>

<template>
    <UNavigationMenu v-if="props.isHeader" :class="`hidden md:flex data-[orientation=horizontal]:w-full ${navigation.class}`" :items="items"
        :orientation="props.isHeader ? 'horizontal' : 'vertical'" :ui="navigation.ui" />

    <UNavigationMenu v-else :class="`data-[orientation=vertical]:w-full ${navigation.class}`" :items="items" orientation="vertical"
        :ui="navigation.ui" />
</template>