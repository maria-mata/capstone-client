<template>
  <div class="control">
    <div class="tags has-addons">
      <span class="tag" :class="tagColor(tone.tone_id)">{{ tone.name }}</span>
      <span class="tag is-dark">{{ percentage(tone.score) }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tone',
  props: 'tone',
  methods: {
    percentage(number) {
      return (number * 100).toFixed()
    },
    tagColor(name) {
      let addClass
      switch (tone_id) {
        case 'anger':
          addClass = 'is-danger'
          break;
        case 'joy':
          addClass = 'is-warning'
          break;
        case 'sadness':
          addClass = 'is-info'
          break;
        case 'analytical':
          addClass = 'is-green'
          break;
        case 'confident':
          addClass = 'is-primary'
          break;
        case 'tentative':
          addClass = 'is-light'
          break;
        default:
          addClass = 'is-light'

        return addClass
      }
    }
  }
}
</script>
