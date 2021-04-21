<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <WindowsBar />
  </v-app>
</template>

<script>
import WindowsBar from "./components/WindowsBar.vue";

export default {
  name: "App",
  components: {
    WindowsBar,
  },
};
</script>

<style>
html,
body {
  overflow-y: hidden !important;
}
</style>
