// Defaults / fallback values
const defaults = {
    name: 'PeterH3G', // Fallback name
    description: 'Github Pages', // Fallback description
    logoUrl: '../../favicon.ico', // Fallback logo url
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