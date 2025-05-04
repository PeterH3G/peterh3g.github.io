<script lang="ts" setup>
const props = defineProps<{
    logo?: any
}>()

const buttonAppLogo = computed(() => {
    return {
        avatarURl: props.logo?.avatarUrl || '',
        name: props.logo?.name || '',
        variant: props.logo?.variant || '',
        size: props.logo?.size || ''
    }
})
</script>

<template>
    <UButton class="app-logo" :avatar="{ src: buttonAppLogo.avatarURl }" :label="buttonAppLogo.name || 'NO DATA'" to="/"
        :variant="buttonAppLogo.variant ? buttonAppLogo.variant : 'outline'" :size="buttonAppLogo.size || ''">
    </UButton>
</template>