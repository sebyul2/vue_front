<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">입추대기 명단</h3>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="items" :search="search" hide-actions :pagination.sync="pagination" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{ props.item.sequence }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.grade }}</td>
              <td class="text-xs-left">{{ props.item.rest }}</td>
              <td class="text-xs-left">{{ props.item.total_quantity }}</td>
              <td class="text-xs-left">{{ props.item.address }}</td>
              <td class="text-xs-left">
                <template v-if="props.item.status === '2'">
                  <v-btn class="mx-0" color="primary" @click="openDialog(props.item.id, 'houseDetail')">분양</v-btn>
                </template>
                <template v-if="props.item.status === '3'">
                  <v-btn class="mx-0" color="primary" @click="openDialog(props.item.id, 'houseDetail')">수정</v-btn>
                </template>
                <template v-if="props.item.status === '4'">
                  <v-btn class="mx-0" color="grey">분양 승인 완료</v-btn>
                </template>
                <template v-if="props.item.status === '5'">
                  <v-btn class="mx-0" color="grey">입추수수 승인중</v-btn>
                </template>
                <template v-if="props.item.status === '6'">
                  <v-btn class="mx-0" color="grey">입추수수 승인 </v-btn>
                </template>
              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- dialog -->
    <v-dialog v-model="dialog.show" persistent scrollable max-width=80%>
      <v-card>
        <v-card-actions>
          <v-card-title>
            <h3>{{dialog.title}}</h3>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="closeDialog()"><v-icon>close</v-icon></v-btn>
        </v-card-actions>
        <v-card-text>
          <house-detail v-if="showHouseDetail"></house-detail>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- dialog -->
  </v-container>
</template>
<script>
  import axios from "axios"
  import store from "../store"
  import houseDetail from "./houseDetail"
  import Bus from "../bus/bus"

  const dialogTitle = {
    'houseDetail': '농가정보 상세보기'
  }

  export default {
    name: "insertManagement",
    components: {
      houseDetail
    },
    data() {
      return {
        showHouseDetail: false,
        search: "",
        pagination: {},
        selected: [],
        headers: [{
            text: "No.",
            width: "2%",
            value: "number",
            sortable: false
          },
          {
            text: "아이디",
            width: "10%",
            value: "userId",
            sortable: false
          },
          {
            text: "대표자명",
            width: "10%",
            value: "userName",
            sortable: false
          },
          {
            text: "농가등급",
            width: "10%",
            value: "userLevel",
            sortable: false
          },
          {
            text: "휴지일수",
            width: "10%",
            value: "restDay",
            sortable: false
          },
          {
            text: "사육수수",
            width: "10%",
            value: "totalFee",
            sortable: false
          },
          {
            text: "주소",
            width: "20%",
            value: "addr",
            sortable: false
          },
          {
            text: "수정/분양",
            width: "8%",
            value: "action",
            sortable: false
          }
        ],
        items: [
          // {
          //   userId: "test@naver.com",
          //   userName: "김아무",
          //   userLevel: "(공란)*",
          //   restDay: "21일",
          //   totalFee: "100,000,000",
          //   addr: "경기도 김포시 운양동",
          //   action: "aaa"
          // },
          // {
          //   id: "test@naver.com",
          //   name: "김아무",
          //   grade: "(공란)*",
          //   restDay: "21일",
          //   breeding: "100,000,000",
          //   address: "서울시 마포구 성산동",
          //   action: "aaa"
          // }
        ]
      };
    },
    mounted() {

      const update = () => {
        axios.get(`${store.state.resourceHost}/user`)
          .then(result => {
            const data = result.data.data
            this.$data.items = data.filter(item => item.status > 1)
              .map((item, index) => {
                item.number = index + 1
                return item
              })
          }).catch(err => {
            console.log(err)
          })
      }
      Bus.$on('refresh', function(value) { update() })
      update()
    },
    methods: {
      closeDialog() {
        this.$data.showHouseDetail = false
        this.$store.commit('DIALOG', {
          showMode: 'list',
          show: false
        })
      },
      openDialog(id, pageName) {
        this.$data.showHouseDetail = true
        this.$store.commit('DIALOG', {
          show: true,
          pageName: pageName,
          id: id,
          title: dialogTitle[pageName]
        })
      }
    },
    computed: {
      dialog() {
        return store.state.dialog
      },
      pages() {
        if (
          this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        )
          return 0;

        return Math.ceil(
          this.pagination.totalItems / this.pagination.rowsPerPage
        );
      }
    },
    watch: {
      showHouseDetail(val) {
        this.$forceUpdate()
      }
    }
  };

</script>
