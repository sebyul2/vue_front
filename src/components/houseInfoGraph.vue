<template>
  <v-container>
    <div class="chart"></div>
  </v-container>
</template>
<script>
  import c3 from 'c3'
  import '../../node_modules/c3/c3.css'

  let chart
  let dataSet = {
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
    
  }

  export default {
    name: 'houseJournalGrpah',
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: '도태' },
          { value: 'a', text: '폐사' },
          { value: 'b', text: '온도' },
          { value: 'c', text: '습도' },
          { value: 'd', text: '누적음수량'},
          { value: 'e', text: '체중'},
          { value: 'f', text: '일 사료 섭취량'},
          { value: 'g', text: '누적 사료 섭취량'},
          { value: 'h', text: '육성율'},
          { value: 'i', text: '사료 요구율'},
        ],
        chart: chart
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.generateChart()
      })
    },
    methods: {
      generateChart: () => {
        chart = c3.generate(dataSet)
      },
      returnPage: () => {
        this.$router.push({
          path: 'house-journal'
        })
      }
    }
  }

</script>
<style>


</style>
