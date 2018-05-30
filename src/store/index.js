import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://45.77.13.139:8080'
const page = {
  main : 'dashboard',
  quote : 'quote',
  breeding: 'breeding'
}

export default new Vuex.Store({
  state: {
    resourceHost: resourceHost,
    accessToken: null,
    groupName: '',
    pageName : 'login',
    dialog: {
      id: '',
      title:'',
      pageName: '',
      showMode: 'list',
      show: false
    },
  },
  getters: {
  },
  // state를 변이시키려면 mutations를 이용, mutations는 동기적이며 직접 접근 할 수 없다.
  // commit(function, param)으로 접근 가능
  mutations: {
    DIALOG (state, _dialog) {
      state.dialog = Object.assign(state.dialog, _dialog)
    },
    GROUP (state, {groupName}) {
      state.groupName = groupName
    },
    PAGE (state, {pageName}) {
      console.log(pageName)
      state.pageName = pageName
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
    DIALOG ({commit}, {options}) {
      commit('DIALOG', options)
    },
    // LOGIN ({commit}, {email, password}) {
    //   return axios.post(`${resourceHost}/login`, {email, password})
    //     .then(({data}) => commit('LOGIN', data))
    // },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
  }
}) 