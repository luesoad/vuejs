<template>
  <div class="hello">
    <main-navigation></main-navigation>
    <div class="content">
      <div class="container-wrap">
        <div class="area-full">
          <header-animated></header-animated>
          <animated-dot></animated-dot>
        </div>
        <div class="area-left">
          <h1>Area left</h1>
          <card></card>
        </div>
        <div class="area-right">
          <ul class="ul-fancy">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button-fancy></button-fancy>
          <tabs></tabs>
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
