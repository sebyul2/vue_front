<template>
  <main>
    <!-- Page container -->
    <div class="page-container">

      <!-- Page content -->
      <div class="page-content">

        <!-- Main sidebar -->
        <div class="sidebar sidebar-main sidebar-default">
          <div class="sidebar-content">

            <!-- Main navigation -->
            <div class="sidebar-category sidebar-category-visible">
              <div class="category-title h6">
                <span>Main navigation</span>
                <ul class="icons-list">
                  <li>
                    <a href="#" data-action="collapse"></a>
                  </li>
                </ul>
              </div>

              <div class="category-content sidebar-user">
                <div class="media">
                  <a href="#" class="media-left">
                    <img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt="">
                  </a>
                  <div class="media-body">
                    <span class="media-heading text-semibold">테스터</span>
                  </div>

                  <div class="media-right media-middle">
                    <ul class="icons-list">
                      <li>
                        <a href="#">
                          <i class="icon-cog3"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="category-content no-padding">
                <ul class="navigation navigation-main navigation-accordion">

                  <!-- Main -->
                  <li class="active">
                    <a href="/#/main">
                      <i class="icon-home4"></i>
                      <span>농가회원 관리</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/main">
                      <i class="icon-stack2"></i>
                      <span>일지 관리</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/main">
                      <i class="icon-copy"></i>
                      <span>오늘의 유익정보 관리</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/quote">
                      <i class="icon-droplet2"></i>
                      <span>오늘의 시세 관리</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/main">
                      <i class="icon-newspaper"></i>
                      <span>게시판 관리</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/main">
                      <i class="icon-user-tie"></i>
                      <span>구인장터 관리</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/main">
                      <i class="icon-book"></i>
                      <span>광고 등록</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/main">
                      <i class="icon-book"></i>
                      <span>이벤트 등록</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#/main">
                      <i class="icon-stats-bars"></i>
                      <span>통계</span>
                    </a>
                  </li>
                  <!-- /main -->

                </ul>
              </div>
            </div>
            <!-- /main navigation -->

          </div>
        </div>
        <!-- /main sidebar -->


        <!-- Main content -->
        <div class="content-wrapper">


          <div class="panel panel-flat">
            <div class="panel-heading">
              <h6 class="panel-title text-bold">오늘의 시세 관리</h6>
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
              <div class="row">
                <div class="col-md-12">


                  <div class="table-responsive">
                    <table class="table .table-borderless table-xxs">
                      <tbody>
                        <tr>
                          <td style="background-color: #f1f1f1;" colspan="2" class="col-lg-4">병아리</td>
                          <td ><input name="datepicker" type="text" placeholder="입력 가능" class="form-control"></td>
                        </tr>
                        <tr>
                          <td style="background-color: #f1f1f1;" rowspan="3">닭</td>
                          <td style="background-color: #f1f1f1;">소</td>
                          <td><input name="datepicker" type="text" placeholder="입력 가능" class="form-control"></td>
                        </tr>
                        <tr>
                          <td style="background-color: #f1f1f1;">중</td>
                          <td><input name="datepicker" type="text" placeholder="입력 가능" class="form-control"></td>
                        </tr>
                        <tr>
                          <td style="background-color: #f1f1f1;">대</td>
                          <td><input name="datepicker" type="text" placeholder="입력 가능" class="form-control"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                </div>
              </div>

            </div>
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
  export default {
    name: 'quote'
  }

</script>
<style>
  .table td {
    border: 3px solid white;
    padding: 6px;
  } 
</style>