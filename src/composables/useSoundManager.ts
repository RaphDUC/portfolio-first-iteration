import { ref } from 'vue'

const muted = ref(false)
let unlocked = false

const sounds: Record<string, HTMLAudioElement> = {
  navigate: new Audio('/sounds/navigate.ogg'),
  validate: new Audio('/sounds/validate.ogg'),
  cancel:   new Audio('/sounds/cancel.ogg'),
}

Object.values(sounds).forEach(s => { s.preload = 'auto' })

// Unlock audio context on first real user gesture
function unlock() {
  if (unlocked) return
  const silence = Object.values(sounds)[0]
  silence.muted = true
  silence.play().then(() => { silence.pause(); silence.muted = false; unlocked = true }).catch(() => {})
  document.removeEventListener('click', unlock)
  document.removeEventListener('keydown', unlock)
}
document.addEventListener('click', unlock)
document.addEventListener('keydown', unlock)

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
