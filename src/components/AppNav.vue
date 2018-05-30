<template>
 <div>
  <v-toolbar dense dark class="blue lighten-1">
    <v-flex xs2>
      <v-avatar :size="30" class="grey lighten-4">
          <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="avatar">
      </v-avatar>
       &nbsp; 양계인 계열사 관리
    </v-flex>
    <v-flex xs10>
    </v-flex>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
 </div>
</template>

<script>
  import store from '../store'
  export default {
  }
  
</script>
