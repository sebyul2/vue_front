<template>
  <div class="sidebar sidebar-main sidebar-default">
    <div class="sidebar-content">

      <!-- Main navigation -->
      <div class="sidebar-category sidebar-category-visible">
        <div class="category-title h6">
          <span>Main navigation</span>
          <ul class="icons-list">
            <li>
              <a href="#" data-action="collapse"></a>
            </li>
          </ul>
        </div>

        <div class="category-content sidebar-user">
          <div class="media">
            <a href="#" class="media-left">
              <img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt="">
            </a>
            <div class="media-body">
              <span class="media-heading text-semibold">테스터</span>
              <!-- <div class="text-size-mini text-muted">
                      <i class="icon-pin text-size-small"></i> &nbsp;Santa Ana, CA
                    </div> -->
            </div>

            <div class="media-right media-middle">
              <ul class="icons-list">
                <li>
                  <a href="#">
                    <i class="icon-cog3"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="category-content no-padding">
          <ul class="navigation navigation-main navigation-accordion">

            <!-- Main -->
            <!-- <li class="navigation-header">
                    <span>Main</span>
                    <i class="icon-menu" title="Main pages"></i>
                  </li> -->
            <li v-bind:class="{ active: pageName === 'dashboard' }">
              <router-link to="main">
                <i class="icon-home4"></i>
                <span>요청리스트</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'trading' }">
              <router-link to="trading">
                <i class="icon-stack2"></i>
                <span>거래 농가 리스트</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'insert_quantity' }">
              <router-link to="insert_quantity">
                <i class="icon-copy"></i>
                <span>입추 예정 물량</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'insert_management' }">
              <router-link to="insert_management">
                <i class="icon-droplet2"></i>
                <span>입추 관리</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'breeding' }">
              <router-link to="breeding">
                <i class="icon-newspaper"></i>
                <span>사육 현황</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'out' }">
              <router-link to="out">
                <i class="icon-user-tie"></i>
                <span>출하 관리</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'push' }">
              <router-link to="push">
                <i class="icon-book"></i>
                <span>푸시알림 범위 설정</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'cctv' }">
              <router-link to="ccty">
                <i class="icon-book"></i>
                <span>CCTV</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: pageName === 'data' }">
              <router-link to="data">
                <i class="icon-stats-bars"></i>
                <span>데이터</span>
              </router-link>
            </li>
            <!-- /main -->

          </ul>
        </div>
      </div>
      <!-- /main navigation -->

    </div>
  </div>
</template>
<script>
  import store from '../store'
  export default {
    name: 'slider',
    computed: {
      pageName : () => {
        return store.state.pageName
      }
    }
  }

</script>
<style>
</style>