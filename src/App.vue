<template>
  <div id="app" :class="{ 'is-loading': progressVisible }" :style="{ '--h1-label': h1CssLabel }">
    <div class="route-progress" :style="{ width: progressWidth + '%', opacity: progressVisible ? 1 : 0 }"></div>
    <Header />
    <div class="main">
      <transition name="scan" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { preloadImages } from './helpers';
import { useGlobalGamepad } from './composables/useGlobalGamepad';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    Header, Footer
  },
  setup() {
    useGlobalGamepad()

    const router = useRouter()
    const route = useRoute()
    const progressWidth = ref(100)
    const progressVisible = ref(false)

    const routeLabels: Record<string, string> = {
      Root: 'ABOUT',
      Resume: 'RESUME',
      GameProjects: 'GAMES',
      OtherProjects: 'OTHERS',
      InternshipProjects: 'INTERN',
      Contact: 'CONTACT',
      NotFound: '404'
    }

    const h1CssLabel = computed(() => {
      const label = routeLabels[String(route.name ?? '')] ?? 'SYS'
      const base = `// SYS.${label}`
      return `"${base}.LOAD()=${Math.round(progressWidth.value)}%"`
    })

    router.beforeEach(() => {
      progressWidth.value = 0
      progressVisible.value = true
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { progressWidth.value = 75 })
      })
    })
    router.afterEach(() => {
      progressWidth.value = 100
      setTimeout(() => { progressVisible.value = false }, 400)
    })

    return { progressWidth, progressVisible, h1CssLabel }
  },
  mounted() {
    // Preload heavy images or gifs that are used in other pages
    preloadImages([
      "img/projects/project-1-icon.png",
      "img/projects/project-2-icon.png",
      "img/projects/project-3-icon.png"
    ]);
  }
});

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

:root {
  --accent-color: #00e8c8;
  --accent-dim: rgba(0, 232, 200, 0.12);
  --border-color: rgba(255, 255, 255, 0.09);
}

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

body.gamepad-active,
body.gamepad-active * {
  cursor: none !important;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'Oxanium', Helvetica, Arial, sans-serif;
  font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
  font-family: 'Audiowide', 'Oxanium', Helvetica, Arial, sans-serif;
  letter-spacing: 0.04em;
  font-weight: 200;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}
a:hover, .router-link-exact-active {
  opacity: 1;
  color: var(--accent-color);
  text-shadow: 0 0 8px rgba(0, 232, 200, 0.35);
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

h1:hover {
  text-shadow: 0 0 18px rgba(0, 232, 200, 0.45);
}

h1::before {
  content: var(--h1-label, '// SYS');
  display: block;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.28em;
  line-height: 1.5;
  color: var(--accent-color);
  opacity: 0.55;
  letter-spacing: 0.18em;
  margin-bottom: 6px;
  text-shadow: none;
}

h1::after {
  content: '';
  display: block;
  height: 2px;
  width: 0;
  background: var(--accent-color);
  box-shadow: 0 0 8px var(--accent-color);
  margin-top: 10px;
  animation: h1-underline 0.5s ease 0.15s forwards;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.scan-enter-active {
  animation: scanIn 0.25s ease;
}
.scan-leave-active {
  animation: scanOut 0.18s ease;
}

@keyframes scanIn {
  0%   { clip-path: inset(0 0 100% 0); opacity: 0; }
  100% { clip-path: inset(0 0 0% 0);   opacity: 1; }
}
@keyframes scanOut {
  0%   { clip-path: inset(0 0 0%   0); opacity: 1; }
  100% { clip-path: inset(0 0 100% 0); opacity: 0; }
}

.route-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 6px;
  background: var(--accent-color);
  box-shadow: 0 0 8px var(--accent-color);
  transition: width 0.3s ease, opacity 0.4s ease;
  z-index: 9999;
  pointer-events: none;
}

@keyframes h1-underline {
  to { width: 48px; }
}

.is-loading .main h1 {
  animation: h1-blink 0.5s step-end infinite;
}

@keyframes h1-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.1; }
}

</style>
