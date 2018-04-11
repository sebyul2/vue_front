import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import BlockUI from 'vue-blockui'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BlockUI)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
