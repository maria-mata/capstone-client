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
          <a @click="toggleBurger"><router-link to="/signin" v-if="!isSignedIn" class="navbar-item">Sign In</router-link></a>
          <a @click="toggleBurger"><router-link to="/signup" v-if="!isSignedIn" class="navbar-item">Sign Up</router-link></a>
          <a @click="toggleBurger"><router-link to="/saved" v-if="isSignedIn" class="navbar-item">Saved</router-link></a>
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
  data() {
    return {
      mobile: false
    }
  },
  computed: {
    isSignedIn() {
      return localStorage.getItem('token') ? true : false
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
