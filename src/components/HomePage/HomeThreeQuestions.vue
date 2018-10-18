<template>
    <b-container fluid class="mBottmMainBlock">
        <b-row class="wrapper">
            <b-col md="6">
                <img v-lazy="mysrc1" alt="blue background" class="blueBackground">
            </b-col>
            <b-col class="qItems" md="6">
                <div class="qItem">
                    <img v-lazy="mysrc2" alt="plus"  class="backgroundPLus white">
                  <img v-lazy="mysrc3" alt="plus"  class="backgroundPLus color">
                    <p class="m-0">Wie zijn wij?</p>
                </div>
                <div class="qItem">
                    <img v-lazy="mysrc2" alt="plus"  class="backgroundPLus white">
                  <img v-lazy="mysrc3" alt="plus"  class="backgroundPLus color">
                    <p class="m-0">Hoe werken wij?</p>
                </div>
                <div class="qItem">
                    <img v-lazy="mysrc2" alt="plus" class="backgroundPLus white">
                  <img v-lazy="mysrc3" alt="plus"  class="backgroundPLus color">

                    <p class="m-0">Wat kunnen wij?</p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        data(){
            return {
                mysrc1:require(`../../assets/video-background.png`),
                mysrc2:require(`../../assets/icons/plus.png`),
                mysrc3:require(`../../assets/icons/plusColor.png`),
            }
        },

    }
</script>
<style scoped lang="scss">
    .backgroundPLus{
        cursor:pointer;
        margin-right: 7%;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .qItem{
        margin: 3% 0 4% 0;
        display: flex;
        align-items: center;
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
</style>
