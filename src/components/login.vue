<template>
  <div class="login-container">
    <!-- Page container -->
    <div id="app" class="page-container">

      <!-- Page content -->
      <div class="page-content">

        <!-- Main content -->
        <div class="content-wrapper">

          <!-- Simple login form -->
          <form @submit.prevent="onSubmit(email, password)">
            <div class="panel panel-body login-form">
              <div class="text-center">
                <div class="icon-object border-slate-300 text-slate-300">
                  <i class="icon-reading"></i>
                </div>
                <!-- <h5 class="content-group">Login to your account <small class="display-block">Enter your credentials below</small></h5> -->
              </div>

              <div class="form-group has-feedback has-feedback-left">
                <input v-model="email" type="text" class="form-control" placeholder="아이디">
                <div class="form-control-feedback">
                  <i class="icon-user text-muted"></i>
                </div>
              </div>

              <div class="form-group has-feedback has-feedback-left">
                <input v-model="password" v-on:keydown="keydown" type="password" class="form-control" placeholder="비밀번호">
                <div class="form-control-feedback">
                  <i class="icon-lock2 text-muted"></i>
                </div>
              </div>

              <div class="form-group">
                <!-- <button type="submit" class="btn btn-primary btn-block">로그인 <i class="icon-circle-right2 position-right"></i></button> -->
                <button type="submit" value="Login" class="btn btn-primary btn-block">로그인</button>
                <a href="login_registration.html" class="btn btn-default btn-block content-group">회원가입</a>
              </div>
              <!-- <div class="text-center">
                <a href="login_password_recover.html">Forgot password?</a>
              </div> -->
            </div>
          </form>
          <!-- /simple login form -->

        </div>
        <!-- /main content -->

      </div>
      <!-- /page content -->

    </div>
    <!-- /page container -->
  </div>
</template>
<script>

  import $ from 'jquery'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      keydown: function (e) {
        if (e.keyCode === 13) {
          this.login()
        }
        return;
      },
      onSubmit(email, password) {
        if (email !== 'admin' || password !== 'admin') {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
          return
        }
        this.$store.commit('LOGIN', {
          accessToken: 'test'
        })
        this.redirect()
      },
      redirect() {
        const {search} = window.location
        if (search === '') {
          this.$router.push({
            path: 'breeding'
          })
        } else {
          const tokens = search.replace(/^\?/, '').split('&')
          const {
            returnPath
          } = tokens.reduce((qs, tkn) => {
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
