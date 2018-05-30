<template>

  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="grey" dark>
                  <v-card-text>농가 대표자명</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs10>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card>
                  <v-card-text v-text="dataSet.name"></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs3>
        <v-card color="grey" dark>
          <v-card-text>사육 가능 총 수수</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="grey lighten-3">
          <v-card-text v-text="dataSet.totalQuantity"></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="grey" dark>
          <v-card-text>이전 분양 수수</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="grey lighten-3">
          <v-card-text v-text="dataSet.latestQuantity"></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="datePicker.show" max-width=320px>
      <v-card>
        <v-card-text>
          <v-date-picker reactive v-model="date" class="mt-3" :min="minDate()" :max="maxDate()"></v-date-picker>
        </v-card-text>
      </v-card>
    </v-dialog>

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
      <v-flex xs12>
        <v-card color="grey lighten-3">
          <v-card-text>분양 계획</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="grey" dark>
          <v-card-text>총 분양 수수</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card color="grey lighten-3">
          <v-card-text>{{ hatcherySale.reduce((acc, val) => parseInt(acc||0) + parseInt(val||0) )}}</v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card color="grey" dark>
          <v-card-text>부화장</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card color="grey" dark>
          <v-card-text>분양 수수</v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card color="grey" dark>
          <v-card-text>예산 부화장</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs9>
        <v-text-field type='number' append-icon="edit" solo label="분양 수수 입력" v-model="hatcherySale[0]"></v-text-field>
      </v-flex>

      <v-flex xs3>
        <v-card color="grey" dark>
          <v-card-text>아산 부화장</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs9>
        <v-text-field type='number' append-icon="edit" solo label="분양 수수 입력" v-model="hatcherySale[1]"></v-text-field>
      </v-flex>
    </v-layout>

    <!-- 부화장 현황 -->
    <v-flex xs12 style="margin-top:50px; margin-bottom:10px;">
      <h3>부화장 현황</h3>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card color="grey" dark>
          <v-card-text>부화장</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="grey" dark>
          <v-card-text>부화 수</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="grey" dark>
          <v-card-text>남은 수수</v-card-text>
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
          <v-card-text v-text="item.quantity"></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card>
          <v-card-text>{{parseInt(item.quantity||0) - hatcherySale[key]}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row justify-end>
      <v-btn color="primary lighten-1" v-on:click="save()">저장</v-btn>
    </v-layout>

  </v-container>

</template>
<script>
  import axios from "axios"
  import store from "../store"
  import moment from "moment"
  import Bus from "../bus/bus"

  export default {
    name: "houseDetail",
    data() {
      return {
        datePicker: {
          show: false
        },
        savedDateList: [],
        date: '',
        hatcherySale: [0, 0],
        dataSet: {},
        hatcheryList: [],
        showMode: "list"
      }
    },
    created() {
    },
    mounted() {
      axios.get(`${store.state.resourceHost}/user/${store.state.dialog.id}`)
        .then(result => {
          const dataSet = result.data.data
          this.$data.dataSet = dataSet
        })
      // 날짜 자동 선택
      axios.get(`${store.state.resourceHost}/hatchery?user_id=${store.state.dialog.id}`)
        .then(result => {
          const dataSet = result.data.data
          const savedDateList = []
          dataSet.map(item => Object.assign(savedDateList, item.dateList))
          if (savedDateList.length > 0) {
            this.$data.savedDateList = dataSet.dateList
            this.$data.date = savedDateList[0]
            this.$forceUpdate()
          } else {
            this.$data.date = moment(new Date).format('YYYY-MM-DD')
          }
        })

    },
    methods: {
      closeDialog() {
        this.$store.commit('DIALOG', {
          showMode: 'list',
          show: false
        })
      },
      openDialog(id, pageName) {
        this.$store.commit('DIALOG', {
          show: true,
          pageName: pageName,
          id: id,
          title: dialogTitle[pageName]
        })
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
        axios.get(`${store.state.resourceHost}/hatchery?date=${this.$data.date}&confirm=1` +
            `&user_id=${store.state.dialog.id}`)
          .then(result => {
            const dataSet = result.data.data
            this.$data.hatcheryList = dataSet
            this.$data.hatcherySale = dataSet.map(item => Math.abs(item.expectedQuantity))
            this.$forceUpdate()
          })
      },
      // 분양 계획 저장
      save() {
        if (!this.$data.date) return
        const list = this.$data.hatcheryList.map((item, index) => {
          return {
            date: this.$data.date,
            type: 2,
            user_id: store.state.dialog.id,
            hatchery_id: item.hatchery_id,
            name: item.name,
            quantity: this.$data.hatcherySale[index],
            confirm: 0
          }
        })
        console.log(list)
        axios.post(`${store.state.resourceHost}/hatchery/quantity`, { list })
          .then(result => {
            return axios.post(`${store.state.resourceHost}/user/${store.state.dialog.id}/status`, {
              status: 3
            })
          }).then(result => {
            alert('저장되었습니다.')
            Bus.$emit('refresh', true)
          }).catch(e => {
            alert('save error')
          })
      }
    },
    watch: {
      date: function (val) {
        this.datePicker.show = false
        this.getHatcheryQuantity(val)
      }
    },
    computed: {
    }
  }

</script>
<style>
  .form-data {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  .input-group--solo label {
    color: rgba(0, 0, 0, .5) !important;
  }

  .input-group--solo input {
    color: rgba(0, 0, 0, .5) !important;
  }

</style>
