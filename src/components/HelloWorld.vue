<template>
  <v-parallax
    src="https://www.wissensforschung.tu-berlin.de/fileadmin/i53/HvomPhysikgeb10-7-07-2_ohneKran_03.jpg"
    height="600"
  >
    <v-overlay opacity=0.75 dark absolute>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">{{ getMessage() }}</h1>
          <h4 class="subheading">Go to your profile to personalize the welcome message.</h4>
        </v-col>
      </v-row>
    </v-overlay>
  </v-parallax>
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
