<template>
  <v-carousel hide-controls height="465">
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'SliderSection',
  data() {
    return {
      items: [{
        src: 'https://lorempixel.com/580/250/nature/1',
      }, {
        src: 'https://lorempixel.com/580/250/nature/2',
      }, {
        src: 'https://lorempixel.com/580/250/nature/3',
      }, {
        src: 'https://lorempixel.com/580/250/nature/4',
      }],
    };
  },
};
</script>

<style>
.v-carousel__controls {
  background: transparent;
}
.v-carousel__controls__item {
  margin: 0 !important;
}
.v-btn--active .v-btn__content i {
  color: #ffeb3b !important;
}
</style>
