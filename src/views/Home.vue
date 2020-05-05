<template>
  <div class="home">
    <HelloWorld :defaultMsg="defaultMsg" v-bind:userName="userName" />
    <v-container>
      <v-row class="text-center">
        <v-col>
          <v-img :src="require('../assets/logo.svg')" alt="Vuetify logo" contain height="200" />
        </v-col>
        <v-col>
          <v-img :src="require('../assets/logo.png')" alt="Vue logo" contain height="200"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mb-4">
          <ListGroup />
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    userName() {
      return this.$store.getters.getUserName;
    }
  },
  data: () => ({
    defaultMsg: "Hello World!"
  })
};
</script>
