import Vue from "vue";
import Tabs from "./Tabs.vue";
import AnimatedDot from "./AnimatedDot.vue";
import ButtonFancy from "./ButtonFancy.vue";
import Card from "./Card.vue";
import HeaderAnimated from "./HeaderAnimated.vue";
import MainNavigation from "./MainNavigation.vue";

const Components = {
  AnimatedDot,
  ButtonFancy,
  Card,
  HeaderAnimated,
  MainNavigation,
  Tabs,
  Vue
};

Vue.component("animated-dot", require("./AnimatedDot.vue").default);
Vue.component("button-fancy", require("./ButtonFancy.vue").default);
Vue.component("card", require("./Card.vue").default);
Vue.component(
  "header-animated",
  require("./HeaderAnimated.vue").default
);
Vue.component(
  "main-navigation",
  require("./MainNavigation.vue").default
);
Vue.component("tabs", require("./Tabs.vue").default);



export default Components;
