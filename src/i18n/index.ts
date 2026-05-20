import Vue from 'vue'

export type Lang = 'en' | 'fr'

export const locale = Vue.observable({ lang: 'en' as Lang })

export const setLang = (lang: Lang): void => {
  locale.lang = lang
}
