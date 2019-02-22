<template>
  <div>
    <ContentCategory :header="'EXPLORE POPULAR CATEGORIES'" :products="products" />
    <ContentCategory :header="'EXPLORE NEW STUFFS'" :products="products" />
  </div>
</template>

<script>
import ContentCategory from './ContentCategory.vue';

export default {
  name: 'ContentCategories',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContentCategory,
  },
};
</script>
