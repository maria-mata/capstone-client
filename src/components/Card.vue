<template>
  <div class="column is-one-quarter-desktop">
    <transition appear appear-active-class="animated fadeIn">
      <div class="card">
        <div class="card-image">
          <figure class="image is-2by1">
            <img :src="image.url" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <p class="heading">{{ image.name }}</p>
          <div class="content">{{ image.description }}</div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" :href="image.url" :download="image.name">Download</a>
          <a class="card-footer-item" @click.prevent="deleteImage(image.id)">Delete</a>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['image'],
  methods: {
    deleteImage(id) {
      // need to create a delete route & post code
      console.log(id);
    }
  }
}
</script>
