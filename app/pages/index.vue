<script lang="ts" setup>
const props = defineProps<{
    github: any
}>()

definePageMeta({
    title: 'Home',
    description: 'This is the home page',
    icon: 'mdi:home'
})

const body = {
    sections: [
        { title: 'First', content: 'First section content' },
        { title: 'Second', content: 'Second section content' },
        { title: 'Third', content: 'Third section content' },
    ]
}
</script>

<template>
    <PageCard bodyClass="layout-home">
        <h1 class="intro mb-4 text-4xl font-bold leading-tight tracking-tighter text-center">Hello Universe!</h1>

        <section v-for="(section, index) in body.sections">
            <h2 class="text-3xl font-bold leading-tight tracking-tighter">{{ section.title }}</h2>
            <p class="text-base" v-html="section.content"></p>
        </section>
    </PageCard>
</template>