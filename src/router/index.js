import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

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
  }
];

export default new Router({
  routes
});
