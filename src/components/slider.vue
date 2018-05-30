<template>
  <v-navigation-drawer stateless width="280" permanent class="gray" dark style="overflow: hidden;">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>요청 리스트</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>거래 농가 리스트</v-list-tile-title>
        </v-list-tile>

        <v-list-group no-action v-model="activeInsertQuantity">
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>gavel</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>입추 예정 물량</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="subItem in items.insertQuantity.subItems" :key="subItem.title" :to="subItem.pageName">
            <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-group no-action v-model="activeInsertManagement">
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>gavel</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>입추 관리</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="subItem in items.insertManagement.subItems" :key="subItem.title" :to="subItem.pageName">
            <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-tile to="breeding">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>사육 현황</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>출하 관리</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>푸시알림 범위 설정</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>CCTV</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>데이터</v-list-tile-title>
        </v-list-tile>

      </v-list>
  </v-navigation-drawer>
</template>
<script>
  import store from "../store";
  export default {
    name: "slider",
    data() {
      return {
        items: {
          dashboard: {
            title: '요청리스트',
            icon: 'dashboard',
            pageName: 'dashboard'
          },
          trading: {
            title: '거래 농가 리스트',
            icon: 'account_box',
            pageName: 'trading'
          },
          insertQuantity: {
            title: '입추 예정 물량',
            icon: 'gavel',
            active: 'true',
            subItems: [{
                title: '부화장 관리',
                icon: 'gavel',
                pageName: 'insertQuantity-1'
              },
              {
                title: '입추 예정물량 관리',
                icon: 'gavel',
                pageName: 'insertQuantity-2'
              },
            ]
          },
          insertManagement: {
            title: '입추 관리',
            icon: 'gavel',
            active: 'true',
            subItems: [{
                title: '입추대기 명단',
                icon: 'gavel',
                pageName: 'insertManagement-1'
              },
              {
                title: '분양내역 확정',
                icon: 'gavel',
                pageName: 'insertManagement-2'
              },
              {
                title: '분양내역 확인',
                icon: 'gavel',
                pageName: 'insertManagement-3'
              },
            ]
          },
          breeding: {
            title: '사육 현황',
            icon: 'dashboard',
            pageName: 'breeding'
          },
          out: {
            title: '출하 관리',
            icon: 'dashboard',
            pageName: 'out'
          },
          push: {
            title: '푸시알림 범위 설정',
            icon: 'dashboard',
            pageName: 'push'
          },
          cctv: {
            title: 'CCTV',
            icon: 'dashboard',
            pageName: 'cctv'
          },
          data: {
            title: '데이터',
            icon: 'dashboard',
            pageName: 'data'
          },
        }
      }
    },
    computed: {
      pageName: () => {
        return store.state.pageName;
      },
      groupName: () => {
        return store.state.groupName;
      },
      activeInsertManagement: () => {
        //return this.groupName === 'insertManagement' ? true : false
        return true
      },
      activeInsertQuantity: () => {
        //return this.groupName === 'insertQuantity' ? true : false
        return true
      }
    }
  }

</script>
<style>
  /* .navigation-drawer {
   top: 48px;
 } */

  a:link {
    /* color: red; */
    text-decoration: none;
  }

  a:visited {
    /* color: black; */
    text-decoration: none;
  }

  a:hover {
    /* color: blue; */
    text-decoration: none;
  }

  .primary--text {
    color: #9090ff;

  }

</style>
