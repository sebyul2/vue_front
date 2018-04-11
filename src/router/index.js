import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Login from '../components/login.vue'
import Quote from '../components/quote.vue'
import Breeding from '../components/breeding.vue'
import HouseJournal from '../components/house-journal.vue'
import HouseInfo from '../components/house-info.vue'
import TotalInfo from '../components/total-info.vue'

Vue.use(Router)

const requireAuth = () => (to, from, next) => {

  if (store.state.accessToken) {
    return next()
  }
  next('/login?returnPath=breeding')
}

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/quote',
      name: 'quote',
      component: Quote,
    },
    {
      path: '/breeding',
      name: 'breeding',
      component: Breeding,
      beforeEnter: requireAuth()
    },
    {
      path: '/house-journal',
      name: 'house-journal',
      component: HouseJournal,
    },
    {
      path: '/house-info',
      name: 'house-info',
      component: HouseInfo,
    },
    {
      path: '/total-info',
      name: 'total-info',
      component: TotalInfo,
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/breeding')
  }
  store.commit('PAGE', {pageName:to.name})
  next()
})

export default router
