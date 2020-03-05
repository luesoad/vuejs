<template>
  <div id="app">
    <main-navigation />
    <router-view></router-view>
    <the-footer />
  </div>
</template>

<script>
import MainNavigation from "./components/MainNavigation";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: {
    TheFooter,
    MainNavigation
  },
  data() {
    return {
      title: "Vue Playground"
    };
  }
};
</script>
