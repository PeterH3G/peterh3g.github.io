<script lang="ts" setup>
const props = defineProps<{
    sidebar?: any,
}>()

// Componoent configuration
const sidebar = computed(() => {
    return {
        // Props & Fallback values
        avatarUrl: props.sidebar.avatarUrl,
        name: props.sidebar.name,
        description: props.sidebar.description,
        title: props.sidebar.title,
        icon: props.sidebar.icon || 'mdi:menu',

        // Navigation button
        button: {
            class: 'md:hidden',
            icon: '',
            label: props.sidebar.label,
            size: <any>'sm',
            variant: <any>'outline'
        },
        // Navigation close button
        buttonClose: {
            class: 'rounded-full',
            color: <any>'primary',
            variant: <any>'outline'
        }
    }
})

// Sidebar state
const open = ref(false)
</script>

<template>
    <USlideover :description="sidebar.description" :title="sidebar.title" :ui="{
        header: 'sidebar-header',
        body: 'sidebar-body',
        footer: 'sidebar-footer'
    }" v-model:open="open">

        <UButton class="sidebar-button" :class="sidebar.button.class" :icon="sidebar.icon" :label="sidebar.button.label"
            :size="sidebar.button.size" :variant="sidebar.button.variant" />
        <template #body>
            <AppNavigation />
        </template>
        <template #footer>
            <ButtonAppTheme class="app-theme" label="Theme" />
        </template>
    </USlideover>
</template>