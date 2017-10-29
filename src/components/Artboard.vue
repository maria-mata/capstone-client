<template>
  <section class="section">
    <div class="container">
        <div class="content has-text-centered">
          <transition appear appear-active-class="animated fadeIn">
            <a class="button is-dark" v-if="svgDownloadPath != null"
            :href="svgDownloadPath" download="image.svg">Download SVG</a>
            <!-- <a class="button is-dark" :href="pngDownloadPath" download="image.png">Download PNG</a> -->
            <a v-if="isSignedIn" class="button is-danger" @click.prevent="saveImage">Save Image</a>
          </transition>
        </div>
      <transition appear appear-active-class="animated fadeIn">
        <figure v-if="svgDownloadPath != null" class="image is-2by1">
          <img :src="svgDownloadPath">
        </figure>
      </transition>
      <div v-show="false" id="drawing" class="content has-text-centered">
        <!-- SVG art goes here -->
      </div>
    </div>
  </section>
</template>

<script>
const url = 'https://moodpix.herokuapp.com'
// const url = 'http://localhost:5000'

export default {
  name: 'artboard',
  props: ['isSignedIn', 'svgDownloadPath', 'imgName'],
  methods: {
    saveImage() {
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: this.svgDownloadPath,
          name: 'test.svg', // need to change later
          description: 'I love to sing!' // need to change later
        })
      }
      fetch(`${url}/images/1`, settings) // need to change id later
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
    }
  }
}
</script>
