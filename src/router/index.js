import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Animations from "@/views/Animations.vue";
import FancyStuff from "@/views/FancyStuff.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Animations",
    name: "Animations",
    component: Animations
  },
  {
    path: "/FancyStuff",
    name: "FancyStuff",
    component: FancyStuff
  }
];

export default new Router({
  routes
});
