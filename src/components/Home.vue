<template>
  <div>
    <!-- Form Component -->
    <generate/>
    <!-- Image Component -->
    <drawing/>
  </div>
</template>

<script>
import Generate from './Generate'
import Drawing from './Drawing'

export default {
  name: 'Home',
  components: {
    Generate,
    Drawing
  }
}
</script>
