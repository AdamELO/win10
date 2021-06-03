<template>
  <MobileExplorer>
    <v-container style="height: 80vh">
      <v-row dense>
        <v-col cols="6">
          <v-card color="#1f88ff" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/html5.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Html</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#ff751f" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/css3.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Css</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#000000" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/javascript.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Javascript</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#ffc824" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/bootstrap.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Bootstrap</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#28ff33" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/tailwind-css.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">TailwindCss</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#ff9985" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/vuetify.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Vuetify</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#beace6" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/jquery.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">JQuery</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#c48a7c" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/react_64px.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">React</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#35495e" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/vue.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Vue</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#6723db" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/react_native_64px.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">React Native</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#ffcf7c" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/php.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Php</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="#b06243" dark>
            <div class="d-flex flex-column align-center justify-center">
              <v-avatar class="mt-3" size="80" tile>
                <v-img src="@/assets/Skills/laravel_64px.png"></v-img>
              </v-avatar>
              <v-card-title class="text-elipsis">Laravel</v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </MobileExplorer>
</template>
<script>
import MobileExplorer from "@/components/MobileExplorer.vue";
export default {
  components: {
    MobileExplorer,
  },
};
</script>

<style scoped>
.text-elipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
