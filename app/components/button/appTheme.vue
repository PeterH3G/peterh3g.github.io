<script lang="ts" setup>
const props = defineProps<{
    class?: string,
    gridItem?: boolean,
    label?: string,
    variant?: any,
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
    const label = props.label || 'app-theme'
    const variant = props.variant || 'ghost'

    const iconThemeSwitch = 'themeSwitch' as string
    const iconThemeLight = 'themeLight' as string
    const iconThemeDark = 'themeDark' as string

    return {
        color: isDark ? 'neutral' : 'primary',
        label,
        variant,
        icon: iconThemeSwitch
    }
})
</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton :color="button.color" :variant="button.variant" @click="isDark = !isDark">
            <Icon :name="button.icon" />
            <span v-text="button.label" />
        </UButton>

        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>