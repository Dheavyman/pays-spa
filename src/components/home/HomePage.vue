<template>
  <div class="main">
    <div class="category-carousel row">
      <div class="col s12 m4 l3">
        <div class="categories-header">
          <h6>CATEGORIES</h6>
        </div>
        <CategoriesSection />
      </div>
      <div class="col s12 m8 l9">
        <div class="row">
          <div class="col s12">
            <SliderSection />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <ContentCategories />
    </div>
  </div>
</template>

<script>
import CategoriesSection from '../category/CategoriesSection.vue';
import SliderSection from './SliderSection.vue';
import ContentCategories from '../content/ContentCategories.vue';

export default {
  name: 'HomePage',
  components: {
    CategoriesSection,
    SliderSection,
    ContentCategories,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  margin: 0 5%;
  margin-top: 5px;
}
.category-carousel {
  margin-bottom: 55px;
}
.categories-header {
  background-color: #43a047;
  color: #ffffff;
  h6 {
    font-size: 15px;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    padding: 20px 16px;
    text-transform: none;
  }
}
</style>
