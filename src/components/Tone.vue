<template>
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-medium" :class="{ 'is-danger': tone.tone_id == 'anger',
      'is-warning': tone.tone_id == 'joy', 'is-info': tone.tone_id == 'sadness',
      'is-success': tone.tone_id == 'analytical', 'is-primary': tone.tone_id == 'confident',
      'is-light': tone.tone_id == 'tentative'}">{{ tone.name }}</span>
      <span class="tag is-medium is-dark">{{ percentage(tone.score) }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tone',
  props: ['tone'],
  methods: {
    percentage(number) {
      return (number * 100).toFixed()
    }
  }
}
</script>
