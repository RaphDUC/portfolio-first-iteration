/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $lang: import('./i18n').Lang
    $t: (key: string) => string
  }
}
