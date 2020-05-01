<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list>
      <v-subheader>USED FRAMEWORKS</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" @click="openInBrowser(item.url)">
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
const { shell } = require("electron");

export default {
  name: "ListGroup",
  data: () => ({
    items: [
      { text: "Electron", url: "https://github.com/electron/electron" },
      { text: "Vue", url: "https://github.com/vuejs/vue" },
      { text: "Vuetify", url: "https://github.com/vuetifyjs/vuetify" },
      { text: "Vue CLI", url: "https://github.com/vuejs/vue-cli" },
      { text: "Vuex", url: "https://github.com/vuejs/vuex" },
      { text: "Vue-Router", url: "https://github.com/vuejs/vue-cli" }
    ]
  }),
  methods: {
    openInBrowser(url) {
      shell.openExternal(url);
    }
  }
};
</script>