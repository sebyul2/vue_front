<template>
  <table class="table table-lg table-bordered">
    <thead>
      <tr>
        <th></th>
        <th>
          Extra small devices
          <span class="text-muted display-block text-regular">Phones (&lt;768px)</span>
        </th>
        <th>
          Small devices
          <span class="text-muted display-block text-regular">Tablets (≥769px)</span>
        </th>
        <th>
          Medium devices
          <span class="text-muted display-block text-regular">Desktops (≥1025px)</span>
        </th>
        <th>
          Large devices
          <span class="text-muted display-block text-regular">Desktops (≥1200px)</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap">Grid behavior</th>
        <td>Horizontal at all times</td>
        <td colspan="3">Collapsed to start, horizontal above breakpoints</td>
      </tr>
      <tr>
        <th class="bg-orange-300 text-nowrap">Container width</th>
        <td>None (auto)</td>
        <td class="bg-orange-300">769px</td>
        <td>1025px</td>
        <td>1200px</td>
      </tr>
      <tr>
        <th class="text-nowrap">Class prefix</th>
        <td>
          <code>.col-xs-</code>
        </td>
        <td>
          <code>.col-sm-</code>
        </td>
        <td>
          <code>.col-md-</code>
        </td>
        <td>
          <code>.col-lg-</code>
        </td>
      </tr>
      <tr>
        <th class="text-nowrap"># of columns</th>
        <td colspan="4" class="text-center">12</td>
      </tr>
      <tr>
        <th class="text-nowrap">Column width</th>
        <td class="text-muted">Auto</td>
        <td>~62px</td>
        <td>~81px</td>
        <td>~97px</td>
      </tr>
      <tr>
        <th class="text-nowrap">Gutter width</th>
        <td colspan="4">20px (10px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-nowrap">Nestable</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap">Offsets</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap">Column ordering</th>
        <td colspan="4">Yes</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'test'
  }

</script>
<style>


</style>
