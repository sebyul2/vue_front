<template>
  <v-container fluid grid-list-md>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">입추 예정물량 관리</h3>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs2>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-layout row wrap>
                  <!--<v-flex v-for="header in dataHeader.info" :key="header" d-flex xs12>-->
                  <v-flex>
                    <v-card color="grey" dark>
                      <v-card-text>주차</v-card-text>
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
                  <!--<v-flex v-for="data in dataSet.info" :key="data" d-flex xs12>-->
                  <v-flex>
                    <v-card>
                      <v-card-text>52주차</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout v-for="i in 3" :key="i">
          <v-flex xs6 v-for="j in 2" :key="j">
            <v-layout row wrap>
              <v-flex d-flex xs2>
                <v-card color="grey" dark>
                  <v-card-text v-text="dataSet[0].data[i*2+j-3].day">
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex xs3>
                <v-layout row wrap>
                  <v-flex d-flex xs12>
                    <v-card>
                      <v-card-text>부화 수
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex xs12>
                    <v-card>
                      <v-card-text>입추 예정 물량
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex xs7>
                <v-layout row wrap>
                  <v-flex d-flex xs6 md6 lg8>
                    <v-card>
                      <v-card-text>
                        {{dataSet[0].data[i*2+j-3].hatching}}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex xs6 md6 lg4>
                    <v-btn class="ma-1" large color="primary lighten-1" dark to="insertQuantity-3">수정</v-btn>
                  </v-flex>
                  <v-flex d-flex xs12>
                    <v-card>
                      <v-card-text v-text="dataSet[0].data[i*2+j-3].quantity">
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import store from '../store'

  const dataSet = [{
    week: '52주차',
    data: [{
        day: '3/22 (목)',
        hatching: '123,123,566',
        quantity: '123,000,000'
      },
      {
        day: '3/23 (금)',
        hatching: '123,123,566',
        quantity: '123,000,000'
      },
      {
        day: '3/24 (토)',
        hatching: '123,123,566',
        quantity: '123,000,000'
      },
      {
        day: '3/25 (일)',
        hatching: '123,123,566',
        quantity: '123,000,000'
      },
      {
        day: '3/26 (월)',
        hatching: '123,123,566',
        quantity: '123,000,000'
      },
      {
        day: '3/27 (화)',
        hatching: '123,123,566',
        quantity: '123,000,000'
      }
    ]
  }]

  export default {
    name: 'insert-quantity.2',
    data() {
      return {
        dataSet: dataSet,
        showGraph: false
      }
    },
    methods: {
      graph: function (e) {
        this.$router.push({
          path: 'house-journal-graph'
        })
        return
      }
    }
  }

</script>
<style>
  /* .table td {
    border: 3px solid white;
    padding: 6px;
  } */

</style>
