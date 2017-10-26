<template>
  <section class="section">
    <div class="container">
      <div class="content has-text-centered">
        <a class="button is-dark" :href="svgDownloadPath" download="image.svg">Download SVG</a>
      </div>
      <div id="drawing" class="content has-text-centered">
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
