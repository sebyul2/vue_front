<template>
  <div>
    <!-- app header -->
    <header class="app-header">
      <app-nav></app-nav>
    </header>
    <!-- /app header -->

    <!-- Page header -->
    <div class="page-header">
      <div class="breadcrumb-line">
        <ul class="breadcrumb">
          <li>
            <router-link to="main">
              <i class="icon-home2 position-left"></i> Home
            </router-link>
          </li>
          <li class="active">{{pageName}}</li>
        </ul>
      </div>
    </div>
    <!-- /page header -->

    <!-- main -->
    <router-view></router-view>
    <!-- /main -->

    <!-- Footer -->
    <b-navbar class="breadcrumb-line footer" type="light" variant="light">
      <b-navbar-brand>&copy; 2018. byul</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>About</b-nav-item>
        <!-- <b-nav-item>Terms</b-nav-item>
        <b-nav-item>Contact</b-nav-item> -->
      </b-navbar-nav>
    </b-navbar>
    <!-- /footer -->
  </div>
</template>

<script>
  import AppNav from './components/AppNav'
  import store from './store'

  export default {
    components: {
      AppNav
    },
    data: {
      message: 'message_app'
    },
    computed: {
      pageName: () => {
        return store.state.pageName
      }
    }
  }

</script>
