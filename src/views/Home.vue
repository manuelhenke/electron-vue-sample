<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col class="mb-4">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <HelloWorld :msg="msg" v-bind:name="name" />
        <ListGroup />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ListGroup from "@/components/ListGroup.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ListGroup
  },
  computed: {
    name() {
      return this.$store.getters.name;
    }
  },
  data: () => ({
    msg: "Hello World!"
  })
};
</script>
