import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
    children: [
      {
        path: "/skills",
        name: "Skills",
        props: true,
        component: Skills,
      },
      {
        path: "/about",
        name: "About",
        props: true,
        component: About,
      },
      {
        path: "/contact",
        name: "Contact",
        props: true,
        component: Contact,
      },
      {
        path: ":projects",
        name: "Projects",
        props: true,
        component: Projects,
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
