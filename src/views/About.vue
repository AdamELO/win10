<template>
  <Explorer>
    <v-row class="height">
      <v-col cols="4" class="d-flex justify-center align-center">
        <v-card>
          <v-img
            src="@/assets/adam_avatar.png"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title>El Omari Adam</v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <span class="text-center font-weight-bold">Web Developer</span>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="8" class="d-flex justify-center align-center">
        <v-card>
          <v-card-text>
            <div class="text--primary">
              Hello &#128587; !!! My name is Adam and I'm a FullStack Web
              Developer <br />
              This is my portfolio where you can find my projects. <br />
              I finished my web dev training in July and I'm currently looking
              for a job/internship <br />
              So if you're looking for a sympathic,curious and determined
              fellow,<br />
              Don't hesitate to contact me !!! <br />
              Why do I think I am the one you need ? Well, I don't fear bugs or
              problems, <br />
              I'm always looking to learn new things and understand how things
              work. <br />
              <blockquote class="blockquote">
                <i class="mb-0">
                  "If there is no struggle, there is no progress".
                </i>
                <div class="blockquote-footer">Frederick Douglass</div>
              </blockquote>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </Explorer>
</template>

<script>
import Explorer from "@/components/Explorer.vue";

export default {
  components: {
    Explorer,
  },
};
</script>
