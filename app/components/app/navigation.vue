<script setup lang="ts">
const props = defineProps<{
    isHeader: boolean
}>()

const { data: items } = await useAsyncData('navigation', async () => {
    return (await queryCollectionNavigation('content', ['icon', 'title', 'path'])).map((item) => ({
        label: item.title,
        icon: item.icon as string, // Type assertion for 'icon' to be a string
        to: item.path
    }))
})
</script>

<template>
    <UNavigationMenu highlight highlight-color="primary" :orientation="props.isHeader ? 'horizontal' : 'vertical'"
        :items="items" class="data-[orientation=horizontal]:horizontal data-[orientation=vertical]:vertical"
        :class="isHeader ? 'hidden md:flex' : ''" />
</template>

<style lang="css" scoped>
.horizontal {
    @apply justify-end w-full;
}
</style>