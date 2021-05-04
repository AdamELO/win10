<template>
  <v-col cols="6" width="100%" class="listMenu">
    <div>
      <div class="py-2">
        <span>Contact</span>
      </div>
      <v-container>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/mail_64px.png" alt="mail-icon"></v-img>
            <span class="skills">Mail</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/linkedin_64px.png" alt="linkedin-icon"></v-img>
            <span class="skills">Linkedin</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/form_64px.png" alt="mail-form-icon"></v-img>
            <span class="skills">Form</span>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <div class="py-2">
        <span>Skills</span>
      </div>
      <v-container>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/html5.png" alt="html5-icon"></v-img>
            <span class="skills">Html</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/css3.png" alt="css3-icon"></v-img>
            <span class="skills">Css</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/javascript.png" alt="javascript-icon"></v-img>
            <span class="skills">JavaScript</span>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/bootstrap.png" alt="bootdtrap-icon"></v-img>
            <span class="skills">Bootstrap</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/tailwind-css.png" alt="tailwind-icon"></v-img>
            <span class="skills">TailWindCss</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/vuetify.png" alt="vuetify-icon"></v-img>
            <span class="skills">Vuetify</span>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/jquery.png" alt="jquery-icon"></v-img>
            <span class="skills">JQuery</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/react_64px.png" alt="react-icon"></v-img>
            <span class="skills">React</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/vue_js_64px.png" alt="vue-icon"></v-img>
            <span class="skills">Vue</span>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/react_native_64px.png"
              alt="reatc-native-icon"
            ></v-img>
            <span class="skills">Native</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/php.png" alt="php-icon"></v-img>
            <span class="skills">Php</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img src="@/assets/laravel_64px.png" alt="laravel-icon"></v-img>
            <span class="skills">Laravel</span>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-col>
</template>

<style scoped>
.listMenu {
  overflow-y: auto !important;
  height: 100%;
  font-size: 0.8rem;
  color: white;
}
.MenuBg {
  background: rgb(48, 121, 177);
  border: 2px solid transparent;
}
.MenuBg:hover {
  border: 2px solid rgba(141, 203, 236);
}
.skills {
  font-size: 0.6rem;
}
</style>
