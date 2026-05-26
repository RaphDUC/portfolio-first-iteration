import { ref } from 'vue'

const muted = ref(false)

const sounds: Record<string, HTMLAudioElement> = {
  navigate: new Audio('/sounds/navigate.ogg'),
  validate: new Audio('/sounds/validate.ogg'),
  cancel:   new Audio('/sounds/cancel.ogg'),
}

Object.values(sounds).forEach(s => { s.preload = 'auto' })

export function useSoundManager() {
  function play(id: 'navigate' | 'validate' | 'cancel') {
    if (muted.value) return
    const s = sounds[id]
    s.currentTime = 0
    s.play().catch(() => { /* autoplay policy — silently ignore */ })
  }
  function toggleMute() { muted.value = !muted.value }
  return { muted, play, toggleMute }
}
