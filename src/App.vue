<template>
  <div id="app">
    <navbar/>
    <router-view class="main"/>
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
  }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
