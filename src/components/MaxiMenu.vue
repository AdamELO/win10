<template>
  <v-col cols="6" width="100%" class="listMenu">
    <div>
      <div class="py-2">
        <u>Contact</u>
      </div>
      <v-container>
        <v-row justify="space-between" class="pa-2">
          <v-col
            class="d-flex justify-center align-center flex-column MenuBg"
            cols="3"
          >
            <img src="@/assets/mail_64px.png" alt="mail-icon" />
            <span style="font-size: 0.6rem">Mail App</span>
          </v-col>
          <v-col
            class="d-flex justify-center align-center flex-column MenuBg"
            cols="3"
          >
            <img src="@/assets/linkedin_64px.png" alt="linkedin-icon" />
            <span style="font-size: 0.6rem">Linkedin</span>
          </v-col>
          <v-col
            class="d-flex justify-center align-center flex-column MenuBg"
            cols="3"
          >
            <img src="@/assets/form_64px.png" alt="mail-form-icon" />
            <span style="font-size: 0.6rem">Form</span>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <div class="py-2">
        <u>Skills</u>
      </div>
      <v-container>
        <v-row justify="space-between" class="pa-2">
          <v-col
            class="d-flex justify-center align-center flex-column MenuBg"
            cols="3"
          >
            <img src="@/assets/vue_js_64px.png" alt="vue-icon" />
            <span style="font-size: 0.6rem">Vue</span>
          </v-col>
          <v-col
            class="d-flex justify-center align-center flex-column MenuBg"
            cols="3"
          >
            <img src="@/assets/react_64px.png" alt="react-icon" />
            <span style="font-size: 0.6rem">React</span>
          </v-col>
          <v-col
            class="d-flex justify-center align-center flex-column MenuBg"
            cols="3"
          >
            <img src="@/assets/laravel_64px.png" alt="laravel-icon" />
            <span style="font-size: 0.6rem">Laravel</span>
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
</style>
