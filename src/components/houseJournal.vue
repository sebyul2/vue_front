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
      <v-tab-item v-for="(item, key, index) in dataSet.list" :key="index">
        <v-card flat class="my-1">
          <v-layout row wrap>

            <v-flex xs2>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex v-for="header in dataHeader.list" :key="header" d-flex xs12>
                      <v-card color="grey" dark>
                        <v-card-text v-if="header === '동 입추 추수'">{{key+1}}{{header}}</v-card-text>
                        <v-card-text v-else v-text="header"></v-card-text>
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
                    <v-flex v-for="data in item" :key="data" d-flex xs12>
                      <v-card>
                        <v-card-text v-text="data"></v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

          </v-layout>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>

</template>
<script>
  const dataHeader = {
    info: [
      '대표자명',
      '현재일령',
      '회전',
      '총 분양 수수'
    ],
    list: [
      '일령',
      '날짜',
      '동 입추 추수',
      '도태',
      '폐사',
      '현재수수',
      '일 용수량',
      '사료 입고량',
      '일 사료 섭취량',
      '누적 사료량',
      '체중',
      '온도',
      '습도'
    ]
  }

  const dataSet = {
    info: {
      name: "김모모",
      cycle: "1회전",
      nowAge: "3일령",
      total: "1회전"
    },
    list: [{
      age: '1일령',
      date: '2018.03.21',
      insert: '12345수',
      temp1: '0',
      temp2: '0',
      temp3: '0',
      temp4: '0',
      temp5: '0',
      temp6: '0',
      temp7: '0',
      temp8: '0',
      temp9: '0',
      temp10: '0'
    }, {
      age: '1일령',
      date: '2018.03.21',
      insert: '12345수',
      temp1: '0',
      temp2: '0',
      temp3: '0',
      temp4: '0',
      temp5: '0',
      temp6: '0',
      temp7: '0',
      temp8: '0',
      temp9: '0',
      temp10: '0'
    }, {
      age: '1일령',
      date: '2018.03.21',
      insert: '12345수',
      temp1: '0',
      temp2: '0',
      temp3: '0',
      temp4: '0',
      temp5: '0',
      temp6: '0',
      temp7: '0',
      temp8: '0',
      temp9: '0',
      temp10: '0'
    }, ]
  }

  export default {
    name: 'houseJournal',
    data() {
      return {
        dataHeader: dataHeader,
        dataSet: dataSet,
        showGraph: false
      }
    },
    methods: {
      graph: function (e) {
        this.$router.push({
          path: 'house-journal-graph'
        })
        return;
      }
    }
  }

</script>
<style>
  #from-data {
    padding: 11px;
  }

</style>
