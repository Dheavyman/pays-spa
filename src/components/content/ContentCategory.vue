<template>
  <div class="explore-content col s12">
    <div class="z-depth-1">
      <h6 class="content-header valign-wrapper">{{header}}</h6>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col s12 m6 l3">
          <CategoryCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue';

export default {
  name: 'ContentCategory',
  props: {
    header: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    CategoryCard,
  },
};
</script>

<style lang="scss" scoped>
.explore-content {
  margin-bottom: 25px;
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
