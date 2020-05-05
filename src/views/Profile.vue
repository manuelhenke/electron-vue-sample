<template>
  <v-container class="profile">
    <v-row class="text-left">
      <v-col class="mb-4">
        <h1>Your Profile</h1>
        <Form v-on:userNameChange="onUserNameChange" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  name: "Profile",
  components: {
    Form
  },
  methods: {
    // Triggered when `userNameChange` event is emitted by the child.
    onUserNameChange(userName) {
      this.$store.dispatch("setUserName", userName);
    }
  }
};
</script>
