import Vue from "vue";
import MainNavigation from "./MainNavigation.vue";
import HeaderAnimated from "./HeaderAnimated.vue";
import Card from "./Card.vue";
import Tabs from "./Tabs.vue";

const Components = {
  MainNavigation,
  HeaderAnimated
};

Vue.component("main-navigation", MainNavigation);

Vue.component("header-animated", HeaderAnimated);
Vue.component("card", Card);
Vue.component("tabs", Tabs);
export default Components;
