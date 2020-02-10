import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import "./components";
require("./sass/main.scss");

Vue.use(VueRouter);

console.log("[i] Starting client app");

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<App/>",
  render: h => h(App),
  VueRouter,
  components: { App }
}).$mount("#app");
