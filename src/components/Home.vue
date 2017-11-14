<template>
  <div>
    <!-- Form Component (Input)-->
    <generate :analyzeTone="analyzeTone"/>
    <!-- Image Component (Output)-->
    <artboard v-show="showArtboard" :isSignedIn="isSignedIn" :svgDownloadPath="svgDownloadPath"
    :saveImage="saveImage" :description="description" :tones="tones"/>
    <b-loading :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
import Generate from './Generate'
import Artboard from './Artboard'
import Drawing from '../lib/drawing.js'
import jump from 'jump.js'

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
      description: '',
      tones: null,
      showArtboard: false,
      svgDownloadPath: null,
      isLoading: false
    }
  },
  methods: {
    analyzeTone(textInput) {
      this.isLoading = true
      if (textInput === '') {
        this.createImage('all', 'all')
        this.description = 'No input provided.'
        this.tones = null
        this.showArtboard = true
        this.isLoading = false
        jump(750)
      } else {
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
          const highest = this.tones.sort((a, b) => {
            return b.score - a.score
          })[0]
          if (highest != undefined) {
            const colors = this.parseTone(highest.tone_id)
            this.createImage(colors[0], colors[1])
          } else {
            this.createImage('all', 'all')
          }
          this.showArtboard = true
          this.isLoading = false
          jump(750)
        })
      }
    },
    createImage(color1, color2) {
      if (this.art !== '') {
        this.art.clear()
      }
      this.art = new Drawing()
      this.art.drawSvg(color1, color2)
      this.svgDownloadPath = 'data:image/svg+xml;utf8,' + this.art.exportSvg()
    },
    parseTone(tone) {
      let colors
      switch(tone) {
        case 'anger':
          colors = ['red', 'black']
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
    },
    saveImage(imgName) {
      const token = localStorage.getItem('token')
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: this.svgDownloadPath,
          name: imgName,
          description: this.description
        })
      }
      fetch(`${url}/images/${token}`, settings)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
    }
  }
}
</script>
