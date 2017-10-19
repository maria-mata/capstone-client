<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">Sign In</a>
          <a class="navbar-item">Sign Up</a>
          <!-- <a class="navbar-item">Saved</a>
          <div class="navbar-item">
            <a class="button is-dark">Logout</a>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
