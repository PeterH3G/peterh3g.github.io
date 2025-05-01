// Application configuration
import { appDescription, appName } from '~/constants/app'

export default defineEventHandler(() => {
    // Application Modal
    const modal = {
        icon: 'lucide:eye',
        label: "Information",
        title: "Application Information",
        description: "Specifications and features",
    }
    // Return the data
    return {
        modal: modal,
    }
})