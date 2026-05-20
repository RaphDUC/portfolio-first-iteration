import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { locale } from './i18n'
import { translations } from './i18n/translations'
import { Lang } from './i18n'

Vue.config.productionTip = false

Vue.mixin({
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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
