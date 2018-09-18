<template>
    <div class="reviews-main">
      <div class="reviews-items">
        <h2>Reviews</h2>
        <div class="reviews-item-content">
          <span class="user-name"> John Doe</span>
          <div class="reviews-title">
            <p>Style Italy</p>
            <div class="rating-stars">
              <img src="../../assets/icons/star-active.png" alt="">
              <img src="../../assets/icons/star-active.png" alt="">
              <img src="../../assets/icons/star-active.png" alt="">
              <img src="../../assets/icons/star-active.png" alt="">
              <img src="../../assets/icons/star-active.png" alt="">
            </div>
          </div>
          <hr>
          <p class="reviews-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
            modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
        </div>
      </div>
      <div class="btn-item">
        <div class="btnCustom">

          <Button btnText="VRAAG DEZE SPECIALIST AAN"
                  btnClass="btnOrangeNav">
          </Button>
        </div>
      </div>
    </div>

</template>

<script>
  import Button from '../Button';
  export default {
    components: {
      Button
    },
  }
</script>

<style scoped lang="scss">
  .reviews-main {
    display: flex;
    padding-left: 9%;
    padding-bottom: 5%;
    width: 100%;
  }
  .reviews-items {
    margin-top: 3%;
    margin-left: 2%;
    width: 60%
  }
  h2 {
    color: #00c8d7;
    font-family: GolanoSemi;
    font-size: 50px;
    font-weight: 400;
    line-height: 35px;
  }
  p {
    color: #646464;
    font-family: GolanoRegular;
    font-size: 25px;
    font-weight: 400;
    line-height: 40px;
  }
  .user-name {
    font-family: GolanoSemi;
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    color: #646464;
  }
  .reviews-item-content {
    border: 2px solid #d7d7d7;
    background-color: #ffffff;
    padding: 3%;
    padding-bottom: 1%;
    margin-top: 4%;

  }
  .reviews-title {
    display: flex;
    justify-content: space-between;
    span {
      color: #646464;
      font-family: GolanoSemi;
      font-size: 30px;
      font-weight: 400;
      line-height: 40px;
    }
    p {
      font-size: 30px;
      line-height: 30x;

    }
  }
  .reviews-content {
    margin-top: 2.5%;
  }
  .rating-stars {
    width: 23%;
    img {
      width: 15%;
    }
  }
  .btn-item {
    margin-top: 6.4%;
    margin-left: 2%;
    width: 29%;;
  }
  .btnCustom{
    margin: 4% 0;
    button{
      width: 100%;
      font-size: 1.24vw;
      padding: 2.5% 0;
    }
  }
</style>
