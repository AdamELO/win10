<template>
  <MobileExplorer>
    <v-row v-for="project in projects" :key="project.id">
      <v-col cols="12">
        <img
          width="100%"
          :src="require(`@/assets/Projects/${project.images[0].src_alt}.png`)"
          :alt="project.images[0].src_alt"
        />
      </v-col>
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
