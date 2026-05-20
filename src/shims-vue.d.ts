declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $lang: import('./i18n').Lang
    $t: (key: string) => string
  }
}
