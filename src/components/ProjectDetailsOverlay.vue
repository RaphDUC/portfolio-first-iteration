<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="overlay-wrapper"
      @click.self="$emit('close')"
    >
      <div class="dialog" :style="{ 'background-color': color }">
        <h1 class="dialog-title">{{ title }}</h1>
        <div @click="$emit('close')" class="dialog-close">
          <i class="fa fa-times fa-lg fa-fw"></i>
        </div>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button">{{ $t('close') }}</a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, watch, onUnmounted } from "vue";

export default defineComponent({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  },
  emits: ['close'],
  setup(props, { emit }) {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') emit('close')
    }

    watch(() => props.visible, (val) => {
      if (val) {
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)
      } else {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onKeyDown)
      }
    })

    onUnmounted(() => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    })
  },
});
</script>

<style scoped>
.overlay-wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  overflow-y: auto;
}

.dialog {
  position: relative;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color: white;
}

iframe {
  width: 100%;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0;
  padding: 22px;
}

.dialog-content {
  padding: 20px;
  background-color: #fcfcfc;
  color: #696969;
}

.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 100;
}

.dialog-close:hover {
  opacity: 0.6;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor: pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
}

@media only screen and (min-width: 620px) {
  .dialog {
    margin: 80px auto 40px;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }
}
</style>
