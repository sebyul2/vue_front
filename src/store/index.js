import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://localhost:8080'
const page = {
  main : 'dashboard',
  quote : 'quote',
  breeding: 'breeding'
}

export default new Vuex.Store({
  state: {
    accessToken: null,
    pageName : ''
  },
  getters: {

  },
  // state를 변이시키려면 mutations를 이용, mutations는 동기적이며 직접 접근 할 수 없다.
  // commit(function, param)으로 접근 가능
  mutations: {
    PAGE (state, {pageName}) {
      state.pageName = page[pageName]
    },
    LOGIN (state, {accessToken}) {
      state.accessToken = accessToken
    },
    LOGOUT (state) {
      state.accessToken = null
    }
  },
  // mutations와 유사하나 상태를 직접 변경시키지 않고 변이에 대한 커밋을 함. 일련의 비동기 작업이 포함될 수 있음
  actions: {
    LOGIN ({commit}, {email, password}) {
      return axios.post(`${resourceHost}/login`, {email, password})
        .then(({data}) => commit('LOGIN', data))
    },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
  }
}) 