<template>
  <div class="hello">
    <main-navigation></main-navigation>
    <div class="content">
      <div class="container-wrap">
        <div class="area-full">
          <header-animated></header-animated>
        </div>
        <div class="area-left">
          <h1>Area left</h1>
        </div>
        <div class="area-right">
          <ul class="ul-fancy">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
