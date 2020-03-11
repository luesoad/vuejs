<template>
  <div class="content">
    <css-shape></css-shape>
    <button-fancy></button-fancy>
  </div>
</template>

<script>
import ButtonFancy from "@/components/ButtonFancy.vue";
import CssShape from "@/components/CssShape.vue";

export default {
  name: "FancyStuff",
  components: {
    ButtonFancy,
    CssShape
  }
};
</script>
