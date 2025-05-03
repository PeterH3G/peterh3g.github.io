<script lang="ts" setup>
const props = defineProps<{
    logo?: any,
    class?: string,
    isIcon?: boolean,
    variant?: any,
    size?: any,
}>()

const btnLogo = computed(() => {
    return {
        avatarURl: props.logo?.avatarUrl || '',
        name: props.logo?.name || ''
    }
})
</script>

<template>
    <UButton class="app-logo" :class="`${props.class} ${isIcon ? 'elastic justify-center items-center' : ''}`"
        :avatar="{ src: btnLogo.avatarURl }" :label="btnLogo.name || 'NO DATA'" to="/"
        :variant="props.variant ? props.variant : 'outline'" :size="props.size">
    </UButton>
</template>