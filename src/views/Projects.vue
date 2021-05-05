<template>
  <Explorer>
    <v-row
      v-for="project in projects"
      :key="project.id"
      class="d-flex align-center justify-space-between hoverExplorerMenu explorer my-1"
    >
      <v-col cols="4">
        <img
          width="100%"
          :src="require(`@/assets/Projects/${project.img}.png`)"
          :alt="project.img"
        />
      </v-col>
      <v-col cols="3" class="d-flex justify-center align-center">
        {{ project.projectName }}
      </v-col>
      <v-col cols="5 d-flex justify-center align-center">
        <span class="mx-1" v-for="skills in project.framework" :key="skills">{{
          skills
        }}</span>
      </v-col>
    </v-row>
  </Explorer>
</template>

<script>
import { mapState } from "vuex";
import Explorer from "@/components/Explorer.vue";

export default {
  components: {
    Explorer,
  },
  computed: {
    ...mapState(["projects"]),
  },
};
</script>

<style scoped>
.hoverExplorerMenu {
  cursor: default;
}
.hoverExplorerMenu:hover {
  background-color: rgba(82, 183, 238, 0.2);
}
.explorer {
  border-bottom: solid 1px gainsboro;
  padding: 2px;
}
</style>
