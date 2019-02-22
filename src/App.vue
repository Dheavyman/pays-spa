<template>
  <div id="app">
    <header>
      <TopHeader />
      <HeaderSection />
    </header>
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
import TopHeader from './components/header/TopHeader.vue';
import HeaderSection from './components/header/HeaderSection.vue';
import HomePage from './components/home/HomePage.vue';
import FooterSection from './components/footer/FooterSection.vue';

export default {
  name: 'app',
  components: {
    TopHeader,
    HeaderSection,
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
header {
  margin-bottom: 50px;
}
.footer {
  background-color: #424242;
  color: #bdbdbd;
  min-height: 250px;
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
