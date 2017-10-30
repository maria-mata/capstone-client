<template>
  <div>
    <!-- Form Component -->
    <generate :createImage="createImage"/>
    <!-- Image Component -->
    <artboard :isSignedIn="isSignedIn" :svgDownloadPath="svgDownloadPath"/>
  </div>
</template>

<script>
import Generate from './Generate'
import Artboard from './Artboard'
import Drawing from '../lib/drawing.js'

export default {
  name: 'Home',
  components: {
    Generate,
    Artboard
  },
  props: ['isSignedIn'],
  data() {
    return {
      art: ''
    }
  },
  computed: {
    svgDownloadPath() {
      return localStorage.getItem('image') || null
    }
  },
  methods: {
    createImage(color1, color2) {
      if (this.art !== '') {
        this.art.clear()
      }
      this.art = new Drawing()
      this.art.drawSvg(color1, color2)
      localStorage.setItem('image', 'data:image/svg+xml;utf8,' + this.art.exportSvg())
      location.reload()
    }
  }
}
</script>
