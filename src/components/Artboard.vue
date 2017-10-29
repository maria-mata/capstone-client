<template>
  <section class="section">
    <div class="container">
      <transition appear appear-active-class="animated fadeIn">
        <figure @mouseenter="showOverlay" @mouseleave="hideOverlay"
        v-if="svgDownloadPath != null" class="image is-2by1">
          <img :src="svgDownloadPath" :class="{ overlay: showDownloadButton }">
          <div class="centered">
            <a class="button is-dark overlay" v-if="showDownloadButton"
            :href="svgDownloadPath" download="image.svg">Download SVG</a>
            <a v-if="showSaveButton" class="button is-dark overlay"
            @click.prevent="saveImage">Save Image</a>
          </div>
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
  data() {
    return {
      showDownloadButton: false,
      showSaveButton: false
    }
  },
  methods: {
    showOverlay() {
      if (this.svgDownloadPath != null) {
        this.showDownloadButton = true
      }
      if (this.isSignedIn == true) {
        this.showSaveButton = true
      }
    },
    hideOverlay() {
      this.showSaveButton = false
      this.showDownloadButton = false
    },
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

<style>
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .overlay {
    opacity: 0.8;
  }
</style>
