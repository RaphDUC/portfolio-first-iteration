<template>
    <div>
      <div class="projects-list">
        <div
          v-for="project in projects"
          :key="project.id"
          @click="showDetails(project)"
          class="project-item"
          :class="{ 'wide': project.isWide, 'high': project.isHigh }">
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
        v-on:close="showPopup = false"
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

export default defineComponent({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: { type: Array as PropType<ProjectData[]>, required: true }
  },
  setup() {
    const showPopup = ref(false)
    const selectedProject = ref<ProjectData | null>(null)

    const popupTitle = computed(() => selectedProject.value?.name ?? '')
    const popupColor = computed(() => selectedProject.value?.accentColor ?? '')
    const popupContent = computed(() => {
      const proj = selectedProject.value
      if (!proj) return ''
      return (locale.lang === 'fr' && proj.htmlDescriptionFr)
        ? proj.htmlDescriptionFr
        : proj.htmlDescription
    })

    function showDetails(item: ProjectData) {
      selectedProject.value = item
      showPopup.value = true
    }

    return { showPopup, selectedProject, popupTitle, popupColor, popupContent, showDetails }
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

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}
.project-item-image:hover {
  transform: scale(1.1);
}

.project-item:hover {
filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
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