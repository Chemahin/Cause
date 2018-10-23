<template>
  <div>
    <div class="wrappHead">
      <div class="fon-filter">
              <NavigationMenu
                itemColor="itemMenuWhite"
                borderItem="borderItemWhite"
                searchItem="searchWhite"
                logoColor="logoWhite"
                burgerColor="color-white">
              </NavigationMenu>
          <div class="content">
            <h2>Communicatie specialisten</h2>
            <hr>
            <p>Veel communicatieadvies is gericht op de korte termijn. Ja, je scoort snel,
              maar word je er uiteindelijk beter van? Nee. Daarom doen wij het anders.
              Bij ons staat jouw succes op de lange termijn voorop. Ons communicatie-
              advies is niet gericht op het binnenhalen van zo veel mogelijk leads in een
              zo kort mogelijke tijd. Causeffect wil samen met jou bouwen aan duurzame
              relaties met klanten. Want duurzame communicatie is op de lange termijn
              het meest winstgevend. Zeker voor mkb-bedrijven, die hun klanten toch al
              beter kennen dan grote ondernemingen. Koppel jouw kennis van jouw markt
              aan onze communicatiekennis. Dan maken we er samen een succes van.</p>
          </div>

      </div>
    </div>
    <div class="posts">
      <div class="post-left">
        <div class="post-item pos-right empty"></div>
        <div class="post-item pos-right">
          <span>2016</span>
          <h2>De vorderingen</h2>
          <p class="pos-text-left">Veel communicatieadvies is gericht op de korte termijn. Ja, je scoort snel, maar word je er uiteindelijk beter van? Nee. Daarom doen wij het anders. Bij ons staat jouw succes op de lange termijn voorop.</p>
        </div>
      </div>
      <div class="middle-img">
        <img v-lazy="mysrc1" alt="slice">
      </div>
      <div class="right-post">
        <div class="post-item">
          <span>2015</span>
          <h2>Start van Causeffect</h2>
          <p class="pos-text-right">Veel communicatieadvies is gericht op de korte termijn. Ja, je scoort snel, maar word je er uiteindelijk beter van? Nee. Daarom doen wij het anders. Bij ons staat jouw succes op de lange termijn voorop.</p>
        </div>
        <div class="post-item empty"></div>
        <div class="post-item">
          <span>2017</span>
          <h2>Waar staan wij nu</h2>
          <p class="pos-text-right">Veel communicatieadvies is gericht op de korte termijn. Ja, je scoort snel, maar word je er uiteindelijk beter van? Nee. Daarom doen wij het anders. Bij ons staat jouw succes op de lange termijn voorop.</p>

        </div>

      </div>

    </div>
    <div class="mobile-posts">
      <div class="post-item">
        <span>2015</span>
        <h2>Start van Causeffect</h2>
        <p>Veel communicatieadvies is gericht op de korte termijn. Ja, je scoort snel, maar word je er uiteindelijk beter van? Nee. Daarom doen wij het anders. Bij ons staat jouw succes op de lange termijn voorop.</p>
      </div>
      <div class="post-item">
        <span>2016</span>
        <h2>De vorderingen</h2>
        <p>Veel communicatieadvies is gericht op de korte termijn. Ja, je scoort snel, maar word je er uiteindelijk beter van? Nee. Daarom doen wij het anders. Bij ons staat jouw succes op de lange termijn voorop.</p>
      </div>
      <div class="post-item">
        <span>2017</span>
        <h2>Waar staan wij nu</h2>
        <p>Veel communicatieadvies is gericht op de korte termijn. Ja, je scoort snel, maar word je er uiteindelijk beter van? Nee. Daarom doen wij het anders. Bij ons staat jouw succes op de lange termijn voorop.</p>

      </div>
    </div>
    <OnsWerkTeam></OnsWerkTeam>
  </div>
</template>

<script>
  import NavigationMenu from '../NavigationMenu';
  import OnsWerkTeam from './OnsVerhaalTeam';

    export default {
        data(){
            return {
                mysrc1:require(`../../assets/icons/slice.png`),
            }
        },
      components: {
        NavigationMenu,
        OnsWerkTeam
      },
    }
</script>

