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
/* // transitions// */
/* slide up */
.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave {
  transition: all 0.3s ease;
}
.slide-up-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
/* scrollbar */
::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 20, 20);
}
</style>
