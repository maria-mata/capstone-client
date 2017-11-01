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
const url = 'https://moodpix.herokuapp.com'

export default {
  name: 'card',
  props: ['image'],
  methods: {
    deleteImage(id) {
      const token = localStorage.getItem('token')
      const settings = {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      fetch(`${url}/images/${token}/${id}`, settings)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          console.log(response);
        } else {
          location.reload()
        }
      })
    }
  }
}
</script>
