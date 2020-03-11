<template>
  <footer>
    <div class="footer">
      <div class="container footer__container content">
        <div class="footer__circle"></div>
        <img src="@/assets/icons/dots.svg" alt="dots" class="footer__dots" />
        <div class="third">
          <h2>Vue Playground</h2>
          <p>This is a playground for vuejs</p>
        </div>
        <div class="third">
          <h2>Vue Playground</h2>
          <router-link class="" :to="{ name: 'Home', params: {} }">
            Home
          </router-link>
        </div>
        <div class="third">
          <h2>Vue Playground</h2>
          <router-link :to="{ name: 'About' }" exact>About</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>
