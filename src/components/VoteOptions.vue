<template>
  <ul class="vote-options">
    <li v-for="option in options" :key="option.id">
      <slot :option="option"/>
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