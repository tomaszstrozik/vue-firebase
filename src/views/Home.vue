<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BaseInput v-model="inputValue" @custom-input="onInput($event)">
      <span>Custom input label</span>
    </BaseInput>
    <BaseButton :text="'toggle login'" @click.native="toggleLogin($event)"/>
    <p>{{ inputValue }}</p>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import authService from "../services/auth";

export default {
  name: "Home",
  components: {
    BaseInput,
    BaseButton
  },
  data: () => ({
    inputValue: ""
  }),
  methods: {
    toggleLogin() {
      if (authService.checkIfIsAdmin()) {
        authService.logOut();
      } else {
        authService.logIn();
      }
    },
    onInput(inputValue) {
      console.log(inputValue);
    }
  }
};
</script>
