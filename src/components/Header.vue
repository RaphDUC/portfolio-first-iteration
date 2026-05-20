<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">{{ $t('nav_about') }}</router-link>
      <router-link to="/game-projects">{{ $t('nav_games') }}</router-link>
      <router-link to="/other-projects">{{ $t('nav_other') }}</router-link>
      <router-link to="/resume">{{ $t('nav_resume') }}</router-link>
      <router-link to="/contact">{{ $t('nav_contact') }}</router-link>
      <span class="lang-toggle">
        <span
          class="lang-btn"
          :class="{ 'lang-active': $lang === 'fr' }"
          @click="setLang('fr')"
        >FR</span>
        <span class="lang-sep">|</span>
        <span
          class="lang-btn"
          :class="{ 'lang-active': $lang === 'en' }"
          @click="setLang('en')"
        >EN</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setLang } from "@/i18n";

export default Vue.extend({
  name: "Header",
  methods: {
    setLang,
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

.lang-toggle {
  display: inline-block;
  margin-left: 20px;
  margin-right: 15px;
  white-space: nowrap;
  font-size: 0.85em;
  letter-spacing: 0.05em;
}

.lang-btn {
  cursor: pointer;
  opacity: 0.4;
  padding-bottom: 8px;
  display: inline-block;
  transition: opacity 0.15s;
}

.lang-btn:hover {
  opacity: 0.8;
}

.lang-active {
  opacity: 1;
  border-bottom: 2px solid @textColor;
}

.lang-sep {
  opacity: 0.25;
  margin: 0 3px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }

  .lang-toggle {
    margin-left: 12px;
    margin-right: 9px;
  }

  .lang-btn {
    padding-bottom: 0px;
  }

  .lang-active {
    border-bottom-width: 1px;
  }
}

</style>
