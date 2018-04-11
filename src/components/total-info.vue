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
            <h5 class="panel-title">전체사육현황 보기
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
            <table class="table table-bordered table-framed table-striped table-xs">
              <tbody>
                <tr>
                  <td class="col-md-2 col-xs-4 col-sm-4">대표자명</td>
                  <td class="">{{dataSet.name}}</td>
                </tr>
                <tr>
                  <td class="col-md-2 col-xs-4 col-sm-4">회전</td>
                  <td class="">{{dataSet.cycle}}</td>
                </tr>
                <tr>
                  <td class="col-md-2 col-xs-4 col-sm-4">현재 일령</td>
                  <td class="">{{dataSet.nowDate}}</td>
                </tr>
                <tr>
                  <td class="col-md-2 col-xs-4 col-sm-4">총 분양 수수</td>
                  <td class="">{{dataSet.total}}</td>
                </tr>
              </tbody>
            </table>
            <b-tabs class="mt-4">
              <b-tab title="1차입추" active>
                <table class="table table-bordered table-framed table-striped table-xs">
                  <tbody>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">일령</td>
                      <td class="">{{dataSet.house[0].age}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">날짜</td>
                      <td class="">{{dataSet.house[0].date}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">1동 입추 수수</td>
                      <td class="">{{dataSet.house[0].insert}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">도태</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">폐사</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">현재수수</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">일 용수량</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">사료 입고량</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">일 사료 섭취량</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">누적 사료량</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">체중</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">온도</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                    <tr>
                      <td class="col-md-2 col-xs-4 col-sm-4">습도</td>
                      <td class="">{{dataSet.house[0].none}}</td>
                    </tr>
                  </tbody>
                </table>        
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
  import core from '../plugin/core'

  const dataSet = {
    name: "김모모",
    cycle: "1회전",
    nowAge: "3일령",
    total: "1회전",
    house: [
      {
        age: '3일령',
        date: '2018.03.21',
        insert: '12345수',
        none: ''
      }
    ]
  }

  export default {
    name: 'journal',
    data() {
      return {
        dataSet: dataSet
      }
    },
    components: {
      SliderComponent
    },
    mounted() {
      this.$nextTick(() => {
        core()
      })
    }
  }

</script>
<style>
  /* .table td {
    border: 3px solid white;
    padding: 6px;
  } */

</style>
