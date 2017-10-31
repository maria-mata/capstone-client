<template>
  <div>
    <section class="hero is-dark" v-if="svgDownloadPath">
      <div class="hero-body">
        <div class="container">
          <p class="heading is-size-5">Your Input</p>
          <p class="title is-3">{{ description }}</p>
          <!-- Tone tags -->
          <div class="field is-grouped is-grouped-multiline">
            <div class="control" v-for="tone in tones">
              <div class="tags has-addons">
                <span class="tag is-medium" :class="{ 'is-danger': tone.tone_id == 'anger',
                'is-warning': tone.tone_id == 'joy', 'is-info': tone.tone_id == 'sadness',
                'is-success': tone.tone_id == 'analytical', 'is-primary': tone.tone_id == 'confident',
                'is-black': tone.tone_id == 'tentative'}">{{ tone.tone_name }}</span>
                <span class="tag is-medium is-light">{{ percentage(tone.score) }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <!-- Art display -->
        <transition appear appear-active-class="animated fadeIn">
          <figure @mouseenter="showOverlay" @mouseleave="hideOverlay" class="image is-2by1"
          v-if="svgDownloadPath">
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
  </div>
</template>

<script>
export default {
  name: 'artboard',
  props: ['isSignedIn', 'svgDownloadPath', 'saveImage', 'description', 'tones'],
  data() {
    return {
      showDownloadButton: false,
      showSaveButton: false
    }
  },
  methods: {
    percentage(number) {
      return (number * 100).toFixed()
    },
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
