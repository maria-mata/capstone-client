<template>
  <div class="column is-half-mobile is-one-quarter-desktop">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['image']
}
</script>
