<template>
  <label>
    <slot/>
    <input type="text" v-on="listeners" v-bind="$attrs" @input="onInput">
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    }
  },
  methods: {
    onInput(ev) {
      const { value } = ev.target;
      console.log(`input emit: ${value}`);
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
</style>