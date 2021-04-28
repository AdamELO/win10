<template>
  <v-col cols="5" class="listProjects">
    <div width="100%" class="py-2">
      <u>Projects List By Skills</u>
    </div>
    <div width="100%" class="align-center d-flex py-2 menuHover">
      <v-icon color="white" small> mdi-vuejs </v-icon>
      <span class="ml-2">VUE</span>
    </div>
    <div
      class="menuHover py-2"
      v-for="project in filterVue"
      :key="project.projectName"
    >
      <span>- {{ project.projectName }}</span>
    </div>
    <div width="100%" class="align-center d-flex py-2 menuHover">
      <v-icon color="white" small> mdi-react </v-icon>
      <span class="ml-2">React</span>
    </div>
    <div
      class="menuHover py-2"
      v-for="project in filterReact"
      :key="project.projectName"
    >
      <span>- {{ project.projectName }}</span>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    projects: Array,
  },
  computed: {
    filterVue() {
      return this.projects.filter((project) => {
        return project.framework.includes("Vue");
      });
    },
    filterReact() {
      return this.projects.filter((project) => {
        return project.framework.includes("React");
      });
    },
  },
};
</script>

<style scoped>
.menuHover:hover {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: default;
}
.listProjects {
  overflow-y: auto !important;
  height: 100%;
  font-size: 0.8rem;
  color: #fff;
}
</style>
