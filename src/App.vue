<template>
  <div id="app">
    <main>
      <HomePage />
    </main>
    <footer>
      <div class="footer">
        <FooterSection />
      </div>
      <div class="copyright valign-wrapper">
        <p class="center-align">&copy; 2018 PAYSMOSMO</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HomePage from './components/home/HomePage.vue';
import FooterSection from './components/footer/FooterSection.vue';

export default {
  name: 'app',
  components: {
    HomePage,
    FooterSection,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

<style lang="scss" scoped>
.footer {
  background-color: #424242;
  color: #bdbdbd;
  height: 250px;
}
.copyright {
  background-color: #353534;
  height: 70px;
  p {
    color: #bdbdbd;
    font-size: 10px;
    margin: 0;
    padding: 0;
    width: 100%;
  }
}
</style>
