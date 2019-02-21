<template>
  <!-- <div class="slider">
    <ul class="slides">
      <li>
        <img src="https://lorempixel.com/580/250/nature/1">
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/2">
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/3">
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/4">
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div> -->
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
