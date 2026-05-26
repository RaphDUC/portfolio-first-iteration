<template>
    <div>
      <div class="projects-list">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          @click="openDetails(project)"
          class="project-item"
          :class="{ 'wide': project.isWide, 'high': project.isHigh, 'project-focused': focusedIndex === index }">
            <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
            </div>
            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  {{ project.name }}
                </div>
              </div>
          </div>
      </div>

      <ProjectDetailsOverlay
        v-on:close="closeDetails"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type { PropType } from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";
import { locale } from "@/i18n";
import { useSoundManager } from "@/composables/useSoundManager";
import { useGamepad } from "@/composables/useGamepad";

export default defineComponent({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: { type: Array as PropType<ProjectData[]>, required: true }
  },
  setup(props) {
    const showPopup = ref(false)
    const selectedProject = ref<ProjectData | null>(null)
    const focusedIndex = ref(-1)
    const { play } = useSoundManager()

    const popupTitle = computed(() => selectedProject.value?.name ?? '')
    const popupColor = computed(() => selectedProject.value?.accentColor ?? '')
    const popupContent = computed(() => {
      const proj = selectedProject.value
      if (!proj) return ''
      return (locale.lang === 'fr' && proj.htmlDescriptionFr)
        ? proj.htmlDescriptionFr
        : proj.htmlDescription
    })

    function openDetails(item: ProjectData) {
      selectedProject.value = item
      showPopup.value = true
      play('validate')
    }

    function closeDetails() {
      showPopup.value = false
      play('cancel')
    }

    useGamepad({
      left: () => {
        if (showPopup.value) return
        const len = props.projects.length
        focusedIndex.value = focusedIndex.value <= 0 ? len - 1 : focusedIndex.value - 1
        play('navigate')
      },
      right: () => {
        if (showPopup.value) return
        const len = props.projects.length
        focusedIndex.value = focusedIndex.value >= len - 1 ? 0 : focusedIndex.value + 1
        play('navigate')
      },
      up: () => {
        if (showPopup.value) return
        const prev = focusedIndex.value - 3
        if (prev >= 0) { focusedIndex.value = prev; play('navigate') }
      },
      down: () => {
        if (showPopup.value) return
        const next = focusedIndex.value + 3
        if (next < props.projects.length) { focusedIndex.value = next; play('navigate') }
      },
      confirm: () => {
        if (showPopup.value) return
        if (focusedIndex.value >= 0 && focusedIndex.value < props.projects.length) {
          openDetails(props.projects[focusedIndex.value])
        }
      },
      cancel: () => {
        if (showPopup.value) closeDetails()
      }
    })

    return { showPopup, selectedProject, focusedIndex, popupTitle, popupColor, popupContent, openDetails, closeDetails }
  }
});
</script>

<style scoped>

.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item::before,
.project-item::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-style: solid;
  border-color: var(--accent-color);
  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 2;
  pointer-events: none;
}

.project-item::before {
  top: 8px;
  left: 8px;
  border-width: 2px 0 0 2px;
  transform: translate(-5px, -5px);
}

.project-item::after {
  bottom: 8px;
  right: 8px;
  border-width: 0 2px 2px 0;
  transform: translate(5px, 5px);
}

.project-item:hover::before,
.project-item:hover::after,
.project-item.project-focused::before,
.project-item.project-focused::after {
  opacity: 1;
  transform: translate(0, 0);
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}
.project-item-image:hover {
  transform: scale(1.05);
}

.project-item:hover,
.project-item.project-focused {
  filter: brightness(115%);
  outline: none;
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
  border-top: 1px solid transparent;
  transition: border-color 0.18s ease;
}

.project-item:hover .title-bar,
.project-item.project-focused .title-bar {
  border-top-color: var(--accent-color);
}

.title-text {
  padding: 10px;
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}

</style>