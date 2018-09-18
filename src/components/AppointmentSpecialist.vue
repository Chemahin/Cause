<template>
  <div class="wrapp">
    <span class="form-close"><img src="../assets/icons/close.png" alt="close"></span>
    <div class="img">
      <img
        :src="require(`../assets/profile/${img}`)"
        alt="first">
    </div>
    <div class="confirmation">
      <h2>Uw afspraak met <span>{{ name }}</span> is bevestigd!</h2>
      <p>U ontvangt een bevestiging via de e-mail.</p>
    </div>
    <hr>
    <div class="information-item">
      <img src="../assets/object_1.png" alt="image">
      <h2>Maak kennis met je specialist</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor inci didunt ut labore et dolore.</p>
    </div>
    <div class="information-item">
      <img src="../assets/object_2.png" alt="image">
      <h2>Vertel je specialist over je verwachtingen</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor inci didunt ut labore et dolore.</p>
    </div>
    <div class="information-item">
      <img src="../assets/object_3.png" alt="image">
      <h2>De voorbereiding op de samenwerking</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor inci didunt ut labore et dolore.</p>
    </div>

    <hr class="lastHr">

    <div class="gratitude">
      <h2>Bedankt voor de getoonde interesse!</h2>
    </div>
    <div class="btn">
      <Button
        btnText="MAAK ACCOUNT AAN"
        btnClass="btnOrangeNav"
        stylesImg="width:15px"></Button>
    </div>


  </div>
</template>
<script>
  import Button from './Button';
  export default {
    props: ['name', 'img', 'specialistText', 'orderText', 'cooperationText'],
    components: {
      Button,
    }
  }
</script>
<style scoped lang="scss">
  .wrapp {
    background: white;
    width: 55%;
    text-align: center;
    padding-top: 2%;
    position: relative;

  }
  .confirmation {
    margin-top: 3%;
    margin-bottom: 3%;
    color: #646464;
    h2 {
      font-size: 40px;
      font-weight: 400;
      line-height: 50px;
      font-family: GolanoRegular;
      margin: 0;
    }
    span {
      font-family: GolanoSemi;
      font-size: 40px;
      font-weight: 600;
      line-height: 50px;
    }
    p {
      font-family: GolanoRegular;
      font-size: 25px;
      font-weight: 400;
    }
  }
  hr {
    width: 90%;
    height: 2px;
    background-color: #d7d7d7;
  }
  .information-item {
    margin-top: 9%;
    h2 {
      margin-top: 4%;
      color: #646464;
      font-family: GolanoSemi;
      font-size: 40px;
      font-weight: 400;
      line-height: 42.29px;
    }
    p {
      color: #969696;
      font-family: GolanoRegular;
      font-size: 25px;
      font-weight: 400;
      line-height: 51.69px;
      margin: 3% 14% -8px 14%;
    }
  }
  .lastHr {
    margin-top: 9%;
  }
  .gratitude {
    margin-top: 4%;
    h2 {
      color: #00c7d6;
      font-family: GolanoSemi;
      font-size: 40px;
      font-weight: 400;
      line-height: 50px;
    }
  }
  .btn {
    width: 100%;
    margin-top: 3%;
    margin-bottom: 7%;
    button {
      width: 42%;
      font-size: 24px;
      font-weight: 400;
      line-height: 60.72px;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 8px;
      img {
        width: 7%;
      }
    }
  }
  .form-close{
    position: absolute;
    right: 25px;
    top: 25px;;
    img {
      cursor: pointer;
    }
  }


</style>
