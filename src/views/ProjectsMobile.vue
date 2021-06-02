<template>
  <MobileExplorer>
    <v-row v-for="project in projects" :key="project.id">
      <router-link
        class="d-flex align-center flex-column justify-space-between hoverExplorerMenu explorer my-1"
        style="text-decoration: none; color: inherit"
        :to="{
          name: 'Projects-Show-Mobile',
          params: { project: project, name: project.projectName },
        }"
      >
        <v-col cols="12">
          <img
            width="100%"
            :src="require(`@/assets/Projects/${project.images[0].src_alt}.png`)"
            :alt="project.images[0].src_alt"
          />
        </v-col>
      </router-link>
    </v-row>
  </MobileExplorer>
</template>
<script>
import { mapState } from "vuex";
import MobileExplorer from "@/components/MobileExplorer.vue";
export default {
  components: {
    MobileExplorer,
  },
  computed: {
    ...mapState(["projects"]),
  },
};
</script>
