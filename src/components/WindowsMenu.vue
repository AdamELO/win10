<template>
  <v-container fluid class="height px-0 py-2">
    <v-row no-gutters class="height d-flex flex-row">
      <MiniMenu />
      <ProjectsListMenu :projects="projects" />
      <MaxiMenu />
    </v-row>
  </v-container>
</template>

<script>
import MiniMenu from "@/components/MiniMenu";
import MaxiMenu from "@/components/MaxiMenu";
import ProjectsListMenu from "@/components/ProjectsListMenu";

export default {
  components: {
    MaxiMenu,
    MiniMenu,
    ProjectsListMenu,
  },
  data() {
    return {
      projects: [
        {
          framework: ["Vue", "JavaScript", "Laravel"],
          projectName: "Portfolio",
          img: null,
        },
        {
          framework: ["React Native", "React", "JavaScript"],
          projectName: "Restaurants Search",
          img: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.menuHover:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
