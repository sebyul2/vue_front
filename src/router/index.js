import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Login from '../components/login.vue'
import Quote from '../components/quote.vue'
import Breeding from '../components/breeding.vue'
import HouseJournal from '../components/houseJournal.vue'
import HouseJournalGraph from '../components/houseJournalGraph.vue'
import HouseInfo from '../components/houseInfo.vue'
import HouseInfoGraph from '../components/houseInfoGraph.vue'
import TotalInfo from '../components/totalInfo.vue'
import TotalInfoGraph from '../components/totalInfoGraph.vue'
import InsertQuantity1 from '../components/insertQuantity-1.vue'
import InsertQuantity2 from '../components/insertQuantity-2.vue'
import InsertQuantity3 from '../components/insertQuantity-3.vue'
import InsertManagement1 from '../components/insertManagement-1.vue'
import InsertManagement2 from '../components/insertManagement-2.vue'
import InsertManagement3 from '../components/insertManagement-3.vue'



Vue.use(Router)

const requireAuth = () => (to, from, next) => {

  if (store.state.accessToken) {
    return next()
  }
  next('/login?returnPath=insertManagement-1')
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
      beforeEnter: requireAuth()
    },
    {
      path: '/breeding',
      name: 'breeding',
      component: Breeding,
      beforeEnter: requireAuth()
    },
    {
      path: '/houseJournal',
      name: 'houseJournal',
      component: HouseJournal,
      beforeEnter: requireAuth()
    },
    {
      path: '/houseJournalGraph',
      name: 'houseJournalGraph',
      component: HouseJournalGraph,
      beforeEnter: requireAuth()
    },
    {
      path: '/houseInfo',
      name: 'houseInfo',
      component: HouseInfo,
      beforeEnter: requireAuth()
    },
    {
      path: '/houseInfoGraph',
      name: 'houseInfoGraph',
      component: HouseInfoGraph,
      beforeEnter: requireAuth()
    },
    {
      path: '/totalInfo',
      name: 'totalInfo',
      component: TotalInfo,
      beforeEnter: requireAuth()
    },
    {
      path: '/totalInfoGraph',
      name: 'totalInfoGraph',
      component: TotalInfoGraph,
      beforeEnter: requireAuth()
    },
    {
      path: '/insertQuantity-1',
      name: 'insertQuantity-1',
      component: InsertQuantity1,
      beforeEnter: requireAuth()
    },
    {
      path: '/insertQuantity-2',
      name: 'insertQuantity-2',
      component: InsertQuantity2,
      beforeEnter: requireAuth()
    },
    {
      path: '/insertQuantity-3',
      name: 'insertQuantity-3',
      component: InsertQuantity3,
      beforeEnter: requireAuth()
    },
    {
      path: '/insertManagement-1',
      name: 'insertManagement-1',
      component: InsertManagement1,
      beforeEnter: requireAuth()
    },
    {
      path: '/insertManagement-2',
      name: 'insertManagement-2',
      component: InsertManagement2,
      beforeEnter: requireAuth()
    },
    {
      path: '/insertManagement-3',
      name: 'insertManagement-3',
      component: InsertManagement3,
      beforeEnter: requireAuth()
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/insertManagement-1')
  }
  let groupName = to.name ? to.name.split('-')[0] : null
  if (groupName) {
    store.commit('GROUP', {groupName:groupName})
  }
  if (to.name) {
    store.commit('PAGE', {pageName:to.name})
  }
  next()
})

export default router
