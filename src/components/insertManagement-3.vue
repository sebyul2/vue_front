<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">인수 내역 확인</h3>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="dataTable.headers" :items="dataTable.items" :search="dataTable.search" hide-actions :pagination.sync="dataTable.pagination"
            class="elevation-1">
            <template slot="items" slot-scope="props">
              <tr :active="dataTable.selected.includes(props.item.user_id)" @click="select(props.item.user_id)">
                <td>
                  <v-checkbox primary hide-details :input-value="dataTable.selected.includes(props.item.user_id)"></v-checkbox>
                </td>
                <td class="text-xs-left">{{ props.item.email }}</td>
                <td class="text-xs-left">{{ props.item.user_name }}</td>
                <td class="text-xs-left">
                  <v-flex xs12 v-for="(item, key, index) in props.item.list" :key="index">
                    {{ item.hatchery_name }}
                  </v-flex>
                </td>
                <td class="text-xs-left">
                  <v-flex xs12 v-for="(item, key, index) in props.item.list" :key="index">
                    {{ item.quantity }}
                  </v-flex>
                </td>
                <td class="text-xs-left">{{ props.item.total_quantity }}</td>
                <td class="text-xs-left">
                  <template v-if="props.item.insertList.length > 0">
                    <v-flex xs12 v-for="(item, key, index) in props.item.insertList" :key="index">
                      {{ item.house_number }} 동 {{ item.quantity }}
                    </v-flex>
                  </template>
                  <template v-else >
                    <v-flex xs12 v-for="(item, key, index) in props.item.insert_house" :key="index">
                      {{ item }} 동
                    </v-flex>
                  </template>
                </td>
                <td class="text-xs-left">
                  <template v-if="props.item.status === '4'">
                    분양 확정
                  </template>
                  <template v-if="props.item.status === '5'">
                    동 선택 완료
                  </template>
                  <template v-if="props.item.status === '6'">
                    동별 입추수수 입력 완료
                  </template>
                  <template v-if="props.item.status === '7'">
                    입추 완료
                  </template>
                </td>
              </tr>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ dataTable.search }}" found no results.
            </v-alert>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="dataTable.pagination.page" :length="pages"></v-pagination>
          </div>

          <v-layout row justify-end>
            <v-btn color="primary lighten-1" v-on:click="save()">승락</v-btn>
            <v-btn color="primary lighten-1" v-on:click="cancel()">불허</v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
  import axios from "axios"
  import store from "../store"
  import moment from "moment"

  export default {
    name: "insertManagement-2",
    data() {
      return {
        datePicker: {
          show: false
        },
        date: '',
        hatcherySale: [0, 0],
        dataSet: {},
        hatcheryList: [],
        showMode: "list",
        dataTable: {
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
              text: "부화장",
              width: "15%",
              value: "hatcheryName",
              sortable: false
            },
            {
              text: "분양수수",
              width: "10%",
              value: "quantity",
              sortable: false
            },
            {
              text: "총분양수수",
              width: "10%",
              value: "totalQuantity",
              sortable: false
            },
            {
              text: "동별 입추 수수",
              width: "10%",
              value: "deleteItem",
              sortable: false
            },
            {
              text: "상태",
              width: "18%",
              value: "deleteItem",
              sortable: false
            },
          ],
          items: []
        },
        insertList: []
      }
    },
    mounted() {
      axios.get(`${store.state.resourceHost}/hatchery/quantity?confirm=1`)
        .then(result => {
          if (result.data.result === 'error') throw Error(result.data.code)
          const dataSet = result.data.data
          if (dataSet.length > 0) {
            this.$data.dataTable.items = dataSet
            this.$data.hatcherySale = dataSet.list.map(item => Math.abs(item.quantity))
          } else {
            this.$data.dataTable.items = []
            this.$data.hatcherySale = [0, 0]
          }
          this.$forceUpdate()
        }).catch(err => {})
    },
    methods: {
      save() {
        const list = this.$data.dataTable.selected
        if (list.length === 0) return
        let isError = 0
        list.map(userId => {
          console.log(userId)
           this.$data.dataTable.items.map(dataItem => {
             console.log('dataItem', dataItem)
            if (dataItem.user_id !== userId) return
            if (dataItem.status < '6') isError = 1
            else if (dataItem.status === '7') isError = 2
          })
        })
        if (isError === 1){
          alert('동별 입추 수수가 입력되지 않았습니다.')
          return
        }

        if (isError === 2){
          alert('이미 입추 완료 상태입니다.')
          return
        }

        axios.post(`${store.state.resourceHost}/user/status`, {
            userlist: list,
            status: 7
          })
          .then(result => {

            axios.get(`${store.state.resourceHost}/hatchery/quantity?confirm=1`)
              .then(result => {
                if (result.data.result === 'error') throw Error(result.data.code)
                const dataSet = result.data.data
                if (dataSet.length > 0) {
                  this.$data.dataTable.items = dataSet
                  this.$data.hatcherySale = dataSet.list.map(item => Math.abs(item.quantity))
                } else {
                  this.$data.dataTable.items = []
                  this.$data.hatcherySale = [0, 0]
                }
                this.$forceUpdate()
              }).catch(err => {})

            this.$forceUpdate()
          }).catch(e => {})
      },
      cancel() {
        axios.post(`${store.state.resourceHost}/user/status`, {
            list: list,
            status: 7
          })
          .then(result => {
            this.$data.dataTable.items = this.$data.dataTable.items.filter(item => {
              return !this.$data.dataTable.selected.includes(item.user_id)
            })
            this.$data.dataTable.selected = []
            this.$forceUpdate()
          }).catch(e => {})
      },
      select(val) {
        if (this.$data.dataTable.selected.includes(val)) {
          return this.$data.dataTable.selected.pop(val)
        }
        return this.$data.dataTable.selected.push(val)
      },
      deleteItem(item) {
        console.log(item.user_id)
      }
    },
    watch: {
      date: function (val) {
        this.datePicker.show = false
        this.getHatcheryQuantity(val)
      },
    },
    computed: {
      pages() {
        if (
          this.dataTable.pagination.rowsPerPage == null ||
          this.dataTable.pagination.totalItems == null
        )
          return 0;

        return Math.ceil(
          this.dataTable.pagination.totalItems / this.dataTable.pagination.rowsPerPage
        );
      }
    }
  }

</script>
<style>
  .form-data {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  .input-group--solo label {
    color: rgba(0, 0, 0, .8) !important;
  }

  .input-group--solo input {
    color: rgba(0, 0, 0, .8) !important;
  }

</style>
