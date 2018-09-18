<template>
  <div>
    <ContactHeader></ContactHeader>
    <div class="address-item">
      <h2>Zanddwarsstraat 12, Amsterdam</h2>
      <hr>
    </div>
    <div class="map-item">
      <img src="../../assets/icons/map.png" alt="map">
    </div>


  </div>
</template>
<script>


  import ContactHeader from './ContactHeader';


  export default {
    components: {
      ContactHeader,

    },
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    },
    mounted() {
      this.scrollToTop();
    },

  }
</script>
<style scoped lang="scss">
  h2{
    word-break: break-word;
    margin-left: 15px;
    letter-spacing: -4px;
    color: #00c8d7;
    font-family: GolanoSemi;
    font-size: 70px;
    font-weight: 400;
    line-height: 90px;
    margin-bottom: 30px;
    letter-spacing: 1px;
  }
  hr{
    width: 5.4%;
    height: 10px;
    margin-top: 40px;
    margin-left: 34px;
    background-color: #00c8d7;
  }
  .address-item {
    padding: 10% 0 0 10%;

  }
  .map-item {
    height: auto;
    margin-top: 85px;
    padding-left: 12%;
    padding-bottom: 130px;
    background-image: url("../../assets/bigArrow.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: -5px;
    img {
      width: 95%;
    }
  }


</style>
