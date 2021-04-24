<template>
  <div class="winBar">
    <transition name="slide-up">
      <div v-if="isOpenWin10" class="modalwin10"></div>
    </transition>
    <button class="icons win10" @click="toggleModalWin10">
      <v-icon color="white" medium> mdi-microsoft-windows </v-icon>
    </button>
    <v-icon class="magnifyReverse icons" color="white" medium>
      mdi-magnify
    </v-icon>
    <div class="icons d-flex justify-center align-center">
      <img src="@/assets/mail_icon.png" alt="mail-icon" />
    </div>
    <!-- <BaseIcon name="@/assets/mail_icon.png"></BaseIcon> -->
    <div class="icons d-flex justify-center align-center">
      <img src="@/assets/explorer-6.png" alt="file-explorer-icon" />
    </div>
    <div class="icons d-flex justify-center align-center">
      <img src="@/assets/chrome.png" alt="google-chrome-icon" />
    </div>
    <div class="icons d-flex justify-center align-center">
      <img
        src="@/assets/visual_studio_code.png"
        alt="visual-studio-code-icon"
      />
    </div>
    <v-spacer></v-spacer>
    <div class="mx-2 d-flex justify-center align-center">
      <img src="@/assets/help.png" alt="help-icon" />
    </div>
    <div class="right-icons d-flex justify-center align-center">
      <img
        width="20px"
        height="20px"
        src="@/assets/collapse_arrow.png"
        alt="collapse-arrow-icon"
      />
    </div>
    <div class="right-icons d-flex justify-center align-center">
      <img
        width="20px"
        height="20px"
        src="@/assets/battery_level.png"
        alt="battery-level-icon"
      />
    </div>
    <div class="right-icons d-flex justify-center align-center">
      <img
        width="20px"
        height="20px"
        src="@/assets/wi-fi.png"
        alt="wifi-icon"
      />
    </div>
    <div class="right-icons d-flex justify-center align-center">
      <img
        width="20px"
        height="20px"
        src="@/assets/speaker.png"
        alt="speaker-volume-icon"
      />
    </div>
    <div
      class="right-icons date d-flex flex-column align-center justify-space-around"
    >
      <span>{{ currentTime }}</span>
      <span>{{ currentDate }}</span>
    </div>
    <div class="right-icons px-3 mr-2 d-flex justify-center align-center">
      <img
        width="20px"
        height="20px"
        src="@/assets/notif icon.png"
        alt="notification-icon"
      />
    </div>
    <div class="verticalBar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: "",
      currentDate: "",
      isOpenWin10: false,
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    toggleModalWin10() {
      this.isOpenWin10 = !this.isOpenWin10;
    },
    getNow: function () {
      const today = new Date();
      const month =
        today.getMonth() + 1 >= 10
          ? today.getMonth() + 1
          : "0" + (today.getMonth() + 1);
      const date = `${today.getDate()}-${month}-${today
        .getFullYear()
        .toString()
        .substr(-2)}`;
      const minutes =
        today.getMinutes() >= 10
          ? today.getMinutes()
          : "0" + today.getMinutes();
      const hours =
        today.getHours() >= 10 ? today.getHours() : "0" + today.getHours();
      const time = hours + ":" + minutes;
      const dateTime = date;
      this.currentTime = time;
      this.currentDate = dateTime;
    },
  },
};
</script>

<style scoped>
.winBar {
  height: 50px;
  background-color: rgb(0, 66, 117);
  display: flex;
  position: fixed;
  bottom: 0%;
  width: 100%;
}
.magnifyReverse {
  transform: rotate(90deg);
}
.icons {
  padding: 0 11.5px;
}
.right-icons {
  padding: 0 5px;
}
.icons:hover,
.right-icons:hover,
.verticalBar:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.win10:hover {
  color: rgb(28, 146, 224) !important;
}
.date {
  color: gainsboro;
  text-align: center;
  font-size: 0.75em;
}
.verticalBar {
  border-left: solid 1px gray;
  padding: 2.5px;
}
.modalwin10 {
  position: absolute;
  bottom: 100%;
  width: 40%;
  height: 80vh;
  background-color: rgb(8, 97, 165);
}
.v-icon::before {
  background-color: transparent;
}
</style>
