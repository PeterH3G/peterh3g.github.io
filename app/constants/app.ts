// Defaults / fallback values
const defaults = {
    name: 'default-name',
    description: 'default-description',
    logoUrl: '../../favicon.ico',
}

// Used for ./nuxt.config.ts
const appHead = {
    htmlAttrs: {
        class: 'w-full h-full',
    },
    bodyAttrs: {
        class: 'w-full h-full',
    },
    rootAttrs: {
        class: 'app-layout'
    }
}

// Exports
export {
    defaults,
    appHead,
}