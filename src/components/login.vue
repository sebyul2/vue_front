<template>
  <v-container row justify-center fill-height>
    <v-layout justify-center>
      <v-flex xs8 sm5 md4 lg3 xl2>
        <v-card>
          <v-card-title primary-title class="justify-center">
            <v-form>
              <v-text-field autofocus v-model="email" name="id" label="아이디" type="text"></v-text-field>
              <v-text-field  v-model="password" name="password" label="비밀번호" type="password"></v-text-field>
              <v-card-actions class="justify-center">
                <v-btn color="primary" @click="onSubmit(email, password)">로그인</v-btn>
                <v-btn color="white">회원가입</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import axios from "axios"
  import store from "../store"
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      keydown (e) {
        if (e.keyCode === 13) {
          this.onSubmit(this.email, this.password)
        }
        return;
      },
      onSubmit (email, password) {
        if (email !== 'admin' && email !== 'admin2' || password !== 'admin') {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
          return
        }
        axios.get(`${store.state.resourceHost}/auth?type=${email}`).then(result => {
          let token = result.data.data.token
          this.$store.commit('LOGIN', { accessToken: token })
          this.redirect()
        })
      },
      redirect () {
        const { search } = window.location
        if (search === '') {
          this.$router.push({
            path: 'insertManagement-1'
          })
        } else {
          const tokens = search.replace(/^\?/, '').split('&')
          const { returnPath } = tokens.reduce((qs, tkn) => {
            const pair = tkn.split('=')
            qs[pair[0]] = decodeURIComponent(pair[1])
            return qs
          }, {})
          this.$router.push(returnPath)
        }
      }
    }
  }

</script>

