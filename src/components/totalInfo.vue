<template>

  <v-container fluid grid-list-md>

    <v-layout row wrap>
      <v-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex v-for="header in dataHeader.info" :key="header" d-flex xs12>
                <v-card color="grey" dark>
                  <v-card-text v-text="header"></v-card-text>
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
              <v-flex v-for="data in dataSet.info" :key="data" d-flex xs12>
                <v-card>
                  <v-card-text v-text="data"></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-tabs v-model="active" slider-color="blue">
      <v-tab v-for="(item, key, index) in dataSet.list" :key="index" ripple>
        &nbsp;{{key+1}}동&nbsp;
      </v-tab>
      <v-spacer></v-spacer>
      <v-btn color="primary lighten-1" v-on:click="toggleMode()">그래프 보기</v-btn>
      <v-tab-item v-for="(item, ikey, i) in dataSet.list" :key="i">
        <template v-if="dialog.showMode === 'list'">
          <v-card class="form-data" v-for="(list, jkey, j) in item" :key="j" flat>
            <v-layout row wrap>
              <v-flex xs3>
                <v-card color="grey" dark>
                  <v-card-text>일령</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card color="grey lighten-3">
                  <v-card-text v-text="dataSet.list[ikey][0].age"></v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card color="grey" dark>
                  <v-card-text>날짜</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card color="grey lighten-3">
                  <v-card-text v-text="list.date"></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

            <v-layout v-for="n in 4" :key="n" row wrap>
              <v-flex xs1>
                <v-card color="grey" dark>
                  <v-card-text>{{n}}동</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs1>
                <v-card color="grey lighten-3">
                  <v-card-text>도태</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card>
                  <v-card-text v-text="list.house[n-1].out"></v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs1>
                <v-card color="grey lighten-3">
                  <v-card-text>폐사</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card>
                  <v-card-text v-text="list.house[n-1].die"></v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs1>
                <v-card color="grey lighten-3">
                  <v-card-text>현재수수</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs2>
                <v-card>
                  <v-card-text v-text="list.house[n-1].now"></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

          </v-card>
        </template>
        <div class="chart" v-bind:class="{
            chart1: key == 0,
            chart2: key == 1,
            chart3: key == 2
          }"></div>
      </v-tab-item>
    </v-tabs>
  </v-container>

</template>
<script>
  import store from '../store'
  import houseInfoGraph from './houseInfoGraph'
  import c3 from 'c3'
  import '../../node_modules/c3/c3.css'

  let chart
  let chartDataSet = [{
      bindto: '.chart',
      data: {
        columns: [
          ['sample', 4000, 4500, 3700, 4700]
        ]
      },
      axis: {
        x: {
          label: '일령(x)'
        },
        y: {
          label: '수치(y)'
        }
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      }
    },
    {
      bindto: '.chart2',
      data: {
        columns: [
          ['sample', 4000, 4500, 3700, 4700]
        ]
      },
      axis: {
        x: {
          label: '일령(x)'
        },
        y: {
          label: '수치(y)'
        }
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      }
    },
    {
      bindto: '.chart3',
      data: {
        columns: [
          ['sample', 4000, 4500, 3700, 4700]
        ]
      },
      axis: {
        x: {
          label: '일령(x)'
        },
        y: {
          label: '수치(y)'
        }
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      }
    }
  ]

  const dataHeader = {
    info: [
      '대표자명',
      '현재일령',
      '회전',
      '총 분양 수수'
    ]
  }

  const dataSet = {
    info: {
      name: "김모모",
      cycle: "1회전",
      nowAge: "3일령",
      total: "1회전"
    },
    list: [
      [{
          age: '1일령',
          date: '2018.03.21',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        },
        {
          age: '2일령',
          date: '2018.03.22',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        },
        {
          age: '3일령',
          date: '2018.03.23',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        }
      ],
      [{
          age: '1일령',
          date: '2018.03.21',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        },
        {
          age: '2일령',
          date: '2018.03.22',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        },
        {
          age: '3일령',
          date: '2018.03.23',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        }
      ],
      [{
          age: '1일령',
          date: '2018.03.21',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        },
        {
          age: '2일령',
          date: '2018.03.22',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        },
        {
          age: '3일령',
          date: '2018.03.23',
          house: [{
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            },
            {
              out: '0',
              die: '0',
              now: '0'
            }
          ]
        }
      ]
    ]
  }

  export default {
    name: 'totalInfo',
    components: {
      houseInfoGraph
    },
    data() {
      return {
        dataHeader: dataHeader,
        dataSet: dataSet,
        showMode: 'list'
      }
    },
    methods: {
      toggleMode() {
        this.$store.commit('DIALOG', {
          showMode: this.dialog.showMode === 'list' ? 'graph' : 'list'
        })
      }
    },
    computed: {
      dialog() {
        return store.state.dialog
      }
    },
    mounted() {
      this.$nextTick(() => {
        dataSet.list.map((item, index) => {
          return c3.generate(chartDataSet[index])
        })
      })
    }
  }

</script>
<style>
  .form-data {
    margin-top: 5px;
    margin-bottom: 20px;
  }

</style>
