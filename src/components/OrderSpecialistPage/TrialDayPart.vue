<template>
  <div class="direct-main">
    <div class="calendar-part">
      <h2>Voor hoeveel dagen wilt u een specialist inhuren?</h2>
    </div>
    <hr>
    <div class="time-items">
      <p class="time-text" @click="getStartTime('start')">Begintijd</p>
      <div class="time-selected">
        <TimePicker class="time-item" v-model="timeStart" :show-meridian="false"></TimePicker>
      </div>
      <p class="time-text" @click="getStartTime('end')">Eindtijd</p>
      <div class="time-selected">
        <TimePicker class="time-item" v-model="timeEnd" :show-meridian="false"></TimePicker>
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
    margin-left: 21%;
    display: flex;
    button{
      font-size: 24px;
      width: 27%;
      padding: 2% 0;
      margin-right: 4%;
    }
  }

</style>
