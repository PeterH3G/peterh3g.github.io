// import 'defaults' for fallback values
import { defaults } from '~/constants/app'

export default defineAppConfig({
    app: {
        // Fallback values
        description: defaults.description,
        logoUrl: defaults.logoUrl,
        name: defaults.name,
    },

    // Nuxt UI Overrides
    ui: {
        container: {
            base: 'w-full max-w-(--ui-container) mx-auto px-4'
        }
    }
})