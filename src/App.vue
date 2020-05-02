<template>
  <v-app id="app">
    <!--<v-card color="grey lighten-4" flat height="100%" tile>-->
    <v-app-bar color="primary" dark elevate-on-scroll app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Sample Electron-Vue Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list class="text-left" nav dense>
        <h1>Menu</h1>
        <v-list-item-group color="primary">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>

    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
    <!-- </v-card> -->
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
