<template>
  <div class="container-fluid">
    <div class="top-nav row valign-wrapper">
      <ul class="col s12 m5 l3 offset-m7 offset-l9">
        <li class="how-it-works">How it works</li>
        <li>Log In</li>
        <li class="h-line"></li>
        <li>Sign Up</li>
      </ul>
    </div>
    <div class="main">
      <div class="row">
        <HeaderSection />
      </div>
      <div class="row">
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
  </div>
</template>

<script>
import HeaderSection from '../header/HeaderSection.vue';
import CategoriesSection from '../category/CategoriesSection.vue';
import SliderSection from './SliderSection.vue';
import ContentCategories from '../content/ContentCategories.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderSection,
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
.top-nav {
  border-bottom:5px solid #eeeeee;
  height: 50px;
  padding: 0 80px;
}
.top-nav ul {
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .how-it-works {
    width: 150px;
  }

  li {
    background: #fafafa;
    display: block;
    flex: 0 1 auto;
    font-weight: 700px;
    list-style-type: none;
  }

  .h-line {
    border-left: 2px solid #9e9e9e;
  }
}
@media screen {
  
}
</style>
