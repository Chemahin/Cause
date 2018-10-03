<template>
  <div class="direct-main">
    <div class="calendar-part">
      <h2>Voor hoeveel dagen wilt u een specialist inhuren?</h2>
    </div>
    <hr>
    <div class="time-items">
      <div class="time-group">
        <p class="time-text" @click="getStartTime('start')">Begintijd</p>
        <div class="time-selected">
          <TimePicker class="time-item" v-model="timeStart" :show-meridian="false"></TimePicker>
        </div>
      </div>
      <div class="time-group">
        <p class="time-text" @click="getStartTime('end')">Eindtijd</p>
        <div class="time-selected">
          <TimePicker class="time-item" v-model="timeEnd" :show-meridian="false"></TimePicker>
        </div>
      </div>


    </div>
    <hr>
    <div class="footer">

      <Button
        btnText="BEVESTIG"
        btnClass="btnOrangeNav"
        stylesImg="width:35px">
      </Button>

      <Button
        btnText="BEKIJK PROFIEL"
        btnClass="btnWhite"
        stylesImg="width:35px">
      </Button>
    </div>
  </div>
</template>

<script>
  import Button from '../Button';

  export default {
    components: {
      Button
    },

    data() {
      return {
        timeStart: new Date(),
        timeEnd: new Date(),

      }
    },
    methods: {

      getStartTime(pos){
        if(pos === 'start'){
          let mi = this.timeStart.getHours();
          let se = this.timeStart.getMinutes();
          let tt = String(mi) +':' + String(se) ;
          console.log('---------------start------------', tt)
        }
        else {
          let mi = this.timeEnd.getHours();
          let se = this.timeEnd.getMinutes();
          let tt = String(mi) +':' + String(se) ;
          console.log('---------------end------------', tt)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  h2 {
    color: #646464;
    font-family: GolanoSemi;
    font-size: 34px;
    font-weight: 400;
  }
  .direct-main {
    width: 100%;
    margin-top: 7%;
  }

  p {
    color: #646464;
    font-family: GolanoRegular;
    font-size: 30px;
    font-weight: 400;
  }

  hr {
    height: 2px;
    background-color: #d7d7d7;
    width: 93%;
    margin-top: 3%;
  }
  .calendar-part {
    margin-top: 7%;
    padding-left: 9%;
    margin-bottom: 62%;
  }

  .popover-container {
    width: 100%;
    display: flex;
    margin-top: 5%;
  }

  .time-group {
    width: 50%;
    display: flex;
  }
  .time-items {
    display: flex;
    margin: 7% 0;
    padding: 0 20%;
    width: 100%;
  }
  .time-item {
    border-radius: 10px;
    border: 2px solid #d7d7d7;
    padding: 4px 10px;
  }
  .time-selected {
    margin-right: 10%;
  }
  .time-text {
    margin-right: 4%;
  }
  .footer {
    width: 100%;
    margin-top: 4%;
    display: flex;
    justify-content: center;
    button{
      font-size: 1.2rem;
      width: 30%;
      padding: 2% 0;
      margin-right: 4%;
    }
  }
  @media screen  and (max-width: 1630px){
    .time-items {
      padding: 0;
      justify-content: center;
    }
    .time-group {
      width: 30%;
      margin-right: 2%;
    }
  }
  @media screen  and (max-width: 1500px){
    .time-items {
      padding: 0;
      justify-content: space-around;
    }
  }
  @media screen  and (max-width: 1260px){
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
    .footer button {
      font-size: 1rem;
      width: 40%;
    }
  }
  @media screen  and (max-width: 1100px){
    .time-group {
      width: 40%;
    }
    .time-item {
      padding: 0;
    }
  }
  @media screen  and (max-width: 960px){
    p {
      font-size: 1.5rem;
    }
  }
  @media screen  and (max-width: 460px){
    h2 {
      font-size: 1.7rem;
    }
    .time-group {
      flex-direction: column;
    }
    .footer {
      flex-direction: column;
      align-items: center;
      button {
        width: 70%;
        margin-bottom: 3%;
        font-size: 1.3rem;
      }
    }
  }

</style>
