<template>
  <div class="footer">
    <div class="left"><span class="hud-label">[SYS:OK]</span> — <a href="https://github.com/schouffy/gamedev-portfolio" target="_blank">schouffy</a> {{ $t('footer_credit') }}</div>
    <div class="right">{{ $t('footer_reach') }} <a href="mailto:rd.pierrepoivre@gmail.com">rd.pierrepoivre@gmail.com</a> {{ $t('footer_or') }} <router-link to="/contact">{{ $t('footer_through') }}</router-link></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 0.03em;
}

.hud-label {
  color: @accentColor;
  opacity: 0.75;
  letter-spacing: 0.08em;
}

.left, .right {
    padding-top: 10px;
    text-align: center;
  }

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>