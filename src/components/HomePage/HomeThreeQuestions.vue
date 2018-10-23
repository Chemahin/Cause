<template>
    <b-container fluid class="mBottmMainBlock">
        <b-row class="wrapper">
            <b-col md="6" class="blueBackground">
              <iframe src="https://player.vimeo.com/video/261350725" width="100%" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            </b-col>
            <b-col class="qItems" md="6">
                <div @click="onClick1()" class="qItem">
                    <img v-lazy="mysrc2" alt="plus"  class="backgroundPLus white">
                  <img v-lazy="mysrc3" alt="plus"  class="backgroundPLus color">
                    <p class="m-0">Wie zijn wij?</p>

                </div>
              <p :class="[clicked1?'clicked-item':'no-clicked-item']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quae?</p>
                <div @click="onClick2()" class="qItem">
                    <img v-lazy="mysrc2" alt="plus"  class="backgroundPLus white">
                  <img v-lazy="mysrc3" alt="plus"  class="backgroundPLus color">
                    <p class="m-0">Hoe werken wij?</p>

                </div>
              <p :class="[clicked2?'clicked-item':'no-clicked-item']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quae?</p>
                <div @click="onClick3()" class="qItem">
                    <img v-lazy="mysrc2" alt="plus" class="backgroundPLus white">
                  <img v-lazy="mysrc3" alt="plus"  class="backgroundPLus color">

                    <p class="m-0">Wat kunnen wij?</p>

                </div>
              <p :class="[clicked3?'clicked-item':'no-clicked-item']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quae?</p>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        data(){
            return {
              clicked1: false,
              clicked2: false,
              clicked3: false,
                mysrc1:require(`../../assets/video-background.png`),
                mysrc2:require(`../../assets/icons/plus.png`),
                mysrc3:require(`../../assets/icons/plusColor.png`),
            }
        },
      methods: {
        onClick1(){
          this.clicked1 = !this.clicked1;
        },
        onClick2(){
          this.clicked2 = !this.clicked2;
        },
        onClick3(){
          this.clicked3 = !this.clicked3;
        },
      }

    }
</script>
<style scoped lang="scss">
  .no-clicked-item {
    display: none;
  }
   .clicked-item{
      display: block;
      font-family: GolanoRegular;
      font-size: 1.2rem;
      margin-left: 24%;
  }
    .backgroundPLus{
        cursor:pointer;
        margin-right: 15%;
        max-width: 8%;
    }
    .blueBackground{
        height: 100%;
        width:92%;
    }
    .wrapper{
        margin-top: 11.5%;
        padding: 0 4%;
    }
    .qItems{
        padding-left: 0px;
        position: relative;
        left: -10%;
      margin-top: 5%;
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
    }
    .qItem{
        margin: 3% 0 4% 0;
        display: flex;
        align-items: center;
      cursor: pointer;
    }
    p{
        color: #646464;
        font-family: GolanoSemi;
        font-size: 2.6vw;
        font-weight: 400;
    }
    .mBottmMainBlock{
        margin-bottom: 6%;
    }
    .color {
      display: none;
    }
  @media screen and(max-width: 1500px) {
    .qItems {
      margin-top: 8%;
    }
  }
  @media screen and(max-width: 1230px) {
    iframe {
      height: 300px;
    }
    .qItems {
      margin-top: 3%;
      left: -12%;
    }
  }
  @media screen and(max-width: 1020px) {
    .qItems {
      margin-top: 5%;
    }
  }
  @media screen and(max-width: 840px) {
    .qItems {
      margin-top: 9%;
      left: -13%;
    }
    .backgroundPLus {
      margin-right: 20%;
    }
  }
    @media screen and(max-width: 767px) {
      .color {
        display: block;
      }
      .white {
        display: none;
      }
        .wrapper .col-md-6:first-child{
            text-align: center;
        }
        .qItems{
            left: 0px;
        }
        .qItem{
          margin-top: 1%;
          margin-bottom: 3%;
          margin-left: 10%;
            &:last-child{
                border-bottom: 1px solid #ababab;
            }
        }
        p{
            font-size: 7vw;
        }
    }
  @media screen and(max-width: 320px) {
    .qItem{
      margin-left: 0;
    }
    .clicked-item {
      margin-left: 0;
      font-size: 1rem;
    }
  }
</style>
