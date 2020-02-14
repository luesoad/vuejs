import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./components";
require("./sass/main.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  el: "#app",
  template: "<App/>",
  components: { App }
}).$mount("#app");
