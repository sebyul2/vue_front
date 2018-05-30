<template>

  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-text primary-text>
            <h3 class="headline mb-0">부화장 관리</h3>
          </v-card-text>
          <v-divider></v-divider>
          <v-data-table v-model="selected" :headers="headers" :items="items" select-all :pagination.sync="pagination" item-key="name"
            class="elevation-1">
            <template slot="headers" slot-scope="props">
              <tr>
                <th width='5%'>
                  <v-checkbox primary hide-details @click.native="toggleAll" :input-value="props.all" :indeterminate="props.indeterminate"></v-checkbox>
                </th>
                <th width='5%' :class="['column sortable', pagination.descending ? 'desc' : 'asc', props.headers[0].value === pagination.sortBy ? 'active' : '']"
                  @click="changeSort(props.headers[0].value)" class="text-xs-left">
                  <v-icon small>arrow_upward</v-icon>
                  {{ props.headers[0].text }}
                </th>
                <th width='80%' :class="['column sortable', pagination.descending ? 'desc' : 'asc', props.headers[1].value === pagination.sortBy ? 'active' : '']"
                  @click="changeSort(props.headers[1].value)" class="text-xs-left">
                  <v-icon small>arrow_upward</v-icon>
                  {{ props.headers[1].text }}
                </th>
                <th width='10%'>
                  삭제
                </th>
              </tr>
            </template>
            <template slot="items" slot-scope="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox primary hide-details :input-value="props.selected"></v-checkbox>
                </td>
                <td width=5% class="text-xs-left">{{ props.item.number }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="justify-center layout px-0">
                  <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data: () => ({
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [{
          text: 'No',
          align: 'left',
          value: 'name'
        },
        {
          text: '부화장 이름',
          align: 'left',
          value: 'name'
        }
      ],
      items: [{
          value: false,
          number: '1',
          name: '예산 부화장 1',
        },
        {
          value: false,
          number: '2',
          name: '예산 부화장 2'
        }
      ]
    }),

    methods: {
      toggleAll() {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      },
      changeSort(column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }

</script>
