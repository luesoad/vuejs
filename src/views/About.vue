<template>
  <div>
  <animated-dot></animated-dot>
  <tabs></tabs>
  </div>
</template>

<script>
import AnimatedDot from "@/components/AnimatedDot.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Home",
  components: {
    AnimatedDot,
    Tabs
  }
};
</script>
