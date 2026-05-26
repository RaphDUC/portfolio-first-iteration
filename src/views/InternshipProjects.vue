<template>
  <div>
    <h1>{{ $t('internship_title') }}</h1>

    <div style="margin-bottom: 30px;">
      {{ $t('internship_subtitle') }}
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import internshipProjectsData from "@/data/InternshipProjectsData.ts";

export default defineComponent({
  name: "InternshipProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: internshipProjectsData,
    };
  },
});
</script>
