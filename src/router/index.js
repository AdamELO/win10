import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import ProjectsShow from "../views/ProjectsShow.vue";
import Skills from "../views/Skills.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import MainMobile from "../views/MainMobile.vue";
import Init from "../Init.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Root",
    component: Init,
  },
  {
    path: "/MainMobile",
    name: "MainMobile",
    component: MainMobile,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    props: true,
    children: [
      {
        path: "/home/skills",
        name: "Skills",
        props: true,
        component: Skills,
      },
      {
        path: "/home/about",
        name: "About",
        props: true,
        component: About,
      },
      {
        path: "/home/contact",
        name: "Contact",
        props: true,
        component: Contact,
      },
      {
        path: "/home/projects",
        name: "Projects",
        props: true,
        component: Projects,
      },
      {
        path: "/home/projects/:name",
        name: "Projects-Show",
        props: true,
        component: ProjectsShow,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
