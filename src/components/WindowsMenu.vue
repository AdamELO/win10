<template>
  <v-container fluid class="height px-0 py-2">
    <v-row no-gutters class="height d-flex flex-row">
      <v-col
        cols="1"
        style="border: 1px solid red"
        class="flex-column d-flex align-center"
      >
        <v-icon color="white" class="py-2" dense> mdi-menu </v-icon>
        <v-spacer></v-spacer>
        <div class="pb-3">
          <img
            width="20px"
            height="20px"
            class="rounded-circle"
            src="@/assets/adam_avatar.png"
            alt="profilePicture"
          />
        </div>
        <v-icon color="white" class="py-3" dense> mdi-file-outline </v-icon>
        <v-icon color="white" class="py-3" dense> mdi-image-outline </v-icon>
        <v-icon color="white" class="py-3" dense> mdi-cog </v-icon>
        <v-icon color="white" class="pt-3" dense> mdi-power </v-icon>
      </v-col>
      <v-col
        cols="5"
        style="border: 1px solid pink; color: white; font-size: 0.8rem"
      >
        <div width="100%" style="border: 1px solid pink">
          <p>VUE</p>
        </div>
        <div v-for="project in projects" :key="project">
          <p>{{ project.projectName }}</p>
        </div>
        <div width="100%" style="border: 1px solid pink">
          <p>REACT</p>
        </div>
        <div v-for="project in projects" :key="project">
          <p>{{ project.projectName }}</p>
        </div>
      </v-col>
      <v-col cols="6" style="border: 1px solid yellow">3</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          framework: ["Vue", "JavaScript", "Vuetify", "Laravel"],
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
.icons10 {
  padding: 5 11.5px;
}
</style>
