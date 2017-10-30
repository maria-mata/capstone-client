<template>
  <section class="section">
    <div class="container">
      <transition appear appear-active-class="animated fadeIn">
        <h2 v-if="svgDownloadPath" class="title">Your Art</h2>
      </transition>
      <transition appear appear-active-class="animated fadeIn">
        <h3 v-if="svgDownloadPath" class="subtitle"><strong>Your Input:</strong> {{ description }}</h3>
      </transition>
      <transition appear appear-active-class="animated fadeIn">
        <figure @mouseenter="showOverlay" @mouseleave="hideOverlay"
        v-if="svgDownloadPath" class="image is-2by1">
          <img :src="svgDownloadPath" :class="{ overlay: showDownloadButton }">
          <div class="centered">
            <a class="button is-large is-dark is-outlined" v-if="showDownloadButton"
            :href="svgDownloadPath" download="image.svg">Download SVG</a>
            <a v-if="showSaveButton" class="button is-large is-dark is-outlined"
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
  computed: {
    description() {
      return localStorage.getItem('description')
    }
  },
  methods: {
    showOverlay() {
      if (this.svgDownloadPath) {
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
      const token = localStorage.getItem('token')
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: this.svgDownloadPath,
          name: 'image2.svg', // need to change later
          description: this.description()
        })
      }
      fetch(`${url}/images/${token}`, settings)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        location.href = '/saved'
      })
    }
  }
}
</script>

<style scoped>
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
