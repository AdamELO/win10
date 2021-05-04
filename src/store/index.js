import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        framework: ["Vue", "JavaScript"],
        projectName: "Portfolio",
        img: "restaurants",
        url: "@/assets/adam_avatar.png",
        id: 10,
      },
      {
        framework: ["React Native", "JavaScript"],
        projectName: "Restaurants Search",
        img: "restaurants",
        url: "@/assets/projects/restaurants.png",
        id: 9,
      },
      {
        framework: ["Laravel", "TailwindCss", "Php", "LiveWire"],
        projectName: "Real time chat",
        img: "whatsup_home",
        url: "@/assets/projects/whatsup_home.png",
        id: 8,
      },
      {
        framework: ["Php", "Laravel 7"],
        projectName: "The Labs Backoffice",
        img: "labs",
        url: "@/assets/projects/labs.png",
        id: 7,
      },
      {
        framework: ["Php", "Laravel 7"],
        projectName: "MolenGeek Room Booking System",
        img: "MolengeekLogin",
        url: "@/assets/projects/MolengeekLogin.png",
        id: 6,
      },
      {
        framework: ["React", "JavaScript"],
        projectName: "Yahtzee Game",
        img: "yahtzeeStart",
        url: "@/assets/projects/yahtzeeStart.png",
        id: 5,
      },
      {
        framework: ["Php", "Laravel 7"],
        projectName: "The Real Wedding Backoffice",
        img: "weddingbo",
        url: "@/assets/projects/weddingbo.png",
        id: 4,
      },
      {
        framework: ["Html5", "Css3", "JavaScript"],
        projectName: "Emporium Website",
        img: "empor",
        url: "@/assets/projects/empor.png",
        id: 3,
      },
      {
        framework: ["JQuery", "JavaScript"],
        projectName: "Api Weather",
        img: "weather",
        url: "@/assets/projects/weather.png",
        id: 2,
      },
      {
        framework: ["Figma"],
        projectName: "SpriteSheet Loaders",
        img: "rainbowloader",
        url: "@/assets/projects/rainbowloader.png",
        id: 1,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
