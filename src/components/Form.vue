<template>
  <v-form>
    <v-text-field label="Name" v-model="name" hide-details="auto"></v-text-field>
    <v-btn v-if="name" class="my-4" tile outlined right absolute color="secondary" @click="reset">
      <v-icon left>mdi-close</v-icon>Reset
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({}),
  name: "Form",
  computed: {
    name: {
      get() {
        return this.$store.getters.name;
      },
      set(value) {
        this.emitToParent(value);
      }
    }
  },
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent(value) {
      this.$emit("childToParent", value);
    },
    reset() {
      this.$emit("childToParent", "");
    }
  }
};
</script>