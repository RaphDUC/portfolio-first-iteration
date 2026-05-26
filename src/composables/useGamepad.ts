import { onMounted, onUnmounted } from 'vue'

interface GamepadHandlers {
  up?: () => void
  down?: () => void
  left?: () => void
  right?: () => void
  confirm?: () => void
  cancel?: () => void
}

export function useGamepad(handlers: GamepadHandlers) {
  let rafId: number
  let prev = { up: false, down: false, left: false, right: false, a: false, b: false }

  function poll() {
    const gp = navigator.getGamepads ? navigator.getGamepads()[0] : null
    if (gp) {
      const cur = {
        up:    (gp.buttons[12]?.pressed ?? false) || (gp.axes[1] ?? 0) < -0.5,
        down:  (gp.buttons[13]?.pressed ?? false) || (gp.axes[1] ?? 0) >  0.5,
        left:  (gp.buttons[14]?.pressed ?? false) || (gp.axes[0] ?? 0) < -0.5,
        right: (gp.buttons[15]?.pressed ?? false) || (gp.axes[0] ?? 0) >  0.5,
        a:     gp.buttons[0]?.pressed ?? false,
        b:     gp.buttons[1]?.pressed ?? false,
      }
      if (cur.up    && !prev.up)    handlers.up?.()
      if (cur.down  && !prev.down)  handlers.down?.()
      if (cur.left  && !prev.left)  handlers.left?.()
      if (cur.right && !prev.right) handlers.right?.()
      if (cur.a     && !prev.a)     handlers.confirm?.()
      if (cur.b     && !prev.b)     handlers.cancel?.()
      prev = cur
    }
    rafId = requestAnimationFrame(poll)
  }

  onMounted(() => { rafId = requestAnimationFrame(poll) })
  onUnmounted(() => cancelAnimationFrame(rafId))
}
