import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Animations from "@/views/Animations.vue";
import cssPlayground from "@/views/cssPlayground.vue";
import FancyStuff from "@/views/FancyStuff.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Vue Playground"
    }
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: {
      title: "About"
    }
  },
  {
    path: "/CSS-Playground",
    name: "cssPlayground",
    component: cssPlayground
  },
  {
    path: "/CSS-Playground/Animations",
    name: "Animations",
    component: Animations
  },
  {
    path: "/CSS-Playground/FancyStuff",
    name: "FancyStuff",
    component: FancyStuff
  }
];

export default new Router({
  routes
});
