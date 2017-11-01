<template>
  <form>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Save Image</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Image Name">
          <b-input
              type="text"
              v-model="name"
              placeholder="image name"
              required>
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-dark" @click.prevent="saveImage(name)" @click="$parent.close()">Save</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: ['name', 'saveImage']
}
</script>

<style scoped>
  .modal-card {
      width: auto;
  }
</style>
