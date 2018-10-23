<template>
  <div class="main-companies">
    <div class="first">
      <h2>
        Voor wie kan <br> ik gaan werken
      </h2>
      <hr>
    </div>
    <div class="middle">
      <p>Wij zijn een duurzaam communicatiebureau
        gefocust op resultaatgerichte online marketing
        oplossingen voor MKB bedrijven.</p>
      <b-container fluid class="companies">
        <b-row>
          <b-col lg="3" md="4" sm="6" cols="12" v-for="n in 10" :key="n +Math.random()">
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

  .main-companies{
    margin-bottom: 5%;
    margin-top: 6%;
    margin-left: 1%;
  }
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

  h2{
    word-break: break-word  ;
    color: #00c8d7;
    font-family: GolanoSemi;
    font-size: 3.82vw;
    font-weight: 400;
    width: 50%;
    letter-spacing: -2px;
    margin-bottom: 3%;
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

    padding-left: 10%;
  }

  p{
    margin-top: 1%;
    padding: 2% 0 0 2.7%;
    width: 43%;
    color: #969696;
    font-family: GolanoRegular;
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.9px;
  }
  .col-md-2{
    padding: 0px;
    flex-grow: 0;
    margin: 0px 8px 20px 15px;
  }
  .companies{
    padding-top: 4%;
    padding-right: 2%;
  }
  img{
    width: 100%;
    margin-bottom: 5%;
  }
  @media screen and (max-width: 991px){
    .main-companies {
      margin-left: 0;
    }
    .middle {
      padding-left: 0;
    }
    p {
      margin: 0;
      width: 100%;
      padding-left: 10%;
    }
  }
  @media screen and (max-width: 767px){
    .first h2{
      font-size: 2.5rem;
      width: 100%;
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
      padding-left: 15%;
      font-size: 2rem;
      width: 90%;
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
    }

    .hideButton{
      display: block;
    }
  }
  @media screen and (max-width: 530px) {
    .main-companies {
      margin-left: 0;
    }
    .first {
      margin-left: 0;
      text-align: center;
      hr {
        width: 100%;
      }
    }
    p {
      width: 100%;
      padding: 0;
      text-align: center;
      line-height: 1.5;
      font-size: 1.5rem;
    }
    .hideButton button {
      width: 90%;
      font-size: 1.4rem;
    }

  }
  @media screen and (max-width: 320px) {
    .first h2 {
      width: 100%;
      font-size: 2.5rem;
    }
  }
</style>
