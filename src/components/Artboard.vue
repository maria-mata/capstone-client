<template>
  <section class="section">
    <div class="container">
      <transition appear appear-active-class="animated fadeIn">
        <h2 v-if="svgDownloadPath" class="title">Your Input</h2>
      </transition>

      <transition appear appear-active-class="animated fadeIn">
        <h3 v-if="svgDownloadPath" class="subtitle">{{ description }}</h3>
      </transition>
      <!-- Tone tags based on the input -->
      <transition appear appear-active-class="animated fadeIn">
        <tones :tones="tones"/>
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
        <!-- SVG art gets drawn here invisibly -->
      </div>
    </div>
  </section>
</template>

<script>
import Tones from './Tones'

export default {
  name: 'artboard',
  props: ['isSignedIn', 'svgDownloadPath', 'saveImage', 'description', 'tones'],
  components: {
    Tones
  },
  data() {
    return {
      showDownloadButton: false,
      showSaveButton: false
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
