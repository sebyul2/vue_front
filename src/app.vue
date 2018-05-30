<template>
  <v-app>

    <header class="app-header">
      <app-nav></app-nav>
    </header>

    <div grid-list-md text-xs-center>
      <v-layout row>
        <v-flex v-if="pageName !== 'login'">
          <slider></slider>
        </v-flex>
        <v-flex xs12>
          <router-view  style="min-width:1024px; max-width:1680px;"></router-view>
        </v-flex>
      </v-layout>
    </div>

    <v-bottom-nav fixed></v-bottom-nav>

  </v-app>
</template>

<script>
  import AppNav from './components/AppNav'
  import Slider from './components/slider'
  import store from './store'

  export default {
    components: {
      AppNav,
      Slider
    },
    data() {
      return {
        message: 'message_app'
      }
    },
    computed: {
      pageName: () => {
        return store.state.pageName
      },
      groupName: () => {
        return store.state.groupName
      }
    }
  }

</script>
<style>
  .bottom-nav {
    height: 50px;
    margin-top: 42px;
  }

</style>
