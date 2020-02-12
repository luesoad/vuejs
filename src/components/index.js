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
  Tabs
};

Vue.component("animated-dot", AnimatedDot);
Vue.component("button-fancy", ButtonFancy);
Vue.component("card", Card);
Vue.component("header-animated", HeaderAnimated);
Vue.component("main-navigation", MainNavigation);
Vue.component("tabs", Tabs);

export default Components;
