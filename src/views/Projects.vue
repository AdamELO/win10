<template>
  <div class="height white">
    <v-system-bar window color="#0078d7">
      <BaseIcon name="explorer-6" width="18px" height="18px" />
      <BaseIcon name="vertical_line" width="18px" height="18px" />
      <span class="white--text">Projects Explorer</span>
      <v-spacer></v-spacer>
      <v-icon class="mr-4" color="white">mdi-minus</v-icon>
      <v-icon class="ma-2" color="white">mdi-checkbox-blank-outline</v-icon>
      <v-icon class="ml-4" color="white">mdi-close</v-icon>
    </v-system-bar>
    <div class="d-flex justify-space-between pt-1">
      <div class="d-flex flex-row justify-center align-center">
        <v-icon class="ma-4" small>mdi-arrow-left</v-icon>
        <v-icon class="ma-4" small>mdi-arrow-right</v-icon>
      </div>
      <v-toolbar class="mx-3 explorerBorder" dense flat>
        <div class="d-flex">
          <BaseIcon name="explorer-6" width="15px" height="15px" />
          <v-icon class="mx-1">mdi-chevron-right</v-icon>
          <span>PC</span>
          <v-icon class="mx-1">mdi-chevron-right</v-icon>
          <span>{{ currentRouteName }}</span>
        </div>
      </v-toolbar>
      <div class="mx-3">
        <v-toolbar dense flat class="explorerBorder">
          <v-text-field
            hide-details
            prepend-icon="mdi-magnify mdi-rotate-90"
            placeholder="Search in projects"
          ></v-text-field>
        </v-toolbar>
      </div>
    </div>
    <v-row class="mt-4" no-gutters>
      <v-col cols="2">
        <div class="d-flex align-center my-2 hoverExplorerMenu">
          <v-icon small class="mx-1">mdi-chevron-right</v-icon>
          <BaseIcon name="project_icon" width="15px" height="15px" />
          <span class="ml-2">Projects</span>
        </div>
        <div class="d-flex align-center my-2 hoverExplorerMenu">
          <v-icon small class="mx-1">mdi-chevron-right</v-icon>
          <BaseIcon name="mail_icon" width="15px" height="15px" />
          <span class="ml-2">Contact Form</span>
        </div>
        <div class="d-flex align-center my-2 hoverExplorerMenu">
          <v-icon small class="mx-1">mdi-chevron-right</v-icon>
          <BaseIcon name="skills" width="15px" height="15px" />
          <span class="ml-2">Skills</span>
        </div>
        <div class="d-flex align-center my-2 hoverExplorerMenu">
          <v-icon small class="mx-1">mdi-chevron-right</v-icon>
          <BaseIcon name="adam_avatar" width="15px" height="15px" />
          <span class="ml-2">About</span>
        </div>
      </v-col>
      <v-col cols="10" class="px-5 scrollProjects">
        <div
          v-for="project in projects"
          :key="project.id"
          class="d-flex align-center justify-space-between hoverExplorerMenu explorer my-1"
          style="border-bottom: 1px solid gainsboro; padding: 2px"
        >
          <img
            width="200px"
            :src="require(`@/assets/Projects/${project.img}.png`)"
            :alt="project.img"
          />
          <span>{{ project.projectName }}</span>
          <div>
            <span
              class="mx-1 d-flex flex-column"
              v-for="skills in project.framework"
              :key="skills"
              >{{ skills }}</span
            >
          </div>
        </div>
      </v-col>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="10">
          <div
            v-if="scroll"
            @scroll="onScroll"
            class="d-flex justify-center align-center"
          >
            <span class="scroll-icon">
              <span class="scroll-icon__dot"></span>
            </span>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      scroll: true,
    };
  },
  methods: {
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.scroll = false;
      }
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState(["projects"]),
  },
};
</script>

<style scoped>
.explorerBorder {
  border: solid 1px gainsboro !important;
}
.hoverExplorerMenu {
  cursor: default;
}
.hoverExplorerMenu:hover {
  background-color: rgba(82, 183, 238, 0.2);
}
.scrollProjects {
  overflow-y: auto !important;
  height: 70vh !important;
}
.explorer {
  border-bottom: solid 1px gainsboro;
  padding: 2px;
}

.scroll-icon__dot {
  display: block;
  position: absolute;
  left: 50%;
  background: rgb(18, 116, 162);
  height: 0.5em;
  width: 0.5em;
  top: 0.6em;
  margin-left: -0.25em;
  border-radius: 50%;
  transform-origin: top center;
  backface-visibility: hidden;
  animation: scroll_2 2s ease-out infinite;
}
.scroll-icon {
  display: block;
  position: relative;
  height: 2.5em;
  width: 1.25em;
  border: 3px solid rgb(38, 145, 207);
  border-radius: 1em;
}
@keyframes scroll_2 {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  75% {
    transform: translateY(0.75em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
</style>
