<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <form class="content has-text-centered" @submit.prevent="createImage">
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
import Drawing from '../lib/logic.js'

export default {
  name: 'generate',
  data() {
    return {
      textInput: ''
    }
  },
  methods: {
    analyzeTone() {
      // POST to server, then server to API and back
      this.textInput = ''
    },
    createImage() {
      const art = new Drawing()
      art.drawSvg('all')
    }
  }
}
</script>