<style scoped lang="scss">

  .mobile-posts {
    display: none;
  }
  .container-fluid {
    padding: 0;
  }
  .wrappHead{
    height: 1216px;
    background: url("../../assets/contact_up_bg.png");
  }
  .fon-filter {
    height: 1216px;
    padding: 2% 9%;
    background: #19cddac4;
    .navbar {
      padding: 0 15px;
    }
  }
  .content {
    margin-top: 16%;
    margin-left: 1%;
    h2{
      color: #ffffff;
      font-family: GolanoSemi;
      font-size: 3.5vw;
      font-weight: 400;
      line-height: 70px;

    }
    hr{
      width: 5.9%;
      height: 10px;
      margin-top: 40px;
      margin-left: 7px;
      background-color: #ffffff;
    }
    p{
      color: #ffffff;
      font-family: GolanoRegular;
      font-size: 35px;
      font-weight: 400;
      line-height: 48px;
      margin-top: 62px;
      margin-left: 50px;
      margin-right: 20%;
      letter-spacing: 0.6px;
    }
  }
  .posts {
    display: flex;
    margin-top: 8.3%;
  }
  .post-left {
    width: 50.7%;
  }
  .middle-img {
    width: 5%;
    margin-right: 2%;
  }
  .right-post {
    width: 45%;
  }
  .pos-right {
    text-align: right;
    padding-right: 35px;
  }
  .post-item {
    padding-top: 8px;
    padding-left: 10px;
    height: 438px;
    span {
      color: #646464;
      font-family: GolanoRegular;
      font-size: 30px;
      font-weight: 400;
      line-height: 60px;
    }
    h2 {
      margin-top: -10px;
      color: #646464;
      font-family: GolanoSemi;
      font-size: 40px;
      font-weight: 400;
      line-height: 60px;
    }
    p {
      color: #646464;
      font-family: GolanoRegular;
      font-size: 24px;
      font-weight: 400;
      line-height: 48px;
      margin-top: 25px;

    }
    .pos-text-right {
      padding-right: 15%;
    }
    .pos-text-left {
      padding-left: 22%;
    }
  }

  @media screen  and (max-width: 1536px){
    .content p {
      margin-right: 0;

    }
  }
  @media screen  and (max-width: 1150px){
    .wrappHead {
      height: auto;
      background-position: center;
      background-repeat: no-repeat;
    }
    .fon-filter {
      height: auto;
    }
    .wrapp {
      background-position: 0 23px;
    }
    .content {
      margin-top: 8%;
      p {
        margin-right: 0;
        margin-left: 0;
        font-size: 30px;
        line-height: 40px;
      }
    }
    .post-item h2{
      font-size: 30px;
    }
    .post-item p {
      font-size: 20px;
      line-height: 40px;
    }
  }
  @media screen  and (max-width: 991px){
    .fon-filter{
      padding: 2% 7.4%;
    }
    .content {
    margin-left: 2%;
      p {
        font-size: 1.5rem;
      }
      hr {
        height: 0.5vw;
      }
    }
  }
  @media screen  and (max-width: 840px){
    .post-item p {
      margin: 0;
      line-height: 30px;
    }
    .content hr {
      margin-left: 1%;
      width: 8%;
      height: 0.5vw;
      max-height: 100%;
    }
  }

  @media screen  and (max-width: 770px){
    .content h2 {
      font-size: 50px;
      line-height: 50px;
    }
    .middle-img {
      margin-right: 5%;
    }
    .fon-filter {
      padding: 2% 7.1%;
    }
  }
  @media screen  and (max-width: 767px){
    .content h2 {
      text-align: center;
      font-size: 4rem;
      margin-top: 10%;
    }
    .content p {
      margin-top: 0;
      font-size: 2rem;
      text-align: center;
    }
    .content hr {
      margin-left: 1%;
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 13.6%;
      height: 0.5vw;
      max-height: 100%;
    }
  }
  @media screen  and (max-width: 670px){
    .content h2 {
      font-size: 3rem;
    }
    .content p {
      font-size: 1.5rem;
    }
    .fon-filter {
      padding: 2% 7%;
    }

    .middle-img, .empty, .posts {
      display: none;
    }
    .mobile-posts {
      display: flex;
      flex-direction: column;
    }
    .post-item {
      height: auto;
      padding: 2% 3%;
      h2 {
        font-size: 25px;
        line-height: 40px;
      }
      span, h2 {
        display: inherit;
        text-align: center;
      }
    }
  }

  @media screen  and (max-width: 540px) {
    .fon-filter{
      padding: 2% 6.3%;
    }
  }
  @media screen  and (max-width: 450px) {
    .content h2 {
      font-size: 2.5rem;
    }
    .content p {
      font-size: 1.2rem;
    }
  }
  @media screen  and (max-width: 440px){
    .fon-filter {
      padding: 2% 6%;
    }
  }
  @media screen  and (max-width: 360px) {
    .content h2 {
      font-size: 2rem;
    }
    .content p {
      font-size: 1rem;
    }
  }
  @media screen  and (max-width: 320px){
    wrappHead {
      padding: 2%;
    }
    .fon-filter {
      padding: 2% 2.1%;
    }
    .content h2 {
      line-height: 1;
    }

    .container-fluid {
      padding-right: 0;
    }
  }

</style>
