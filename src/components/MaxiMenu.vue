<template>
  <v-col cols="6" width="100%" class="listMenu">
    <div>
      <div class="py-2">
        <span>Contact</span>
      </div>
      <v-container>
        <v-row justify="space-between" class="pa-2">
          <v-col class="MenuBg" cols="3">
            <a
              class="d-flex align-center flex-column"
              href="mailto:elomari-adam@hotmail.com"
              style="text-decoration: none; color: inherit"
            >
              <v-img src="@/assets/mail_64px.png" alt="mail-icon"></v-img>
              <span class="skills">Mail</span>
            </a>
          </v-col>
          <v-col class="MenuBg" cols="3">
            <a
              class="d-flex align-center flex-column"
              href="https://www.linkedin.com/in/adam-el-omari"
              style="text-decoration: none; color: inherit"
            >
              <v-img
                src="@/assets/linkedin_64px.png"
                alt="linkedin-icon"
              ></v-img>
              <span class="skills">Linkedin</span>
            </a>
          </v-col>
          <v-col class="MenuBg" cols="3">
            <router-link
              class="d-flex align-center flex-column"
              style="text-decoration: none; color: inherit"
              to="/home/contact"
            >
              <v-img src="@/assets/form_64px.png" alt="mail-form-icon"></v-img>
              <span class="skills">Form</span>
            </router-link>
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
            <v-img
              src="@/assets/Skills/html5.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">Html</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/css3.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">Css</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/javascript.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">Javascript</span>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/bootstrap.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">Bootstrap</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/tailwind-css.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">TailwindCss</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/vuetify.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">Vuetify</span>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/jquery.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">JQuery</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/react_64px.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">React</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/vue_js_64px.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">Vue</span>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="pa-2">
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/react_native_64px.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">R.Native</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/php.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
            <span class="skills">Php</span>
          </v-col>
          <v-col class="d-flex align-center flex-column MenuBg" cols="3">
            <v-img
              src="@/assets/Skills/laravel_64px.png"
              alt="`html-icon`"
              width="50px"
            ></v-img>
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
  background: rgb(9, 118, 201);
  border: 2px solid transparent;
}
.MenuBg:hover {
  border: 2px solid rgba(141, 203, 236);
}
.skills {
  font-size: 0.6rem;
}
.test {
  display: flex;
  justify-content: space-between !important;
}
</style>
