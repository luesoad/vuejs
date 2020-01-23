<template>
  <div class="hello">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
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
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <ul class="main-nav">
      <li class="nav-item-1"><a href="#">Home</a></li>
      <li class="nav-item-2"><a href="#">Home</a></li>
      <li class="nav-item-3"><a href="#">Home</a></li>
      <li class="nav-item-4"><a href="#">Home</a></li>
      <li class="nav-item-5"><a href="#">Home</a></li>
    </ul>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  background: pink;
}

.nav-item-1 {
  grid-area: 1 / 1 / 2 / 2;
}

.nav-item-2 {
  grid-area: 1 / 2 / 2 / 3;
}

.nav-item-3 {
  grid-area: 1 / 3 / 2 / 4;
}

.nav-item-4 {
  grid-area: 1 / 4 / 2 / 5;
}

.nav-item-5 {
  grid-area: 1 / 5 / 2 / 6;
}
</style>
