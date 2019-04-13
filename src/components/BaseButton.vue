<template>
  <button type="button" class="base-input" :disabled="loading">
    <span v-if="!loading">
      <slot/>
    </span>
    <span v-else>loading...</span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
</style>