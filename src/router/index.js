import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Animations from "@/views/Animations.vue";
import cssPlayground from "@/views/cssPlayground.vue";
import FancyStuff from "@/views/FancyStuff.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "home"
      }
    },
    { path: "*", redirect: "/home" },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/css-playground",
      name: "cssPlayground",
      component: cssPlayground
    },
    {
      path: "/css-playground/animations",
      name: "animations",
      component: Animations
    },
    {
      path: "/css-playground/fancystuff",
      name: "fancystuff",
      component: FancyStuff
    }
  ]
});
