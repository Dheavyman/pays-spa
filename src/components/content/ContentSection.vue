<template>
  <div class="col s12">
    <div class="explore-content z-depth-1">
      <h6 class="content-header valign-wrapper">EXPLORE POPULAR CATEGORIES</h6>
      <div class="row">
        <div class="col s12 m6 l3">
          <CategoryCard />
        </div>
        <div class="col s12 m6 l3">
          <CategoryCard />
        </div>
        <div class="col s12 m6 l3">
          <CategoryCard />
        </div>
        <div class="col s12 m6 l3">
          <CategoryCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue';

export default {
  name: 'ContentSection',
  components: {
    CategoryCard,
  },
};
</script>

<style lang="scss" scoped>
.explore-content {
  .content-header {
    border-bottom: 1px solid #e0e0e0;
    color: #757575;
    font-size: 14px;
    font-weight:600;
    height: 65px;
    padding-left: 15px;
  }
}
</style>
