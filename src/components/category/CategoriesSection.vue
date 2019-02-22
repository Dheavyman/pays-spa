<template>
  <div>
    <ul v-if="categories" class="collapsible z-depth-0">
      <li v-for="category in categories" :key="category.id">
        <div class="collapsible-header">
          {{category.name}}<i class="material-icons">chevron_right</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoriesSection',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
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
