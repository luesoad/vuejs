<template>
  <div class="content">
    <img src="@/assets/images/mb.jpg" alt="development"/>
    <button-fancy></button-fancy>
  </div>
</template>

<script>
import ButtonFancy from "@/components/ButtonFancy.vue";

export default {
  name: "FancyStuff",
  components: {
    ButtonFancy
  }
};
</script>
