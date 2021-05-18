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
          <v-col
            v-for="skill in skills"
            :key="skill.id"
            class="d-flex align-center flex-column MenuBg"
            cols="3"
          >
            <v-img
              :src="require(`@/assets/Skills/${skill.icon}.png`)"
              :alt="`${skill.name}-icon`"
              width="50px"
            ></v-img>
            <span class="skills">{{ skill.name }}</span>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["skills"]),
  },
};
</script>

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
.test {
  display: flex;
  justify-content: space-between !important;
}
</style>
