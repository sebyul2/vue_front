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
        <div class="content-wrapper">

          <!-- Main charts -->
          <div class="row">

            <div class="col-lg-12">

              <!-- Line chart with regions -->
              <div class="panel panel-flat">
                <div class="panel-heading">
                  <!-- <h6 class="panel-title text-semibold">2017년10월1일~2017년10월11일</h6> -->
                  <div class="heading-elements">
                    <ul class="icons-list">
                      <li>
                        <a data-action="collapse"></a>
                      </li>
                      <li>
                        <a data-action="reload"></a>
                      </li>
                      <!-- <li><a data-action="close"></a></li> -->
                    </ul>
                  </div>
                </div>

                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="panel panel-flat">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-md-6">
                              <span class="pull-left">신규회원</span>
                            </div>
                            <div class="col-md-6">
                              <span class="pull-right font-weight-bold">
                                <strong>100개</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="panel panel-flat">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-md-6">
                              <span class="pull-left">전체회원</span>
                            </div>
                            <div class="col-md-6">
                              <span class="pull-right">
                                <strong>10개</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form class="form-horizontal">
                    <div class="row mb-15">
                      <span class="col-md-12 text-left font-weight-bold">
                        <strong>기간별 조회 (최대 31일)</strong>
                      </span>
                    </div>
                    <div class="row mb-15">
                      <label class="col-md-1 control-label text-left">
                        <strong>기간
                          <strong>
                      </label>
                      <div class="col-md-3">
                        <input name="datepicker" type="text" placeholder="시작 날짜" class="form-control">
                      </div>
                      <div class="col-md-3">
                        <input name="datepicker" type="text" placeholder="종료 날짜" class="form-control">
                      </div>
                      <div class="col-md-1">
                        <button type="button" class="btn btn-primary">조회</button>
                      </div>
                    </div>
                  </form>

                  <div class="row">
                    <div class="chart-container">
                      <div class="chart" id="c3-line-regions-chart"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- /main charts -->
        </div>
        <!-- /main content -->

      </div>
      <!-- /page content -->

    </div>
    <!-- /page container -->
  </main>
</template>
<script>

  import $ from 'jquery'
  import * as d3 from 'd3';
  import * as c3 from 'c3';
  import 'bootstrap-datepicker'

  import store from '../store'
  import SliderComponent from '../components/slider'

  export default {
    name: 'main',
    mounted() {

      $('input[name="datepicker"]').datepicker({
        autoclose: true,
        todayHighlight: true
      }).datepicker('update', new Date());
      // Generate chart
      var chart_line_regions = c3.generate({
        bindto: '#c3-line-regions-chart',
        size: {
          height: 300
        },
        data: {
          x: 'x',
          //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
          columns: [
            ['x', '2013-10-01', '2013-10-02', '2013-10-03', '2013-10-04', '2013-10-05', '2013-10-06',
              '2013-10-07', '2013-10-08', '2013-10-09', '2013-10-10'
            ],
            ['농가회원', 30, 200, 100, 400, 250, 250, 50, 300, 150, 500],
          ]
        },
        legend: {
          show: false
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%m-%d'
            }
          }
        },
        grid: {
          y: {
            show: true
          }
        }
      });
    },
    components: {
      SliderComponent
    }
  }

</script>
