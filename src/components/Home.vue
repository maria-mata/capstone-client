<template>
  <div>
    <!-- Form Component -->
    <generate :createImage="createImage"/>
    <!-- Image Component -->
    <artboard :isSignedIn="isSignedIn" :svgDownloadPath="svgDownloadPath" :imgName="imgName"/>
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
      art: '',
      imgName: '',
    }
  },
  computed: {
    svgDownloadPath() {
      return localStorage.getItem('image') || null
    }
  },
  methods: {
    createImage() {
      if (this.art !== '') {
        this.art.clear()
      }
      this.art = new Drawing()
      this.art.drawSvg('all')
      localStorage.setItem('image', 'data:image/svg+xml;utf8,' + this.art.exportSvg())
      location.reload()
    }
  }
}
</script>
