<template>
  <section class="section">
    <div class="container">
      <div class="content has-text-centered">
        <a class="button is-dark" :href="svgDownloadPath" download="image.svg">Download SVG</a>
        <!-- <a class="button is-dark" :href="pngDownloadPath" download="image.png">Download PNG</a> -->
      </div>
      <figure class="image is-2by1">
        <img :src="svgDownloadPath">
      </figure>
      <div v-show="false" id="drawing" class="content has-text-centered">
        <!-- SVG art goes here -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'artboard',
  props: ['svgDownloadPath']
}
</script>
