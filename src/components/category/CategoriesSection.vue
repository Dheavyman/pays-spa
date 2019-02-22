<template>
  <ul class="collapsible z-depth-0">
    <li>
      <div class="collapsible-header">
        Men's Wears<i class="material-icons">chevron_right</i>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        Fashion<i class="material-icons">chevron_right</i>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        Electronics<i class="material-icons">chevron_right</i>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        Kitchen<i class="material-icons">chevron_right</i>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        Bedroom Makeover<i class="material-icons">chevron_right</i>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        Makeup for Women<i class="material-icons">chevron_right</i>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        Accessories<i class="material-icons">chevron_right</i>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        Cars and Automobile<i class="material-icons">chevron_right</i>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CategoriesSection',
};
</script>

<style lang='scss' scoped>
.collapsible {
  border: 1px solid #e0e0e0;
  margin-top: 0;
}
.collapsible-header {
  display: flex;
  justify-content: space-between;
  i {
    margin-right: 0;
  }
}
</style>
