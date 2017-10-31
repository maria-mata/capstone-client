<template>
  <section class="hero" id="generate">
    <div class="hero-body">
      <div class="container">
        <div class="content has-text-centered">
          <p class="heading is-size-4">Create Image</p>
          <p class="title is-2">Enter a message to create a unique abstract image</p>
        </div>
        <form class="content has-text-centered" @submit.prevent="submitForm(textInput)">
          <div class="field">
            <textarea class="textarea has-text-centered" rows="3" v-model="textInput"></textarea>
          </div>
          <br>
          <button type="submit" class="button is-dark is-medium">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import jump from 'jump.js'

export default {
  name: 'generate',
  props: ['analyzeTone'],
  data() {
    return {
      textInput: '',
      jump: jump
    }
  },
  methods: {
    submitForm(input) {
      this.analyzeTone(input)
      this.textInput = ''
      this.jump(550)
    }
  }
}
</script>

<style scoped>
.textarea {
  font-size: 1.5em;
  opacity: 0.6;
}

/*.hero.is-light {
  background: url('../assets/background.svg') no-repeat center center fixed;
  background-size: cover;
}*/

@media (min-width: 768px) {
  .hero-body > .container {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
