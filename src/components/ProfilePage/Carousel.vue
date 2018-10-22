<template>
    <div class="portfolio-main">
      <h2>Portfolio</h2>
      <Carousel class="catousel-pos">
        <div class="carousel-portfolio">
          <img v-lazy="images[0]" alt="item">
        </div>
        <div class="carousel-portfolio">
          <img v-lazy="images[1]" alt="item">
        </div>
        <div class="carousel-portfolio">
          <img v-lazy="images[2]" alt="item">
        </div>
        <div class="carousel-portfolio">
          <img v-lazy="images[3]" alt="item">
        </div>
        <div class="carousel-portfolio">
          <img v-lazy="images[4]" alt="item">
        </div>
      </Carousel>
      <div class="portfolio-items">
        <div class="portfolio-item" v-for="image in images">
          <img v-lazy="image" alt="item">
        </div>
        <div class="btnCustom">

          <Button btnText="VRAAG DEZE SPECIALIST AAN"
                  btnClass="btnOrangeNav">
          </Button>
          <Button btnText="VERGELIJK MET ANDERE SPECIALIST"
                  btnClass="btnOrangeNav">
          </Button>
        </div>
      </div>

    </div>
</template>

<script>
  import Carousel from '../CaruselSpecialists';
  import Button from '../Button';

    export default {
      data() {
        return {
          images: [
            require('../../assets/profile/portfolio_images1.png'),
            require('../../assets/profile/portfolio_images2.png'),
            require('../../assets/profile/portfolio_images3.png'),
            require('../../assets/profile/portfolio_images1.png'),
            require('../../assets/profile/portfolio_images3.png'),
            require('../../assets/profile/portfolio_images2.png'),
            require('../../assets/profile/portfolio_images3.png'),
          ],
          isLoad: false,
        }
      },
      methods: {
      },
      components: {
        Carousel,
        Button
      },
    }
</script>

<style scoped lang="scss">
  h2 {
    font-family: GolanoSemi;
    color: #00c8d7;
    font-size: 50px;
    font-weight: 400;
    line-height: 35px;
    padding-left: 2%;
  }
  .portfolio-main {
    padding-left: 9%;
    margin-top: 4%;
    width: 100%
  }
  .carousel-portfolio {
    margin-top: 10%;
    margin-left: 2%;
    img {
      width: 95%;
    }
  }

  .slick-slider {
    display: flex;
    align-items: center;
    margin-left: -4%;

  }
  .portfolio-items {
    display: none;
  }
  @media screen and (max-width: 720px){
    h2{
      text-align: center;
    }
    .portfolio-main {
      margin-top: 10%;
      width: 90%;
    }
  }

  @media screen and (max-width: 520px){
    .portfolio-main {
      width: 100%;
      padding: 0;
      h2{
        margin: 10% 0;
        text-align: center;
        font-size: 2.5rem;
      }
    }
    .catousel-pos {
      display: none;
    }
    .portfolio-items {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    .portfolio-item {
      width: 100%;
      margin-bottom: 5%;
      img {
        width: 100%;
      }
    }
    .btnCustom {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      button {
        width: 90%;
        font-size: 1.1rem;
        margin: 3% auto;
      }
    }
  }
  @media screen and (max-width: 440px){
    .btnCustom button{
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 320px){
    .portfolio-main {
      padding: 0;
      margin-left: 2%;
      width: 100%;
    }
    .portfolio-item {
      width: 96%;
    }
    .btnCustom button {
      width: 93%;
      font-size: 13px;
      margin-bottom: 5%;
      padding: 5% 0;
    }
  }
</style>
