<template>
  <footer>
    <div class="container">
      <router-link class="" :to="{ name: 'Home', params: {} }">
        Text
      </router-link>
      <span class="attribution">
        An interactive learning project from
        <a rel="noopener noreferrer" target="blank" href="">Lorem</a>Bla
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>
