<template>
  <div class="hello">
    <div class="content">
      <div class="container-wrap">
        <div class="area-full">
          <header-animated></header-animated>
          <img src="@/assets/images/mb.jpg" alt="development" />
        </div>

        <div class="area-left">
          <h1>Responsive Webdesign (coming soon)</h1>
          <ul class="ul-fancy">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div class="area-right">
          <card></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import HeaderAnimated from "@/components/HeaderAnimated.vue";

export default {
  name: "Home",
  components: {
    Card,
    HeaderAnimated
  }
};
</script>
