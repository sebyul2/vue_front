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
            <h5 class="panel-title">사육 현황
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
          <table class="table datatable-basic table-striped no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
            <thead>
              <tr role="row">
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
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
  import 'datatables'
  import 'select2'
  import SliderComponent from '../components/slider'

  export default {
    name: 'breeding',
    components: {
      SliderComponent
    },
    mounted() {
      const dataSet = [
        ['1', 'test@naver.com', '김아무', '200', '입추', '21일령', '일지id', '동별사육현황id', '전체사육현황id' ],
        ['2', 'test@naver.com', '김아무', '200', '입추', '10일령', '일지id', '동별사육현황id', '전체사육현황id' ]
      ]

      // Setting datatable defaults
      $.extend($.fn.dataTable.defaults, {
        autoWidth: false,
        columnDefs: [{
          orderable: false,
          width: '100px',
          targets: [5]
        }],
        dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
        language: {
          search: '<span>검색:</span> _INPUT_',
          searchPlaceholder: '',
          lengthMenu: '<span>Show:</span> _MENU_',
          paginate: {
            'first': 'First',
            'last': 'Last',
            'next': '&rarr;',
            'previous': '&larr;'
          }
        },
        drawCallback: function () {
          $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function () {
          $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        }
      });

      // Basic datatable
      $('.datatable-basic').DataTable({
        // ajax : '/ajax',
        data: dataSet,
        columns: [
            {
              title: 'No.',
              width: '2%'
            }, {
              title: '아이디'
            }, {
              title: '대표자명'
            }, {
              title: '총분양수수',
              width: '15%',
            }, {
              title: '상태',
              width: '10%'
            }, {
              title: '일령',
              width: '10%'
            }, {
              title: '동별일지',
              width: '12%'
            }, {
              title: '동별사육 현황',
              width: '12%'
            }, {
              title: '전체사육 현황',
              width: '12%'
            }

        ],
        columnDefs: [
          {
            'targets': -3,
            'render': function ( data, type, row ) {
                return '<a href="/#/house-journal">'+
                  '<span class="label label-info">동별일지 보기</span>' +
                  '</a>'
            }
          },
          {
            'targets': -2,
            'render': function ( data, type, row ) {
              return '<a href="/#/house-info">'+
                '<span class="label label-info">동별사육 현황 보기</span>' +
                '</a>'
            }
          },
          {
            'targets': -1,
            'render': function ( data, type, row ) {
              return '<a href="/#/total-info">'+
                '<span class="label label-info">전체사육 현황 보기</span>' +
                '</a>'
            }
          },
        ]
      });

    }
  }

</script>
