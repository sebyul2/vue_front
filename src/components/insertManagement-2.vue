<template>
  <v-container fluid grid-list-md>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">분양내역 확정</h3>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>

        <v-layout row wrap>
          <v-flex xs3>
            <v-card color="grey" dark>
              <v-card-text>날짜선택</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs9>
            <v-text-field type='text' append-icon="edit" solo v-model="date" v-on:click="openDatePicker()">
            </v-text-field>
          </v-flex>
        </v-layout>

        <!-- 부화장 현황 -->
        <v-layout row wrap style="margin-top:50px;">
          <v-flex xs4>
            <v-card color="grey" dark>
              <v-card-text>부화장</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card color="grey" dark>
              <v-card-text>분양 예정 수수</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card color="grey" dark>
              <v-card-text>총 수수</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap v-for="(item, key, index) in hatcheryList" :key="index">
          <v-flex xs4>
            <v-card color="grey lighten-3">
              <v-card-text v-text="item.name"></v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-text v-text="item.expectedQuantity"></v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-text v-text="item.quantity"></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs4>
            <v-card color="grey" dark>
              <v-card-text>총 분양 수수</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs8>
            <v-card>
              <v-card-text v-text="totalQuantity()"></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

      </v-card-text>
      <v-divider></v-divider>

      <v-card-text>
        <v-flex xs12 style="margin-top:20px;">
          <h3>농가별 분양 명단</h3>
        </v-flex>
      </v-card-text>

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
              <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                <v-icon color="pink">delete</v-icon>
              </v-btn>
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
        <v-btn color="primary lighten-1" v-on:click="save()">분양 확정</v-btn>
      </v-layout>

    </v-card>

    <v-dialog v-model="datePicker.show" max-width=320px>
      <v-card>
        <v-card-text>
          <v-date-picker reactive v-model="date" class="mt-3" :min="minDate()" :max="maxDate()"></v-date-picker>
        </v-card-text>
      </v-card>
    </v-dialog>

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
              width: "20%",
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
              width: "15%",
              value: "quantity",
              sortable: false
            },
            {
              text: "총분양수수",
              width: "15%",
              value: "totalQuantity",
              sortable: false
            },
            {
              text: "삭제",
              width: "8%",
              value: "deleteItem",
              sortable: false
            },
          ],
          items: []
        }
      }
    },
    mounted() {
      this.$data.date = moment(new Date()).format('YYYY-MM-DD')
      axios.get(`${store.state.resourceHost}/user/${store.state.accessToken}`)
        .then(result => {
          const dataSet = result.data.data
          this.$data.dataSet = dataSet
        })
    },
    methods: {
      select(val) {
        if (this.$data.dataTable.selected.includes(val)) {
          return this.$data.dataTable.selected.pop(val)
        }
        return this.$data.dataTable.selected.push(val)
      },
      totalQuantity() {
        const arr = this.$data.hatcheryList.map(item => item.expectedQuantity)
        return arr.length > 0 ? arr.reduce((acc, val) => acc + val) : 0
      },
      openDatePicker() {
        this.$data.datePicker.show = true
      },
      minDate() {
        const date = new Date()
        return moment(date).format('YYYY-MM-DD')
      },
      maxDate() {
        const date = new Date()
        return moment(date).add(5, 'days').format('YYYY-MM-DD')
      },
      getHatcheryQuantity(data) {

        axios.get(`${store.state.resourceHost}/hatchery?date=${this.$data.date}`)
          .then(result => {
            const dataSet = result.data.data
            this.$data.hatcheryList = dataSet
            this.$forceUpdate()
          })

        axios.get(`${store.state.resourceHost}/hatchery/quantity?date=${this.$data.date}` +
            `&status=3`)
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
      // 분양 내용 확정
      save() {
        const list = this.$data.dataTable.selected.map(item => {
          return {
            _id: item,
            status: 3
          }
        })
        axios.post(`${store.state.resourceHost}/hatchery/confirm?date=${this.$data.date}`, {
            list: list
          })
          .then(result => {
            this.$data.dataTable.items = this.$data.dataTable.items.filter(item => {
              return !this.$data.dataTable.selected.includes(item.user_id)
            })
            this.$data.dataTable.selected = []
            this.$forceUpdate()
          }).catch(e => {})
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
