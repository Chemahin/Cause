<template>
    <div class="leftHome">
        <h2>
            On demand communicatie specialisten
        </h2>
        <hr>
        <p>Wat kunnen onze specialisten voor jou
            betekenen? Behaal jouw communicatie-
            doelstellingen met de on demand
            specialisten van Causeffect.</p>
        <div class="btnCustom">
          <router-link to="/profile">
            <Button btnText="VRAAG EEN SPECIALIST ANN"
                    btnClass="btnOrangeNav">
            </Button>
          </router-link>
        </div>
        <div class="btnCustom">
          <router-link to="/specialist">
            <Button btnText="MELD JE AAN ALS SPECIALIST"
                    btnClass="btnWhite">
            </Button>
          </router-link>
        </div>
    </div>
</template>
<script>
    import Button from '../Button';
    export default {
        components:{
            Button
        }
    }
</script>
<style scoped lang="scss">
    .leftHome{
        margin-top: 23%;
    }
    h2{
        word-break: break-word;
        font-size: 3.5vw;
        font-weight: 400;
        letter-spacing: 2px;
        line-height: 1;
        color: #00c8d7;
        margin-bottom: 8%;
        font-family:GolanoSemi ;
    }
    hr{
        margin-left: 1%;
        width: 14%;
        height: 0.5vw;
        max-height: 100%;
        background-color: #00c8d7;
    }
    p{
        padding: 7% 0 0 8%;
        color: #969696;
        font-size: 1.5vw;
        font-weight: 400;
        line-height: 1.69;
        font-family:GolanoRegular ;
        margin-bottom: 9%;
        letter-spacing: -0.5px;
    }
    .btnCustom{
        margin: 4% 0;
        button{
            width: 451px;
            font-size: 1.24vw;
            padding: 3% 5%;
        }
    }
    @media screen and (max-width: 1405px){
      .leftHome {
        margin-top: 10%;
        width: 100%;
      }
      h2 {
        margin: 0;
      }
      p {
        padding: 0;
        margin: 0;
      }
      .btnCustom {
        margin: 2%;
        width: 100%;
      }
      .btnCustom {
        button{
          padding: 1.5%;
          width: 60%;
        }
      }
    }
    @media screen and (max-width: 767px){
      .leftHome {
        text-align: center;
      }
      h2{
        text-align: center;
        font-size: 4rem;
      }
      p{
        font-size: 2rem;
        text-align: center;
      }
      .btnCustom button{
        border-radius: 5px;
        padding: 3% 0;
        width: 60%;
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 414px){
      h2{
        font-size: 2.7rem;
      }
      p{
        font-size: 1.7rem;
      }
      .btnCustom {
        margin-top: 20px;
      }
      .btnCustom button {
        width: 100%;
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 320px){

      h2{
        font-size: 9.5vw;
      }
      p{
        font-size: 6.5vw;
        margin-bottom: 10%;
      }
      .btnCustom button{
        padding: 5% 0;
        width: 96%;
        font-size: 4.2vw;
        margin-bottom: 3%;
      }
    }
</style>
