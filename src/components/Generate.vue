<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="content has-text-centered">
          <transition appear appear-active-class="animated fadeIn">
            <p class="heading is-size-5">Create Image</p>
          </transition>
          <transition appear appear-active-class="animated fadeIn">
            <p class="title is-3">Enter a message to create a unique abstract image</p>
          </transition>
        </div>
        <form class="content has-text-centered" @submit.prevent="submitForm(textInput)">
          <transition appear appear-active-class="animated fadeIn">
            <div class="field">
              <textarea class="textarea has-text-centered" rows="3" v-model="textInput"></textarea>
            </div>
          </transition>
          <br>
          <transition appear appear-active-class="animated fadeIn">
            <button type="submit" class="button is-dark is-medium">Submit</button>
          </transition>
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
      this.jump(750)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lora:400,700');

.textarea {
  font-size: 1.5em;
  opacity: 0.6;
}

p.title.is-3 {
  font-family: 'Lora', serif;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .hero-body > .container {
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
