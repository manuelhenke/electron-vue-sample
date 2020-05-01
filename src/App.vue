<template>
  <v-app id="app">
    <v-card color="grey lighten-4" flat height="100%" tile>
      <v-app-bar color="#c50e1f" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>IoSL</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group color="#c50e1f">
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-left">Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/profile">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-left">Profile</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-app-bar app id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/profile">Profile</router-link>
      </v-app-bar>-->

      <v-content>
        <router-view />
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
