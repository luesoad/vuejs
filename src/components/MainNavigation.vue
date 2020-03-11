<template>
  <div>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      id="main-menu"
    >
      <div class="navbar-brand">
        <router-link :to="{ name: 'Home' }" exact class="navbar-item">
          <img src="@/assets/icons/logo.svg" alt="logo" class="logo" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link
            :to="{ name: 'home' }"
            exact
            class="navbar-item"
            tag="li"
          >
            <a class="navbar-link is-arrowless">Home</a>
          </router-link>

          <router-link
            :to="{ name: 'about' }"
            exact
            class="navbar-item"
            tag="li"
          >
            <a class="navbar-link is-arrowless">About</a>
          </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{ name: 'cssplayground' }"
              exact
              class="navbar-item"
              tag="li"
            >
              <a class="navbar-link">CSS Playground</a>
            </router-link>

            <div class="navbar-dropdown">
              <router-link
                :to="{ name: 'animations' }"
                exact
                class="navbar-item"
                tag="li"
              >
                <a class="navbar-link is-arrowless">Animations</a>
              </router-link>
              <router-link
                :to="{ name: 'fancystuff' }"
                exact
                class="navbar-item"
                tag="li"
              >
                <a class="navbar-link is-arrowless">Fancy stuff</a>
              </router-link>
              <router-link
                :to="{ name: 'tables' }"
                exact
                class="navbar-item"
                tag="li"
              >
                <a class="navbar-link is-arrowless">Tables</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "main-menu"
};

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>
