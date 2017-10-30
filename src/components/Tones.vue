<template>
  <div class="field is-grouped is-grouped-multiline">
    <tone v-for="tone in toneArray" :tone="tone" key=""/>
  </div>
</template>

<script>
import Tone from './Tone'

export default {
  name: 'tones',
  props: ['toneArray'],
  components: {
    Tone
  }
}
</script>
