<template>
  <div>
    <!-- Form Component -->
    <generate/>
    <!-- Image Component -->
    <artboard/>
  </div>
</template>

<script>
import Generate from './Generate'
import Artboard from './Artboard'

export default {
  name: 'Home',
  components: {
    Generate,
    Artboard
  }
}
</script>
