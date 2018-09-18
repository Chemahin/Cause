<template>
    <div class="portfolio-main">
      <h2>Portfolio</h2>
      <Carousel>
        <div class="carousel-portfolio">
          <img :src="images[0]" alt="lala">
        </div>
        <div class="carousel-portfolio">
          <img :src="images[1]" alt="lala">
        </div>
        <div class="carousel-portfolio">
          <img :src="images[2]" alt="lala">
        </div>
        <div class="carousel-portfolio">
          <img :src="images[3]" alt="lala">
        </div>
        <div class="carousel-portfolio">
          <img :src="images[4]" alt="lala">
        </div>


      </Carousel>
    </div>
</template>

<script>
  import Carousel from '../CaruselSpecialists';

    export default {
      data() {
        return {
          url: "",
          index: 0,
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
        Carousel
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
  }

  .slick-slider {
    display: flex;
    align-items: center;
    margin-left: -4%;

  }

</style>
