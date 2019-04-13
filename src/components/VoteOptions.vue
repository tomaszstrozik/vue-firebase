<template>
  <ul class="vote-options">
    <slot name="title"/>
    <li v-for="option in options" :key="option.id">
      <slot name="option" :option="option"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VoteOptions",
  props: {
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>