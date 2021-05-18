<template>
  <Explorer>
    <h1>{{ $route.params.project.projectName }}</h1>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
    >
      <v-carousel-item
        v-for="(slide, i) in $route.params.project.images"
        :key="i"
      >
        <img
          width="100%"
          height="100%"
          :src="require(`@/assets/Projects/${slide.src_alt}.png`)"
          :alt="slide.src_alt"
        />
      </v-carousel-item>
    </v-carousel>
  </Explorer>
</template>

<script>
import Explorer from "@/components/Explorer.vue";

export default {
  components: {
    Explorer,
  },
  data() {
    return {
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
