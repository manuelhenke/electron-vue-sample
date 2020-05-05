<template>
  <v-form>
    <v-text-field label="Name" v-model="userName" hide-details="auto"></v-text-field>
    <v-btn v-if="userName" class="my-4" tile outlined color="secondary" @click="resetUserName">
      <v-icon left>mdi-close</v-icon> Reset
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "Form",
  data: () => ({}),
  computed: {
    userName: {
      get() {
        return this.$store.getters.getUserName;
      },
      set(userName) {
        this.emitUserName(userName);
      }
    }
  },
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitUserName(userName) {
      this.$emit("userNameChange", userName);
    },
    resetUserName() {
      this.$emit("userNameChange", "");
    }
  }
};
</script>