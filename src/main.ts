import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { locale } from './i18n'
import { translations } from './i18n/translations'
import type { Lang } from './i18n'

const app = createApp(App)

app.mixin({
  computed: {
    $lang(): Lang {
      return locale.lang
    },
    $t() {
      const lang = locale.lang
      return (key: string): string =>
        (translations[lang] as Record<string, string>)[key] ?? key
    },
  },
})

app.use(router).mount('#app')
