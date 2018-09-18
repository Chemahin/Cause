<template>
  <div class="item-wrapp">
    <div class="contact-item">
      <img src="../../assets/icons/email.png" alt="email">
      <h3>hello@causeffect.nl</h3>
    </div>
    <div class="contact-item">
      <img class="phone" src="../../assets/icons/phone.png" alt="phone">
      <h3>020 26 11 813</h3>
    </div>
    
  </div>

</template>

<script>

</script>

<style scoped lang="scss">
  .item-wrapp {
    width: 100%;
    padding-top: 35%;
    padding-left: 4%;
  }
  .contact-item {
    display: flex;
    color: #ffffff;
    font-family: GolanoRegular;
    font-size: 40px;
    font-weight: 400;
    line-height: 70px;
    margin-bottom: 35px;
    img {
      width: 7%;
      height: 25px;
      margin-right: 55px;
    }
    .phone {
      height: 30px;
    }
    h3 {
      font-size: 2.2vw;
      margin-top: -10px;
      margin-left: -10px;
    }

  }
  @media screen  and (max-width: 991px){
    .item-wrapp {
      padding-top: 10%;
    }
  }
</style>
