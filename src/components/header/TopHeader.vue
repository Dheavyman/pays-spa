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
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
};
</script>

<style lang="scss" scoped>
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
@media only screen and (max-width: 768px) {
  .top-nav {
    padding: 0 35px;
  }
}
</style>
