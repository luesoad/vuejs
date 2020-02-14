<template>
  <div id="app">
    <main-navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavigation from "./components/MainNavigation";

export default {
  name: "App",
  components: {
    MainNavigation
  }
};
</script>
