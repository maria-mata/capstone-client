<template>
  <div>
    <!-- Form Component -->
    <generate :analyzeTone="analyzeTone"/>
    <!-- Image Component -->
    <artboard :isSignedIn="isSignedIn" :svgDownloadPath="svgDownloadPath"/>
  </div>
</template>

<script>
import Generate from './Generate'
import Artboard from './Artboard'
import Drawing from '../lib/drawing.js'

const url = 'https://moodpix.herokuapp.com'

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
      description: '', // the input from the form
      tones: [] // the array of tones
    }
  },
  computed: {
    svgDownloadPath() {
      return localStorage.getItem('image') || null
    }
  },
  methods: {
    analyzeTone(textInput) {
      this.description = textInput
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.description
        })
      }
      fetch(`${url}/mood`, settings)
      .then(response => response.json())
      .then(response => {
        const data = JSON.parse(response)
        this.tones = data['document_tone']['tones']
        const colors = this.toneColors(this.tones)
        this.createImage(colors[0], colors[1])
      })
    },
    toneColors(tones) {
      if (tones.length == 0) {
        return ['all', 'all']
      } else {
        const highest = tones.sort((a, b) => {
          return a.score - b.score
        }).shift()
        return this.parseTone(highest.tone_id)
      }
    },
    createImage(color1, color2) {
      if (this.art !== '') {
        this.art.clear()
      }
      this.art = new Drawing()
      this.art.drawSvg(color1, color2)
      localStorage.setItem('image', 'data:image/svg+xml;utf8,' + this.art.exportSvg())
      location.reload()
    },
    parseTone(tone) {
      switch(tone) {
        case 'anger':
          let colors = ['red', 'black']
          break;
        case 'fear':
          colors = ['blue', 'black']
          break;
        case 'joy':
          colors = ['orange', 'magenta']
          break;
        case 'sadness':
          colors = ['grey', 'blue']
          break;
        case 'analytical':
          colors = ['cyan', 'green']
          break;
        case 'confident':
          colors = ['violet', 'black']
          break;
        case 'tentative':
          colors = ['yellow', 'grey']
          break;
        default:
          colors = ['all', 'all']
      }
      return colors
    }
  }
}
</script>
