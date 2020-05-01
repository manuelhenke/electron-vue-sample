<template>
  <div>
    <!-- <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
    </v-col>-->

    <h1 class="display-2 font-weight-bold mb-3">{{ getMessage() }}</h1>

    <p
      class="subheading font-weight-regular"
    >This is a sample Application.</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  props: {
    msg: String,
    name: String
  },

  data: () => ({}),

  methods: {
    getMessage() {
      return this.name ? `Welcome ${this.name}!` : this.msg;
    }
  }
};
</script>
