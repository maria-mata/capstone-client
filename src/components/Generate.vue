<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <form class="content has-text-centered" @submit.prevent="analyzeTone">
          <div class="field">
            <label class="label has-text-white">Enter a word or phrase</label>
            <div class="control">
              <input type="text" class="input has-text-centered" v-model="textInput">
            </div>
          </div>
          <button type="submit" class="button is-primary">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
const url = 'https://moodpix.herokuapp.com'
// const url = 'http://localhost:5000'

export default {
  name: 'generate',
  data() {
    return {
      textInput: ''
    }
  },
  props: ['createImage'],
  methods: {
    analyzeTone() {
      localStorage.setItem('description', this.textInput)
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.textInput
        })
      }
      fetch(`${url}/mood`, settings)
      .then(response => response.json())
      .then(response => {
        const data = JSON.parse(response)
        const tones = data['document_tone']['tones']
        const colors = this.toneColors(tones)
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
          colors = ['blue', 'black']
          break;
        case 'analytical':
          colors = ['cyan', 'green']
          break;
        case 'confident':
          colors = ['violet', 'black']
          break;
        case 'tentative':
          colors = ['yellow', 'black']
          break;
        default:
          colors = ['all', 'all']
      }
      return colors
    }
  }
}
</script>
