<template>
  <v-bottom-navigation class="bottom d-flex justify-space-around align-center">
    <v-icon dense :color="iconColor"
      >mdi-triangle-outline mdi-rotate-270</v-icon
    >
    <v-icon dense :color="iconColor">mdi-circle-outline</v-icon>
    <v-icon dense :color="iconColor">mdi-square-outline</v-icon>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      iconColor: "black",
    };
  },
  created() {
    if (this.$route.path == "/mobile") {
      this.iconColor = "white";
    }
  },
};
</script>
<style scoped>
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: transparent !important;
}
</style>
