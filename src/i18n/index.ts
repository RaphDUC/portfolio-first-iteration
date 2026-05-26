import { reactive } from 'vue'

export type Lang = 'en' | 'fr'

export const locale = reactive({ lang: 'en' as Lang })

export const setLang = (lang: Lang): void => {
  locale.lang = lang
}
