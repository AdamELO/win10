<template>
  <div class="bg-win10">
    <v-container fluid class="px-0 py-2 height">
      <v-row no-gutters class="height">
        <v-col cols="1">
          <div class="desktop_hov d-flex flex-column align-center mb-5">
            <img width="48px" src="@/assets/trash.png" alt="trash_can_icon" />
            <span class="desktopIconFont">Recycle bin</span>
          </div>
          <div class="desktop_hov d-flex flex-column align-center mb-5">
            <img
              width="48px"
              src="@/assets/project_icon.png"
              alt="project_icon"
            />
            <span class="desktopIconFont">Projects</span>
          </div>
          <div class="desktop_hov d-flex flex-column align-center mb-5">
            <img
              width="48px"
              src="@/assets/chrome_desktop.png"
              alt="chrome_icon"
            />
            <span class="desktopIconFont">Google Chrome</span>
          </div>
          <div class="desktop_hov d-flex flex-column align-center mb-5">
            <img
              width="48px"
              src="@/assets/vscode_desktop.png"
              alt="vscode_icon"
            />
            <span class="desktopIconFont">VS Code</span>
          </div>
        </v-col>
        <v-col cols="11"> </v-col>
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
