<template>
  <footer>
    <p>This is a playground for vuejs</p>
    <ul>
      <li>
        <router-link class="" :to="{ name: 'Home', params: {} }">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }" exact>About</router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>
