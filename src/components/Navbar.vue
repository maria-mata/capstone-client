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
          <router-link to="/signin" v-if="!isSignedIn" class="navbar-item">
            <span @click="toggleBurger">Sign In</span>
          </router-link>
          <router-link to="/signup" v-if="!isSignedIn" class="navbar-item">
            <span @click="toggleBurger">Sign Up</span>
          </router-link>
          <router-link to="/saved" v-if="isSignedIn" class="navbar-item">
            <span @click="toggleBurger">Saved</span>
          </router-link>
          <div v-if="isSignedIn" class="navbar-item">
            <a class="button is-dark" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: ['isSignedIn'],
  data() {
    return {
      mobile: false
    }
  },
  methods: {
    toggleBurger() {
      this.mobile = !this.mobile
    },
    logout() {
      this.toggleBurger()
      localStorage.removeItem('token')
      location.href = '/'
    }
  }
}
</script>
