<template>
  <div class="header row valign-wrapper">
    <div class="col s12 m6 l2">
      <img src="../../assets/paysmosmo-logo.png" alt="">
    </div>
    <div class="search col s12 m9 l7">
      <div class="nav-wrapper hide-on-med-and-down">
        <div class="input-field">
          <input
            id="search"
            placeholder="Search for products"
            type="search"
            required
          />
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        </div>
        <button class="search-btn">SEARCH</button>
      </div>
    </div>
    <div class="nav-links col s3">
      <ul id="nav-mobile" class="hide-on-med-and-down">
        <li class="center-align">
          <a href="sass.html">
            <i class="material-icons">shopping_cart</i>
            <span>Cart</span>
          </a>
        </li>
        <li class="center-align">
          <a href="badges.html">
            <i class="material-icons">favorite</i>
            <span>Wishlist</span>
          </a>
        </li>
        <li class="center-align">
          <a href="collapsible.html">
            <i class="material-icons">notifications_none</i>
            <span>Notifications</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
};
</script>

<style lang='scss' scoped>
.header {
  margin: 0 5%;
  margin-top: 5px;
}
nav {
  background-color: #FEFEFE;
  height: inherit;
}
.nav-links ul {
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 40px;
  width: 100%;
  li {
    background: #fafafa;
    display: block;
    flex: 0 1 auto;
    list-style-type: none;
  }
  a {
    color: #000000;
  }
  i {
    font-size: 25px;
  }
  span {
    display: block;
    font-size: 10px;
    margin: 0;
  }
}
.search {
  background-color: #eeeeee;
}
input[type="search"] {
  background-color: #eeeeee;
  height: 18px !important; /* or height of nav */
}
.search-btn {
  background-color: #fdd835;
  color: #fafafa;
  font-size: 15px;
  font-weight: 600;
  height: 45px;
  position: absolute;
  right: 396px;
  top: 70px;
  width: 120px
}
</style>
