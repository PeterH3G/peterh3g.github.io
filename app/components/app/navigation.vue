<script setup lang="ts">
const props = defineProps<{
    isHeader?: boolean
}>()

// Query the navigation items
const { data: items } = await useAsyncData('navigation', async () => {
    return (await queryCollectionNavigation('content', ['icon', 'title', 'description', 'path'])).map((item) => ({
        label: item.title,
        icon: item.icon as string, // Type assertion for 'icon' to be a string
        to: item.path,
        description: item.description as string, // Type assertion for 'description' to be a string
    }))
})

const navigation = computed(() => {
    const orientation = props.isHeader ? <any>'horizontal' : <any>'vertical'

    const uiDefault = {
        root: 'h-full w-full [&>div]:min-w-full [&>div]:min-h-full',
        list: 'flex flex-col h-full',
        item: 'py-0 grow',
        link: 'flex h-full'
    }

    const uiDesktop = {
        root: 'hidden md:flex grow self-stretch items-stretch [&>div]:min-w-full [&>div]:min-h-full',
        list: 'flex h-full',
        item: 'py-0 flex h-full'
    }

    return {
        orientation,
        uiDefault,
        uiDesktop
    }
})
</script>

<template>
    <UNavigationMenu :items="items"
        class="app-navigation data-[orientation=horizontal]:horizontal data-[orientation=vertical]:vertical"
        :orientation="navigation.orientation" v-bind:ui="props.isHeader ? navigation.uiDesktop : navigation.uiDefault">
    </UNavigationMenu>
</template>