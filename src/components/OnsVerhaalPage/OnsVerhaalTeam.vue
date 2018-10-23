<template>
    <div class="wrapp">
      <div class="title">
        <h2>Het team</h2>
        <hr>
      </div>
      <div class="images-team">
        <img v-lazy="mysrc1" alt="person">
        <img v-lazy="mysrc2" alt="person">
        <img v-lazy="mysrc3" alt="person">
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mysrc1:require(`../../assets/Layer_1.png`),
                mysrc2:require(`../../assets/Layer_2.png`),
                mysrc3:require(`../../assets/Layer_3.png`),
            }
        },
    }
</script>

<style scoped lang="scss">
  .wrapp {
    margin-top: 20px;
    background-image: url("../../assets/bigArrow.png");
    background-repeat: no-repeat;
    background-position: 0 249px;
    padding-bottom: 8%;
  }
  .title {
    margin-top: 5%;
    margin-left: 10%;
    h2 {
      color: #00c8d7;
      font-family: GolanoSemi;
      font-size: 70px;
      font-weight: 400;
      line-height: 90px;
      padding-left: 10px;
    }
    hr {
      width: 5.5%;
      height: 10px;
      margin-top: 35px;
      margin-left: 15px;
      background-color: #00c8d7;
    }
  }
  .images-team {
    margin-top: 4.7%;
    margin-left: 11%;

    img {
      margin-right: 11px;
      width: 30%;
    }
  }
  @media screen  and (max-width: 770px){
    .title{
      h2{
        font-size: 50px;
        line-height: 50px;
      }
      hr {
        height: 5px;
      }
    }
  }
  @media screen  and (max-width: 767px){
    .title{
      h2{
        text-align: center;
        font-size: 4rem;
        margin-top: 10%;
      }
      hr {
        margin-left: 1%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 13.6%;
        height: 0.5vw;
        max-height: 100%;
      }
    }
  }
  @media screen  and (max-width: 670px){
    .images-team {
      text-align: center;
      img {
        width: 50%;
        margin-bottom: 2%;
      }
    }
  }
  @media screen  and (max-width: 320px){
    .title{
      margin-left: 0;
      h2{
        font-size: 35px;
        line-height: 30px;
      }
      hr {
        margin-left: 6%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 13.6%;
        height: 0.5vw;
        max-height: 100%;
      }
    }
    .images-team {
      text-align: center;
      img {
        width: 100%;
        margin-bottom: 2%;
        margin-left: -25px;
      }
    }
  }

</style>
