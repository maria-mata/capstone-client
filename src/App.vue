<template>
  <div id="app">
    <navbar/>
    <router-view/>
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
