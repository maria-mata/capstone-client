<template>
  <div id="app">
    <navbar/>
    <!-- <hero/> -->
    <router-view/>
    <foot/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Navbar,
    // Hero,
    Foot
  }
}
</script>
