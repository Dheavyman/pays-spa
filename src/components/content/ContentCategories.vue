<template>
  <div>
    <ContentSection />
    <ContentSection />
  </div>
</template>

<script>
import ContentSection from './ContentSection.vue';

export default {
  name: 'ContentCategories',
  components: {
    ContentSection,
  },
};
</script>
