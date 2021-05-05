<template>
  <div class="bg-win10">
    <v-container fluid class="px-0 py-2 height">
      <v-row no-gutters class="height">
        <v-col cols="1">
          <div class="desktop_hov d-flex flex-column align-center mb-2">
            <img width="48px" src="@/assets/trash.png" alt="trash_can_icon" />
            <span class="desktopIconFont">Recycle bin</span>
          </div>
          <router-link
            style="text-decoration: none; color: inherit"
            to="/projects"
          >
            <div class="desktop_hov d-flex flex-column align-center mb-2 py-1">
              <img
                width="48px"
                src="@/assets/project_icon.png"
                alt="project_icon"
              />
              <span class="desktopIconFont">Projects</span>
            </div>
            <div class="desktop_hov d-flex flex-column align-center mb-2 py-1">
              <img
                width="48px"
                src="@/assets/devskills.png"
                alt="skills_icon"
              />
              <span class="desktopIconFont">Skills</span>
            </div>
          </router-link>
          <div class="desktop_hov d-flex flex-column align-center mb-2 py-1">
            <img
              width="48px"
              src="@/assets/adam_avatar.png"
              alt="avatar_icon"
            />
            <span class="desktopIconFont">About</span>
          </div>
          <div class="desktop_hov d-flex flex-column align-center py-1">
            <img width="48px" src="@/assets/form_64px.png" alt="contact_icon" />
            <span class="desktopIconFont">Contact Form</span>
          </div>
        </v-col>
        <v-col cols="11" class="px-5">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.bg-win10 {
  background-image: url("../assets/windows.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.desktopIconFont {
  color: white;
  font-family: Segoe UI;
  text-shadow: 2px 1px black;
  font-weight: 200;
  text-align: center;
  cursor: default;
}
.desktop_hov:hover,
.desktop_hov:focus {
  background-color: rgba(82, 183, 238, 0.4);
  outline: 1px solid rgba(141, 203, 236);
}
.height {
  height: 100% !important;
}
</style>
