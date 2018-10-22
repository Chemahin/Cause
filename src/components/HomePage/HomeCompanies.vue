<template>
    <div class="main">
        <div class="first">
            <h2>
                Websites, Webshops en
                Online marketing, maar
                dan wel met resultaat!
            </h2>
            <hr>
        </div>
        <div class="middle">
            <p>Wij zijn een duurzaam communicatiebureau
                gefocust op resultaatgerichte online marketing
                oplossingen voor MKB bedrijven.</p>
            <b-container fluid class="companies">
                <b-row class="companies-items">
                    <b-col md="2" sm="4" cols="12" v-for="n in 10" :key="n +Math.random()">
                        <img v-lazy="sourceImages(n)"
                             :alt="'portfolio intem №'+n">
                    </b-col>
                </b-row>
            </b-container>
            <div class="hideButton">
                <Button
                        btnText="BEKIJK MEER WERK"
                        btnClass="btnWhite"></Button>
            </div>
            <h2 class="headerTwo">
                Ontmoet onze
                specialisten
            </h2>
            <hr>
        </div>
    </div>
</template>
<script>
    import Button from '../Button';
    export default {
        components:{
            Button
        },
        methods:{
            sourceImages(n){
                return require(`../../assets/portfolio-item${n}.png`)
            }
        }
    }

</script>
<style scoped lang="scss">
    .hideButton{
        text-align: center;
        margin-top: 5%;
        button{
            border-radius: 5px;
            font-size: 3vw;
            padding: 2% 3%;
        }
        display: none;
    }
    .main{
        margin-bottom: 5%;
    }
    h2{
        word-break: break-word  ;
        color: #00c8d7;
        font-family: GolanoSemi;
        font-size: 3.82vw;
        font-weight: 400;
        width: 50%;
        letter-spacing: -2px;
    }
    .first{
        margin-left: 10%;
    }
    hr{
        margin:29px 0 29px 0;
        width: 5.5%;
        height: 0.5vw;
        background-color: #00c8d7;
    }
    .middle{
        background-image: url("../../assets/bigArrow.png");
        background-repeat: no-repeat;
        background-size: contain;
        padding-left: 10%;
    }

    p{
        margin-top: 1%;
        padding: 2% 0 0 2.7%;
        width: 43%;
        color: #969696;
        font-family: GolanoRegular;
        font-size: 1.535vw;
        font-weight: 400;
        line-height: 1.6;
        letter-spacing: -0.9px;
    }
    .col-md-2{
        padding: 0px;
        flex-grow: 0;
        margin: 0px 0px 20px 15px;
    }
    .companies{
        padding-top: 4%;
        padding-right: 2%;
    }
    img{
        width: 275px;
        max-width: 100%;
    }
    h2.headerTwo{
        margin-top: 5.5%;
    }
    @media screen and (max-width: 767px){
      .first {
        margin: 0;
      }
      .main {
        padding-left: 11%;
        padding-right: 12%;
      }

      h2{
        font-size: 4rem;
        width: 100%;
        text-align: center;
      }
      .row{
          margin: 0px;
      }
      hr{
          width: 10%;
          font-size: 1vw;
      }
      .middle{
          background: white;
      }
      p{
        margin: 0;
        text-align: center;
          font-size: 2rem;
          width: 100%;
      }
      .col-6{
          text-align: center;
          margin: 0px;
          padding: 0px 0px 20px 15px;
          &:nth-child(n+5){
              display: none;
          }
        }
        .middle{
            padding-left: 0px;
          width: 100%;
        }
        .headerTwo{
            font-size: 6vw;
        }
        .headerTwo,hr{
            margin-left: 8%;
        }
        .hideButton{
            display: block;
        }
      .hideButton button {
        width: 60%;
        font-size: 1.2rem;
      }
      .companies-items {
        display: flex;
        justify-content: center;
      }
    }
    @media screen and (max-width: 555px){
      .hideButton button {
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 485px){
      .hideButton button {
        width: 80%;
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 414px) {
      h2 {
        font-size: 2.7rem;
      }
      p {
        font-size: 1.7rem;
      }
      hr {
        margin-left: 1%;
        width: 14%;
        height: 0.5vw;
        max-height: 100%;
      }
      .hideButton button {
        width: 100%;
        font-size: 1rem;
        padding: 3% 0;
      }
    }

    @media screen and (max-width: 320px){
      .companies {
        padding: 0;
        margin-left: -6px;
      }
      .hideButton button {
        padding: 5% 0;
        width: 96%;
        font-size: 4.2vw;
      }
      .first{
        h2 {
          font-size: 9.5vw;
        }
      }
      .middle{
        h2 {
          width: 100%;
          font-size: 9.5vw;
        }
        p {
          font-size: 6.5vw;
        }
      }

    }
</style>
