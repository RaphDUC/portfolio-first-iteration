import { ref } from 'vue'

/**
 * Shared singleton flag — true while a project card is selected via gamepad
 * in ProjectsList. Read by useGlobalGamepad to skip page-scroll handling
 * when card navigation has focus.
 */
export const gamepadCardFocused = ref(false)
