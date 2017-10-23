<template>
  <section class="section">
    <div class="container">
      <div class="box" id="drawing">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'drawing',
  mounted() {
    // initialize SVG.js
    var draw = SVG('drawing')

    // draw pink square
    draw.rect(100, 100).move(100, 50).fill('#f06')
  }
}
</script>

<style scoped>
  .box {
    min-height: 60vh;
  }
</style>
