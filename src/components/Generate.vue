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
      this.createImage('yellow', 'magenta')
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
      // fetch(`${url}/mood`, settings)
      // .then(response => response.json())
      // .then(response => {
      //   console.log(response)
      // })
      this.textInput = ''
    }
  }
}
</script>
