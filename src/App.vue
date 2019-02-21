<template>
  <div id="app">
    <main>
      <HomePage />
    </main>
  </div>
</template>

<script>
import HomePage from './components/home/HomePage.vue';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
