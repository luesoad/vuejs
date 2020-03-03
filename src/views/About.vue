<template>
  <div class="content">
    <img src="@/assets/images/mb.jpg" alt="development"/>
    <tabs>
      <tab name="Services" :selected="true">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </tab>
      <tab name="Pricing">
        <p>
          Magna etiam tempor orci eu lobortis elementum nibh. Tellus in hac
          habitasse platea dictumst vestibulum rhoncus.
        </p>
      </tab>
      <tab name="About Us">
        <p>Consectetur lorem donec massa sapien</p>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Home",
  components: {
    Tab,
    Tabs
  }
};
</script>
