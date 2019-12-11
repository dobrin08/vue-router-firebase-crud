<template>
<v-app>
  <v-app-bar color="accent-4" dark id="nav">
    <v-toolbar-title>Vuetify &amp; Firebase</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn to="/" dark text>Home</v-btn>
        
      <v-btn to="/about" dark text>About</v-btn>
      
      <!-- <v-btn to="/users" dark text>Users</v-btn> -->

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark text v-on="on">Users</v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(navItem, index) in navItems"
            :key="index"
            :to="navItem.to"
          >
            <v-list-item-title>{{ navItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
    
  <router-view/>

  <v-footer>
    <v-container>
      <p class="text-center mb-0">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </p>
    </v-container>
  </v-footer>
</v-app>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import 'bulma/css/bulma.css'
  
  Vue.use(VeeValidate);
  
  export default {
    name: 'app',
    data() {
      return {
        navItems: [
          { title: 'All Users', to: '/users' },
          { title: 'Add New User', to: '/add-new-user' },
        ],
      }
    }
  }
</script>

<style lang="scss">
  @import "./../node_modules/bulma/bulma.sass";
  @import "./../node_modules/bulma-steps-component/bulma-steps.sass";
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav { flex: 0 1 0; }

  [v-cloak] { display: none; }

  .table { width: 100%; }

  .v-footer { margin-top: auto; }
</style>