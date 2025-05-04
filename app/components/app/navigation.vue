<script setup lang="ts">
const { data: items } = await useAsyncData('docs', () => queryCollectionNavigation('docs').where('published', '=', true))

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
</script>

<template>
    <UNavigationMenu v-if="props.isHeader"
        :class="`hidden md:flex data-[orientation=horizontal]:w-full ${navigation.class}`" :items="items"
        :orientation="props.isHeader ? 'horizontal' : 'vertical'" :ui="navigation.ui" />

    <UNavigationMenu v-else :class="`data-[orientation=vertical]:w-full ${navigation.class}`" :items="items"
        orientation="vertical" :ui="navigation.ui" />
</template>