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
    const defaults = {
        root: 'flex gap-1.5 h-full [&>div]:min-w-0 [&>div]:min-h-full',
        label: 'w-full flex items-center gap-2 text-highlighted p-2',
        list: 'isolate min-w-0 flex flex-col h-full',
        item: 'min-w-0 h-full',
        link: 'group flex w-full h-full flex items-center justify-center gap-1',
        separator: 'px-2 h-px bg-border'
    }

    const desktop = {
        root: 'desktop hidden md:flex items-center justify-end',
        label: '',
        list: '',
        item: '',
        link: '',
        separator: 'px-2 h-px bg-border',
    }

    return {
        defaults,
        desktop
    }
})
</script>

<template>
    <UNavigationMenu highlight highlight-color="primary" :orientation="props.isHeader ? 'horizontal' : 'vertical'"
        :items="items" class="data-[orientation=horizontal]:horizontal data-[orientation=vertical]:vertical" :ui="{
            root: props.isHeader ? navigation.desktop.root : navigation.defaults.root,
            label: props.isHeader ? navigation.desktop.label : navigation.defaults.label,
            list: props.isHeader ? navigation.desktop.list : navigation.defaults.list,
            item: props.isHeader ? navigation.desktop.item : navigation.defaults.item,
            link: props.isHeader ? navigation.desktop.link : navigation.defaults.link,
            separator: props.isHeader ? navigation.desktop.separator : navigation.defaults.separator
        }">
    </UNavigationMenu>
</template>