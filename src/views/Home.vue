<template>
  <div class="hello">
    <div class="content">
      <div class="container-wrap">
        <div class="area-full">
          <header-animated></header-animated>
          <animated-dot></animated-dot>
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
          <button-fancy></button-fancy>
          <tabs></tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedDot from "@/components/AnimatedDot.vue";
import ButtonFancy from "@/components/ButtonFancy.vue";
import HeaderAnimated from "@/components/HeaderAnimated.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Home",
  components: {
    AnimatedDot,
    ButtonFancy,
    HeaderAnimated,
    Tabs
  }
};
</script>
