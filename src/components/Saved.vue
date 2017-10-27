<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <card v-for="image in savedImages" :image="image" key=""/>
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card'

const url = 'https://moodpix.herokuapp.com'
// const url = 'http://localhost:5000'

export default {
  name: 'saved',
  components: {
    Card
  },
  data() {
    return {
      savedImages: []
    }
  },
  async mounted() {
    const data = await fetch(`${url}/images/1`)
    const response = await data.json()
    console.log(response);
    this.savedImages = response
  },
}
</script>
