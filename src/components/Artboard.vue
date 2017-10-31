<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <transition appear appear-active-class="animated fadeIn">
          <p class="heading is-size-5">Your Input</p>
        </transition>
        <transition appear appear-active-class="animated fadeIn">
          <p class="title is-4">{{ description }}</p>
        </transition>
        <!-- Tone tags -->
        <div class="level">
          <div class="level-left">
            <div class="field is-grouped is-grouped-multiline">
              <div class="control" v-for="tone in tones">
                <transition appear appear-active-class="animated fadeIn">
                  <div class="tags has-addons">
                    <span class="tag is-medium" :class="{ 'is-danger': tone.tone_id == 'anger',
                    'is-warning': tone.tone_id == 'joy', 'is-info': tone.tone_id == 'sadness',
                    'is-success': tone.tone_id == 'analytical', 'is-primary': tone.tone_id == 'confident',
                    'is-light': tone.tone_id == 'tentative'}">{{ tone.tone_name }}</span>
                    <span class="tag is-medium is-dark">{{ percentage(tone.score) }}%</span>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="level-right">
            <a class="is-size-5" @click.prevent="jump('#generate')">
              Back to Top
            </a>
          </div>
        </div>
      </div>
      <!-- Art display -->
      <transition appear appear-active-class="animated fadeIn">
        <figure @mouseenter="showOverlay" @mouseleave="hideOverlay" class="image is-2by1"
        v-if="svgDownloadPath">
          <img :src="svgDownloadPath" :class="{ overlay: showDownloadButton }">
          <div class="centered">
            <a class="button is-large is-dark is-outlined" v-if="showDownloadButton"
            :href="svgDownloadPath" download="image.svg">Download</a>
            <a v-if="showSaveButton" class="button is-large is-dark is-outlined"
            @click.prevent="saveImage">Save</a>
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
import jump from 'jump.js'

export default {
  name: 'artboard',
  props: ['isSignedIn', 'svgDownloadPath', 'saveImage', 'description', 'tones'],
  data() {
    return {
      showDownloadButton: false,
      showSaveButton: false,
      jump: jump
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

  section.section {
    background: rgba(255,255,255, 1);
  }
</style>
