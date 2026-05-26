<template>
  <div id="app">
    
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
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { preloadImages } from './helpers';
import { useGlobalGamepad } from './composables/useGlobalGamepad';

export default defineComponent({
  name: 'App',
  components: {
    Header, Footer
  },
  setup() {
    useGlobalGamepad()
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

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
  font-family: 'Exo 2', 'Karla', Helvetica, Arial, sans-serif;
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
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
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

</style>
