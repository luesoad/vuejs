import Vue from "vue";
import MainNavigation from "./MainNavigation.vue";
import HeaderAnimated from "./HeaderAnimated.vue";

const Components = {
  MainNavigation,
  HeaderAnimated
};

Vue.component("main-navigation", MainNavigation);

Vue.component("header-animated", HeaderAnimated);

export default Components;
