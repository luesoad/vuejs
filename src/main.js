import Vue from "vue";
import App from "./App";
import "./components";
require("./sass/main.scss");

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  el: "#app",
  template: "<App/>",
  components: { App }
}).$mount("#app");
