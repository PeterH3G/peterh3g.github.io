<script setup lang="ts">
const props = defineProps<{
    isHeader: boolean
}>()

const { data: items } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation('docs', ['description', 'icon'])
        .where('published', '=', true)
        .then((response) => {
            // Transform the data before passing it to the component
            const transformedItems = response.map((item) => ({
                label: item.title,
                icon: item.icon as string, // Type assertion for 'icon' to be a string
                to: item.path
            }))
            return transformedItems
        })
})
</script>

<template>
    <UNavigationMenu highlight highlight-color="primary" :orientation="isHeader ? 'horizontal' : 'vertical'"
        :items="items" class="data-[orientation=horizontal]:horizontal data-[orientation=vertical]:vertical"
        :class="isHeader ? 'hidden md:flex' : ''" />
</template>

<style lang="css" scoped>
.horizontal {
    @apply justify-end w-full;
}
</style>