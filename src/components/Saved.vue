<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Saved Images</h2>
      <div class="columns is-multiline">
        <card v-for="image in savedImages" :image="image" key=""/>
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card'

const url = 'https://moodpix.herokuapp.com'

export default {
  name: 'saved',
  props: ['isSignedIn'],
  components: {
    Card
  },
  data() {
    return {
      savedImages: []
    }
  },
  async mounted() {
    const token = localStorage.getItem('token')
    const data = await fetch(`${url}/images/${token}`)
    const response = await data.json()
    this.savedImages = response
  }
}
</script>

<style scoped>
  section.section {
    background: rgba(255,255,255, 1);
  }
</style>
