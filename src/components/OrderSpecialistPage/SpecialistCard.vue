<template>
    <div>
      <div class="order-left">
        <span class="form-close"><img v-lazy="mysrc1" alt="close" @click="closeForm"></span>
        <div class="left-up">
          <div class="up-left">
            <img v-lazy="mysrc2" alt="photo">
          </div>
          <div class="up-right">
            <div class="wrap-item">
              <div class="name-first">
                <p>Lionel</p>
              </div>
              <div class="name-last">
                <p><span>€30,- </span> per uur</p>
              </div>
            </div>
            <div class="specialty">
              <p>Grafisch vormgever</p>
              <div class="rating-stars">
                <img v-lazy="mysrc3" alt="">
                <img v-lazy="mysrc3" alt="">
                <img v-lazy="mysrc3" alt="">
                <img v-lazy="mysrc3" alt="">
                <img v-lazy="mysrc3" alt="">
              </div>
            </div>
            <hr>
            <div class="wrap-item availability">
              <div class="availability-first">
                <p><span>Beschikbaar</span> 30 uur p/w</p>
              </div>
              <div class="availability-last">
                <p> <span>Rating</span>  8/10</p>
              </div>
            </div>
            <div class="point-items">
              <div class="point">MA</div>
              <div class="point">DI</div>
              <div class="point">WO</div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mysrc1:require(`../../assets/icons/close.png`),
                mysrc2:require(`../../assets/profile/photo2.png`),
                mysrc3:require(`../../assets/icons/star-active.png`),
            }
        },
      methods: {
        closeForm() {
          this.$emit('closed-form');
        },
      }
    }
</script>

<style scoped lang="scss">
  .order-left {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding-bottom: 2%;
    position: relative;
  }
  .left-up {
    width: 100%;
    display: flex;
  }
  .up-left {
    width: 29%;
    text-align: center;
    padding-top: 3%;
  }
  .up-right {
    width: 67%;
    hr {
      height: 2px;
      background-color: #d7d7d7;
      width: 97%;
      margin-top: 4%;
      margin-left: -1%;
    }
  }
  .wrap-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .name-first {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-top: 10%;
    p {
      font-family: GolanoSemi;
      font-size: 2.2vw;
      font-weight: 600;
      margin-bottom: 0;
      width: 25%;
      line-height: 35px;
    }
  }
  .name-last {
    width: 45%;
    display: flex;
    justify-content: flex-end;
    p{
      font-size: 25px;
      line-height: 35px;
      color: #646464;
      margin-bottom: 0;
      span {
        color: #00c7d6;
        font-family: GolanoSemi;
        font-weight: 600;
      }
    }
  }
  .specialty{
    display: flex;
    justify-content: space-between;
    width: 100%;
    p{
      font-size: 27px;
      line-height: 20px;
      color: #646464;
      margin-top: 1px;
      margin-bottom: 0;
    }
  }
  .rating-stars {
    width: 23%;
    img {
      width: 15%;
    }
  }
  .availability {
    margin-top: 5%;
  }

  .availability-first {
    display: flex;
    width: 70%;
    p {
      font-size: 24px;
      line-height: 35px;
      color: #646464;
      margin-top: 1px;
      margin-bottom: 0;
      width: 100%;
    }
    span {
      font-family: GolanoSemi;
      margin-right: 5%;

    }
  }
  .point {
    width: 60px;
    height: 60px;
    background-color: #2ad0e1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-right: 2%;
    font-size: 21px;
    line-height: 41.85px;
    text-transform: uppercase;
  }
  .availability-last {
    width: 30%;
    padding-left: 5%;

    p {
      font-size: 24px;
      line-height: 35px;
      color: #646464;
      margin-top: 1px;
      margin-bottom: 0;
      margin-left: 10%;
    }
    span {
      font-family: GolanoSemi;
    }
  }
  .point-items {
    display: flex;
    justify-content: center;
    width: 83%;
    margin-top: 2%;
  }
  hr {
    height: 2px;
    background-color: #d7d7d7;
    width: 93%;
    margin-top: 3%;
  }
  .form-close{
    position: absolute;
    right: 25px;
    top: 25px;;
    img {
      cursor: pointer;
    }
  }
  @media screen  and (max-width: 1410px){
    .left-up {
      flex-direction: column;
      justify-content: center;
    }
    .up-left {
      width: 100%;
    }
    .up-right {
      width: 100%;
      padding: 2% 5%;
      hr {
        width: 100%;
        margin-left: 0;
      }
    }
    .point-items {
      width: 100%;
    }
  }
  @media screen  and (max-width: 800px){
    .name-first p {
      font-size: 2rem;
    }
    .availability-first {
      width: 60%;
    }
    .availability-last {
      width: 35%;
      padding: 0;
      display: flex;
      justify-content: flex-end;
    }
  }
  @media screen  and (max-width: 520px){
    .name-last {
      display: none;
    }
    .name-first {
      width: 100%;
      justify-content: center;
    }
    .specialty {
      flex-direction: column;
      text-align: center;
    }
    .rating-stars {
      width: 100%;
      img {
        width: 10%;
      }
    }
    .availability {
      flex-direction: column;
      text-align: center;
    }
    .availability-first {
      width: 100%;
    }
    .availability-last {
      width: 100%;
      justify-content: center;
      p {
        margin: 0;
      }
    }
  }
</style>
