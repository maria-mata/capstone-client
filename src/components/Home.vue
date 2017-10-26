<template>
  <div>
    <!-- Form Component -->
    <generate :createImage="createImage"/>
    <!-- Image Component -->
    <artboard :svgDownloadPath="svgDownloadPath"/>
  </div>
</template>

<script>
import Generate from './Generate'
import Artboard from './Artboard'
import Drawing from '../lib/logic.js'

export default {
  name: 'Home',
  components: {
    Generate,
    Artboard
  },
  data() {
    return {
      art: ''
    }
  },
  computed: {
    svgDownloadPath() {
      return this.art !== '' ? 'data:image/svg+xml;utf8,' + this.art.exportSvg()
      : null
    }
  },
  methods: {
    createImage() {
      this.art = new Drawing()
      this.art.drawSvg('all')
    },
  }
}
</script>
