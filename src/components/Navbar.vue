<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="../assets/moodpix-logo.png" alt="Moodpix" width="112" height="28">
        </router-link>
        <button class="button navbar-burger" :class="{ 'is-active': mobile }"
        @click="toggleBurger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': mobile }">
        <div class="navbar-end">
          <router-link to="/signin" class="navbar-item" @click="toggleBurger">Sign In</router-link>
          <router-link to="/signup" class="navbar-item" @click="toggleBurger">Sign Up</router-link>
          <!-- <router-link to="/saved" class="navbar-item" @click="toggleBurger">Saved</router-link>
          <div class="navbar-item">
            <a class="button is-dark" @click="toggleBurger">Logout</a>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      mobile: false
    }
  },
  methods: {
    toggleBurger() {
      this.mobile = !this.mobile
    }
  }
}
</script>
