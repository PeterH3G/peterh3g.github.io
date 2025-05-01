<script lang="ts" setup>
const props = defineProps<{
    class?: string,
    modal?: any,
    isIcon?: boolean,
}>()

const docIcon = 'mdi:api'
const title = props.modal.title || 'No Modal title'
const description = props.modal.description || 'No Modal description'
const icon = props.modal.icon || 'lucide:eye'
const label = props.modal.label || ''
const variant = props.modal.variant || 'ghost'
const open = ref(false)
</script>

<template>
    <UModal :description="description" :title="title" v-model:open="open">

        <UButton :icon="icon" :label="props.isIcon ? '' : label" :variant="variant" :ui="{
            base: props.class,
        }" />

        <template #content>
            <UCard>
                <template #header>
                    <span class="modal-title">
                        <Icon :name="icon" />
                        <span v-text="title" />
                    </span>
                    <span class="modal-description">
                        <span v-text="description" />
                        <Icon :name="docIcon" />
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