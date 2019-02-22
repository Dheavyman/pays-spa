<template>
  <div class="container">
    <div class="row">
      <div class="about col s12 m4 l3 left-align">
        <h5>PAYSMOSMO</h5>
        <p>Help give out inventory loans to cooperative members with ease.</p>
      </div>
      <div class="col s12 m8 l9">
        <div class="row">
          <div class="contact col s6 m6 l3 left-align">
            <h6>Contact</h6>
            <ul>
              <li>Registration</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="help col s6 m6 l3 left-align">
            <h6>Help</h6>
            <ul>
              <li>Privacy Policy</li>
              <li>How it works</li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>
          <div class="stay-connected col s6 m6 l3 left-align">
            <h6>Stay Connected</h6>
            <div>
              <span><img src="../../assets/iconfinder_facebook_circle_black_107153.png"></span>
              <span><img src="../../assets/iconfinder_twitter_circle_black_107155.png"></span>
              <span><img src="../../assets/iconfinder_instagram_circle_black_107150.png"></span>
            </div>
          </div>
          <div class="back-to-top col s6 m6 l3 left-align">
            <h6 class="valign-wrapper">
              Back to top <i class="material-icons">keyboard_arrow_up</i>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  padding-top: 60px !important;
}
.about {
  h5 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 0 !important;
  }
  p {
    font-size: 14px;
    font-weight: 450;
    line-height: 1.25;
    margin-top: 30px;
    margin-bottom: 25px;
  }
}
.contact, .help, .stay-connected, .back-to-top {
  h6 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 0;
  }
  ul {
    margin-top: 35px;
    margin-bottom: 25px;
  }
  div {
    margin-top: 35px;
  }
  li {
    font-size: 15px;
    font-weight: 450;
    margin-bottom: 15px
  }
  span {
    margin-right: 12px;
  }
  img {
    height: auto;
    width: 35px;
  }
}
.back-to-top i {
  line-height: 0;
  padding-left: 5px;
}
@media only screen and (max-width: 768px) {
  .contact, .help, .stay-connected, .back-to-top {
    h6 {
      font-size: 16px;
    }
    li {
      font-size: 13px;
      font-weight: 450;
      margin-bottom: 15px
    }
    span {
      margin-right: 5px;
    }
  }
}
</style>
