export default defineAppConfig({
    app: {
        name: 'Nuxt WSL',
        description: 'App Description',
    },

    ui: {
        header: {
            buttons: {
                isIcon: false,
            },
            class: '',
        },
        sidebar: {
            buttons: {
                isIcon: false,
            },
            class: '',
        },
        container: {
            base: 'w-full max-w-(--ui-container) mx-auto'
        }
    }
})