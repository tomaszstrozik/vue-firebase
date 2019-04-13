<template>
  <button type="button" class="base-input" :disabled="loading">
    <span v-if="!loading">{{ text }}</span>
    <span v-else>loading...</span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
</style>