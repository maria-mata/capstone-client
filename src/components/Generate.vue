<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container" style="width: 50vw; margin-left: auto; margin-right: auto;">
        <div class="content has-text-centered">
          <p class="heading is-size-4">Create Image</p>
          <p class="title is-2">Enter a message &amp; <br>click to create a unique <br>abstract image</p>
        </div>
        <form class="content has-text-centered" @submit.prevent="analyzeTone(textInput)">
          <div class="field">
            <textarea class="textarea has-text-centered" rows="3" v-model="textInput"
            style="width: 50vw; margin-left: auto; margin-right: auto;"></textarea>
          </div>
          <br>
          <button type="submit" class="button is-danger is-medium">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'generate',
  data() {
    return {
      textInput: ''
    }
  },
  props: ['analyzeTone']
}
</script>

<style scoped>
.textarea {
  font-size: 1.5em;
}
</style>
