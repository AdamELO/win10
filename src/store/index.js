import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        framework: ["Vue", "JavaScript"],
        projectName: "Portfolio",
        img: "portfolio",
        url: "@/assets/portfolio.png",
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
    skills: [
      {
        id: 1,
        name: "Html",
        icon: "html5",
      },
      {
        id: 2,
        name: "Css",
        icon: "css3",
      },
      {
        id: 3,
        name: "JavaScript",
        icon: "javascript",
      },
      // {
      //   id: 4,
      //   name: "Bootstrap",
      //   icon: "bootstrap",
      // },
      // {
      //   id: 5,
      //   name: "TailWindCss",
      //   icon: "tailwind-css",
      // },
      // {
      //   id: 6,
      //   name: "Vuetify",
      //   icon: "vuetify",
      // },
      // {
      //   id: 7,
      //   name: "JQuery",
      //   icon: "jquery",
      // },
      // {
      //   id: 8,
      //   name: "React",
      //   icon: "react_64px",
      // },
      // {
      //   id: 9,
      //   name: "Vue",
      //   icon: "vue_js_64px",
      // },
      // {
      //   id: 10,
      //   name: "React Native",
      //   icon: "react_native_64px",
      // },
      // {
      //   id: 11,
      //   name: "Php",
      //   icon: "php",
      // },
      // {
      //   id: 12,
      //   name: "Laravel",
      //   icon: "laravel_64px",
      // },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
