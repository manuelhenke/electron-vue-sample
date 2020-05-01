<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <v-text-field label="Name" v-model="name" hide-details="auto"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
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
        this.emitToParent(value)
      }
    }
  },
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent(value) {
      this.$emit("childToParent", value);
    }
  }
};
</script>