<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <BaseButton @click.native="toggleLogin($event)">
        <span>toggle logged</span>
      </BaseButton>
    </div>
    <BaseInput v-model="inputValue" @custom-input="onInput($event)">
      <p>Custom input label</p>
    </BaseInput>
    <p>{{ inputValue }}</p>

    <VoteOptions :options="voteOptions">
      <template slot="title">
        <p>Test title</p>
      </template>
      <template slot="option" slot-scope="{ option }">
        <BaseButton @click.native="vote(option.type)">{{ option.type }}</BaseButton>
      </template>
    </VoteOptions>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import VoteOptions from "../components/VoteOptions";
import authService from "../services/auth";

export default {
  name: "Home",
  components: {
    BaseInput,
    BaseButton,
    VoteOptions
  },
  data: () => ({
    inputValue: "",
    voteOptions: [{ id: 1, type: "upvote" }, { id: 2, type: "downvote" }]
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
    },
    vote(voteType) {
      console.log(voteType);
    }
  }
};
</script>
