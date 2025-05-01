<script lang="ts" setup>
const props = defineProps<{
    class?: string,
    label?: string,
    modal?: {
        class?: string,
        description?: string,
        icon?: string,
        label?: string,
        title?: string,
    },
    isIcon?: boolean,
}>()
const buttonVariant = 'ghost'
const open = ref(false)
</script>

<template>
    <UModal :description="props.modal?.description" :title="props.modal?.title" v-model:open="open">

        <UButton :icon="props.modal?.icon" :label="props.modal?.label" :variant="buttonVariant" :ui="{
            base: props.class,
        }" />

        <template #content>
            <UCard>
                <template #header>
                    <span class="modal-title">
                        <Icon :name="props.modal?.icon" />
                        <span v-text="props.modal?.title" />
                    </span>
                    <span class="modal-description">
                        <span v-text="props.modal?.description" />
                    </span>
                </template>

                <slot name="body" />

                <template #footer>
                    <UButton color="neutral" label="Exit screen" leading-icon="lucide:eye-off" @click="open = !open"
                        :ui="{
                            base: 'button-exit',
                        }" />
                </template>
            </UCard>
        </template>
    </UModal>
</template>