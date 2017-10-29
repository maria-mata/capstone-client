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
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['image']
}
</script>
