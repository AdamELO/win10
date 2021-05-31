<template>
  <div class="wallpaper">
    <MobileBarTop />
    <v-container
      fluid
      class="d-flex justify-center align-center white--text my-5 py-5"
    >
      <v-row>
        <v-col
          cols="7"
          style="border-right: white solid 1px"
          class="d-flex flex-column align-end"
        >
          <div class="fontHour">12:30</div>
          <div class="fontDate">Friday 28 Mei</div>
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-icon x-large color="white">mdi-weather-partly-cloudy</v-icon>
          <v-spacer></v-spacer>
          <span class="fontWeather">17°</span>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="mobileMenu">
      <v-row class="white--text">
        <v-col cols="3">
          <router-link
            style="text-decoration: none; color: inherit"
            to="/mobile/about"
            class="d-flex flex-column justify-center align-center"
          >
            <v-img src="@/assets/about.png"></v-img>
            <span>About</span>
          </router-link>
        </v-col>
        <v-col cols="3">
          <router-link
            style="text-decoration: none; color: inherit"
            to="/mobile/about"
            class="d-flex flex-column justify-center align-center"
          >
            <v-img src="@/assets/skillsMobile.png"></v-img>
            <span>Skills</span>
          </router-link>
        </v-col>
        <v-col cols="3" class="d-flex flex-column justify-center align-center">
          <v-img src="@/assets/gallery.png"></v-img>
          <span>Projects</span>
        </v-col>
        <v-col cols="3" class="d-flex flex-column justify-center align-center">
          <v-img src="@/assets/camera.png"></v-img>
          <span>Camera</span>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/phoneMobile.png"></v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/messagesMobile.png"></v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/linkedin_64px.png"></v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/github.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <MobileBarBottom />
  </div>
</template>

<script>
import MobileBarTop from "@/components/MobileBarTop";
import MobileBarBottom from "../components/MobileBarBottom.vue";
export default {
  components: {
    MobileBarTop,
    MobileBarBottom,
  },
};
</script>
<style scoped>
.wallpaper {
  background-image: url("../assets/wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.fontWeather {
  font-size: 1.7rem;
}
.fontHour {
  font-size: 3rem;
}
.fontDate {
  font-size: 1.2rem;
}
.mobileMenu {
  position: absolute;
  bottom: 60px;
}
</style>
