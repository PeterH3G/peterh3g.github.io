<script lang="ts" setup>
const props = defineProps<{
    isHeader?: boolean,
    label?: string,
    variant?: any,
    ui?: any,
}>()

const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})

const button = computed(() => {
    return {
        color: isDark ? 'neutral' : 'primary' as any,
        label: props.label || 'Change Theme',
        variant: props.variant || 'outline',
        ui: {
            base: `app-theme ${props.isHeader ? 'hidden md:flex h-full' : ''}`
        },
    }
})
</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton @click="isDark = !isDark" v-bind="button">
            <Icon name="themeSwitch" />
            <span v-text="button.label" />
        </UButton>
    </ClientOnly>
</template>