import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

// import $ from 'jquery'
// import core from './plugin/core'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// 라우터 옵션을 라우터에 삽입하여 전체 응용 프로그램을 라우터가 인식하도록 하십시오.
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  // core
})
