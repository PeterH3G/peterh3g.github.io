<script lang="ts" setup>
import { button } from '#build/ui';

const props = defineProps<{
    sidebar?: any,
    ui?: any
}>()

// Componoent configuration
const sidebar = computed(() => {
    // Nuxt UI configuration
    const slideover = {
        // Props & Fallback values
        avatarUrl: props.sidebar.avatarUrl,
        name: props.sidebar.name,
        description: props.sidebar.description,
        title: props.sidebar.title,
        ui: {
            /** class formatting: `static` + `{ if props defined` : 'defaults' } */
            root: `app-sidebar` + ` ${props.ui.root ? props.ui.root : ''}`,
            header: `sidebar-header` + ` ${props.ui.header ? props.ui.header : ''}`,
            title: `app-name` + ` ${props.ui.title ? props.ui.title : ''}`,
            description: `app-description` + ` ${props.ui.description ? props.ui.description : ''}`,
            body: `sidebar-body` + ` ${props.ui.body ? props.ui.body : ''}`,
            footer: `sidebar-footer` + ` ${props.ui.footer ? props.ui.footer : ''}`,
            close: `sidebar-close` + ` ${props.ui.close ? props.ui.close : ''}`
        }
    }

    // Navigation button
    const button = {
        icon: 'mdi:menu',
        label: props.sidebar.label,
        size: <any>'xl',
        variant: <any>'outline',
        ui: {
            base: `sidebar-button md:hidden ${props.ui.base}`,
        }
    }

    return {
        slideover: slideover,
        button: button,
    }
})

// Sidebar state
const open = ref(false)
</script>

<template>
    <USlideover v-bind="sidebar.slideover" v-model:open="open">

        <UButton v-bind="sidebar.button" />

        <template #body>
            <AppNavigation />
        </template>

        <template #footer>
            <ButtonAppTheme />
        </template>
    </USlideover>
</template>