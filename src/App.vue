<template>
  <div id="app">
    <navbar :isSignedIn="isSignedIn"/>
    <router-view :isSignedIn="isSignedIn" class="main"/>
    <foot/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Navbar,
    Foot
  },
  computed: {
    isSignedIn() {
      return localStorage.getItem('token') ? true : false
    }
  },
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: url('./assets/background.svg') no-repeat center center fixed;
  background-size: cover;
}

.main {
  flex: 1;
}

.box {
  background: rgba(255,255,255, 0.8);
}


@media (min-width: 320px) {
  .card-content {
    height: 15vh;
    overflow: scroll;
  }
}

@media (min-width: 768px) {
  .box {
    width: 75vw;
    margin-left: auto;
    margin-right: auto;
  }
  .card-content {
    height: 10vh;
  }
}

@media (min-width: 1024px) {
  .box {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
  }
  .card-content {
    height: 15vh;
  }
}
</style>
