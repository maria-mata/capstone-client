<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <img src="../assets/moodpix-logo.png" alt="moodpix-logo" width="200">
        <br>
        <br>
        <p>Algorithmically generated abstract SVG art, influenced by sentiment analysis
          from the <a href="https://www.ibm.com/watson/services/tone-analyzer/" target="_blank">
            IBM Watson Tone Analyzer</a></p>
        <br>
        <p>Made by <a href="https://mjmata.com/" target="_blank">
          María José Mata</a> //
          <a href="https://github.com/maria-mata/moodpix" target="_blank">
            <i class="fa fa-github"></i> Site Source
          </a>
        </p>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style scoped>
@media (min-width: 768px) {
  .content > p {
    width: 45vw;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
