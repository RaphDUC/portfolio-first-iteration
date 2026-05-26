<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/" @mouseenter="play('navigate')">{{ $t('nav_about') }}</router-link>
      <router-link to="/game-projects" @mouseenter="play('navigate')">{{ $t('nav_games') }}</router-link>
      <router-link to="/other-projects" @mouseenter="play('navigate')">{{ $t('nav_other') }}</router-link>
      <router-link to="/resume" @mouseenter="play('navigate')">{{ $t('nav_resume') }}</router-link>
      <router-link to="/contact" @mouseenter="play('navigate')">{{ $t('nav_contact') }}</router-link>
      <span class="lang-toggle">
        <span
          class="lang-btn"
          :class="{ 'lang-active': $lang === 'fr' }"
          @click="setLang('fr'); play('navigate')"
        >FR</span>
        <span class="lang-sep">|</span>
        <span
          class="lang-btn"
          :class="{ 'lang-active': $lang === 'en' }"
          @click="setLang('en'); play('navigate')"
        >EN</span>
      </span>
      <span class="mute-btn" @click="toggleMute" :title="muted ? 'Unmute' : 'Mute sounds'">
        <i :class="muted ? 'fa fa-volume-off' : 'fa fa-volume-up'"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setLang } from "@/i18n";
import { useSoundManager } from "@/composables/useSoundManager";

export default defineComponent({
  name: "Header",
  setup() {
    const { muted, play, toggleMute } = useSoundManager()
    return { muted, play, toggleMute }
  },
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
  font-family: 'Share Tech Mono', monospace;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  letter-spacing: 0.06em;
  transition: color 0.15s ease, opacity 0.15s ease;
}

a::before,
a::after {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  border-color: @accentColor;
  border-style: solid;
  opacity: 0;
  transition: opacity 0.15s ease, transform 0.15s ease;
  pointer-events: none;
}

a::before {
  top: 0;
  left: -5px;
  border-width: 1px 0 0 1px;
  transform: translate(-3px, -3px);
}

a::after {
  bottom: 6px;
  right: -5px;
  border-width: 0 1px 1px 0;
  transform: translate(3px, 3px);
}

a:hover::before,
a:hover::after {
  opacity: 1;
  transform: translate(0, 0);
}

a:hover {
  color: @accentColor;
  opacity: 1;
}

.router-link-exact-active {
  color: @accentColor;
  opacity: 1;
  border-bottom: 2px solid @accentColor;
}

.router-link-exact-active::before,
.router-link-exact-active::after {
  opacity: 1;
  transform: translate(0, 0);
}

.lang-toggle {
  display: inline-block;
  margin-left: 20px;
  margin-right: 6px;
  white-space: nowrap;
  font-size: 0.85em;
  letter-spacing: 0.05em;
  font-family: 'Share Tech Mono', monospace;
}

.lang-btn {
  cursor: pointer;
  opacity: 0.4;
  padding-bottom: 8px;
  display: inline-block;
  transition: opacity 0.15s, color 0.15s;
}

.lang-btn:hover {
  opacity: 0.9;
  color: @accentColor;
}

.lang-active {
  opacity: 1;
  color: @accentColor;
  border-bottom: 2px solid @accentColor;
}

.lang-sep {
  opacity: 0.25;
  margin: 0 3px;
}

.mute-btn {
  cursor: pointer;
  opacity: 0.4;
  display: inline-block;
  margin-left: 10px;
  font-size: 0.9em;
  transition: opacity 0.15s, color 0.15s;
  vertical-align: middle;
}

.mute-btn:hover {
  opacity: 1;
  color: @accentColor;
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
    margin-right: 6px;
  }

  .lang-btn {
    padding-bottom: 0px;
  }

  .lang-active {
    border-bottom-width: 1px;
  }

  .mute-btn {
    margin-left: 6px;
  }
}

</style>
