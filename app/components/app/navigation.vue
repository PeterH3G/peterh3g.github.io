<script setup lang="ts">
const props = defineProps<{
    isHeader?: boolean
}>()

const { data: items } = await useAsyncData('navigation', async () => {
    return (await queryCollectionNavigation('content', ['icon', 'title', 'description', 'path'])).map((item) => ({
        label: item.title,
        icon: item.icon as string, // Type assertion for 'icon' to be a string
        to: item.path,
        description: item.description as string, // Type assertion for 'description' to be a string
    }))
})
</script>

<template>
    <UNavigationMenu highlight highlight-color="primary" :orientation="props.isHeader ? 'horizontal' : 'vertical'"
        :items="items" class="data-[orientation=horizontal]:horizontal data-[orientation=vertical]:vertical" :ui="{
            root: `${isHeader ? 'hidden md:flex justify-end w-full h-full' : 'w-full h-full'}`,
            list: isHeader ? '' : 'w-full h-full',
            item: isHeader ? '' : 'w-full h-full',
            link: isHeader ? '' : 'w-full h-full text-2xl'
        }" />
</template>