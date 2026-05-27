import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { gamepadCardFocused } from './useGamepadState'
import { useSoundManager } from './useSoundManager'

/**
 * Standard Gamepad API mapping (Chrome / Edge, Xbox & PS controllers):
 *   buttons[4]  = LB / L1       buttons[5]  = RB / R1
 *   buttons[6]  = LT / L2       buttons[7]  = RT / R2
 *   buttons[12] = D-pad Up      buttons[13] = D-pad Down
 *   buttons[14] = D-pad Left    buttons[15] = D-pad Right
 *   axes[0] = Left Stick X      axes[1] = Left Stick Y
 *   axes[2] = Right Stick X     axes[3] = Right Stick Y
 */

const ROUTES       = ['/', '/game-projects', '/other-projects', '/internship-projects', '/resume', '/contact']
const SCROLL_SPEED = 10   // px per frame for analog sticks (60fps ≈ 600px/s at full deflection)
const DPAD_SCROLL  = 120  // px per digital D-pad press

export function useGlobalGamepad() {
  const router = useRouter()
  const { play } = useSoundManager()

  let rafId: number
  let isGamepadMode = false

  const prev = {
    lt: false, rt: false,
    dpadUp: false, dpadDown: false,
  }

  // ── Cursor visibility ────────────────────────────────────────────────────

  function setGamepadMode(active: boolean) {
    if (active === isGamepadMode) return
    isGamepadMode = active
    document.body.classList.toggle('gamepad-active', active)
  }

  function onMouseMove() {
    setGamepadMode(false)
  }

  // ── Polling loop ─────────────────────────────────────────────────────────

  function routeIndex(): number {
    const idx = ROUTES.indexOf(router.currentRoute.value.path)
    return idx === -1 ? 0 : idx
  }

  function poll() {
    const gp = navigator.getGamepads ? navigator.getGamepads()[0] : null

    if (gp) {
      const anyInput = gp.axes.some(a => Math.abs(a) > 0.12) || gp.buttons.some(b => b.pressed)
      if (anyInput) setGamepadMode(true)

      // ── LT / RT (buttons 6/7) or LB/RB (buttons 4/5) : cycle header routes ──────────────────────
      const lt = gp.buttons[6]?.pressed ?? false
      const rt = gp.buttons[7]?.pressed ?? false
      const lb = gp.buttons[4]?.pressed ?? false
      const rb = gp.buttons[5]?.pressed ?? false
      if (lt && !prev.lt || lb && !prev.lb) {
        router.push(ROUTES[(routeIndex() - 1 + ROUTES.length) % ROUTES.length])
        play('navigate')
      }
      if (rt && !prev.rt || rb && !prev.rb) {
        router.push(ROUTES[(routeIndex() + 1) % ROUTES.length])
        play('navigate')
      }
      prev.lt = lt
      prev.rt = rt
      prev.lb = lb
      prev.rb = rb

      // ── Right stick Y (axes[3]): analog page scroll (always active) ──────
      const rsY = gp.axes[3] ?? 0
      if (Math.abs(rsY) > 0.15) {
        window.scrollBy(0, rsY * SCROLL_SPEED)
      }

      // ── Left stick Y + D-pad up/down: page scroll when no card focused ───
      const dpadBtnUp   = gp.buttons[12]?.pressed ?? false
      const dpadBtnDown = gp.buttons[13]?.pressed ?? false

      if (!gamepadCardFocused.value) {
        // Analog left stick: smooth continuous scroll
        const lsY = gp.axes[1] ?? 0
        if (Math.abs(lsY) > 0.15) {
          window.scrollBy(0, lsY * SCROLL_SPEED)
        }
        // Digital D-pad: one-shot step scroll
        if (dpadBtnUp   && !prev.dpadUp)   window.scrollBy(0, -DPAD_SCROLL)
        if (dpadBtnDown && !prev.dpadDown) window.scrollBy(0,  DPAD_SCROLL)
      }

      // Always advance debounce state so it stays in sync regardless of focus
      prev.dpadUp   = dpadBtnUp
      prev.dpadDown = dpadBtnDown
    }

    rafId = requestAnimationFrame(poll)
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(poll)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    cancelAnimationFrame(rafId)
    document.body.classList.remove('gamepad-active')
  })
}
