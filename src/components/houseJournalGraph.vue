<template>
  <main>
    <!-- Page container -->
    <div class="page-container">

      <!-- Page content -->
      <div class="page-content">

        <!-- Main sidebar -->
        <slider-component></slider-component>
        <!-- /main sidebar -->

        <!-- Main content -->
        <div class="panel panel-default">
          <div class="panel-heading">
            <h5 class="panel-title">그래프 보기
              <a class="heading-elements-toggle">
                <i class="icon-more"></i>
              </a>
            </h5>
            <div class="heading-elements">
              <ul class="icons-list">
                <li>
                  <a data-action="collapse"></a>
                </li>
                <li>
                  <a data-action="reload"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="panel-body">
            <b-tabs class="mt-4">
              <b-row>
                <b-col col="3">
                  <b-form-select v-model="selected" :options="options" class="mb-3" style="height:auto;">
                  </b-form-select>
                </b-col>
              </b-row>
              <b-tab title="1동" active>
                <div class="text-right row">
                  <b-col>
                    <button type="button" class="btn btn-primary">동별 현황 보기</button>
                  </b-col>
                </div>
                <div class="chart"></div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
        <!-- /main content -->

      </div>
      <!-- /page content -->

    </div>
    <!-- /page container -->
  </main>
</template>
<script>
  import SliderComponent from '../components/slider'
  import d3 from 'd3'
  import c3 from 'c3'
  import core from '../plugin/core'

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
    components: {
      SliderComponent
    },
    mounted() {
      this.$nextTick(() => {
        core()
        this.generateChart()
      })
    },
    methods: {
      generateChart: () => {
        // alert('asdf')
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
