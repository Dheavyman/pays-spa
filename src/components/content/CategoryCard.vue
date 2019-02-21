<template>
  <div class="row">
    <div class="col s12">
      <div class="card z-depth-0">
        <div class="card-image">
          <img src="../../assets/sample-image.jpg">
        </div>
        <div class="card-content">
          <p>Lorem ipsum</p>
          <i class="marked material-icons">star</i>
          <i class="marked material-icons">star</i>
          <i class="marked material-icons">star</i>
          <i class="marked material-icons">star</i>
          <i class="unmarked material-icons">star_border</i>
          <div class="price">
            <span class="strike">&#8358;15,000.00</span>
            <span>&#8358;15,000.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
};
</script>

<style lang="scss" scoped>
.card {
  margin:40px 30px !important;
  margin-bottom: 15px !important;
}
.card-image {
  height: 270px;

  img {
    height: inherit;
  }
}
.card-content {
  padding-left: 0 !important;
  padding-right: 0 !important;

  P {
    color: #616161;
  }

  i {
    font-size: 20px;
  margin-top: 5px;
  }

  .marked {
    color: #fdd835;
  }
  .unmarked {
    color: #bdbdbd;
  }
}
.card-content .price {
  display: flex;
  justify-content: space-between;

  span {
    color: #616161;
    font-size: 13px;
  }

  .strike {
    text-decoration: line-through;
  }
}
</style>
