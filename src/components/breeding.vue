<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">사육 현황</h3>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="items" :search="search" hide-actions :pagination.sync="pagination" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.number }}</td>
              <td class="text-xs-left">{{ props.item.id }}</td>
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.total }}</td>
              <td class="text-xs-left">{{ props.item.status }}</td>
              <td class="text-xs-left">{{ props.item.day }}</td>
              <td class="text-xs-left">
                <v-btn class="mx-0" color="primary" @click="openDialog(props.item.journal, 'houseJournal')">
                  일지
                </v-btn>
              </td>
              <td class="text-xs-left">
                <v-btn class="mx-0" color="primary" @click="openDialog(props.item.houseInfo, 'houseInfo')">
                  동별사육현황
                </v-btn>
              </td>
              <td class="text-xs-left">
                <v-btn class="mx-0" color="primary" @click="openDialog(props.item.totalInfo, 'totalInfo')">
                  전체사육현황
                </v-btn>
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

    <v-dialog v-model="dialog.show" scrollable max-width=80%>
      <v-card>
        <v-card-actions>
          <v-card-title>
            <h3>{{dialog.title}}</h3>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="closeDialog()">X</v-btn>
        </v-card-actions>
        <v-card-text>
          <house-journal v-if="dialog.pageName === 'houseJournal'"></house-journal>
          <house-info v-if="dialog.pageName === 'houseInfo'"></house-info>
          <total-info v-if="dialog.pageName === 'totalInfo'"></total-info>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import store from '../store'
  import houseJournal from './houseJournal'
  import houseInfo from './houseInfo'
  import totalInfo from './totalInfo'

  const dataSet = {
    name: "김모모",
    cycle: "1회전",
    nowAge: "3일령",
    total: "1회전",
    house: [{
      age: '3일령',
      date: '2018.03.21',
      insert: '12345수',
      none: ''
    }]
  }

  const dialogTitle = {
    'houseJournal': '동별일지 보기',
    'houseInfo': '동별사육 현황 보기',
    'totalInfo': '전체사육 현황 보기',
  }

  export default {
    name: 'breeding',
    components: {
      houseJournal,
      houseInfo,
      totalInfo
    },
    data() {
      return {
        dataSet: dataSet,
        search: '',
        pagination: {},
        selected: [],
        headers: [{
          text: 'No.',
          width: '2%',
          value: 'number',
          sortable: false
        }, {
          text: '아이디',
          value: 'id',
          sortable: false
        }, {
          text: '대표자명',
          value: 'name',
          sortable: false
        }, {
          text: '총분양수수',
          width: '15%',
          value: 'total',
          sortable: false
        }, {
          text: '상태',
          width: '10%',
          value: 'status',
          sortable: false
        }, {
          text: '일령',
          width: '10%',
          value: 'day',
          sortable: false
        }, {
          text: '동별일지',
          width: '12%',
          value: 'journal',
          sortable: false
        }, {
          text: '동별사육 현황',
          width: '12%',
          value: 'houseInfo',
          sortable: false
        }, {
          text: '전체사육 현황',
          width: '12%',
          value: 'totalInfo',
          sortable: false
        }],
        items: [{
            number: '1',
            id: 'test@naver.com',
            name: '김아무',
            total: '200',
            status: '입추',
            day: '21일령',
            journal: '일지id',
            houseInfo: '동별사육현황id',
            totalInfo: '전체사육현황id'
          },
          {
            number: '2',
            id: 'test@naver.com',
            name: '김아무',
            total: '200',
            status: '입추',
            day: '10일령',
            journal: '일지id',
            houseInfo: '동별사육현황id',
            totalInfo: '전체사육현황id'
          }
        ]
      }
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
      }
    },
    computed: {
      dialog() {
        return store.state.dialog
      },
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  }

</script>
