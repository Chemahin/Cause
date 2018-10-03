<template>
    <div class="direct-main">
      <div class="direct-items">
        <h2>Voor hoeveel uur per dag wilt u een specialist inhuren?</h2>
        <div class="hour-items">
          <div class="hour-item"
               v-for="(item, index) in hoursList"
               @click="getVal(index)"
               :class="{'active-hour': count===index}"
               >
            <p >{{item.val}} uur</p>
          </div>
        </div>
      </div>
      <hr>
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
          hoursList: [
            {val: 2},
            {val: 4},
            {val: 6},
            {val: 8},
          ],
          count: 0,
        }
      },
      methods: {
        getVal(index) {
          console.log(this.hoursList[index].val);
          this.count = index;
        },
        getStartTime(pos){
            if(pos === 'start'){
            let h = this.timeStart.getHours();
            let m = this.timeStart.getMinutes();
            let tt = String(h) +':' + String(m) ;
            console.log('---------------start------------', tt)
          }
          else {
              let h = this.timeEnd.getHours();
              let m = this.timeEnd.getMinutes();
              let tt = String(h) +':' + String(m) ;
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
  .direct-items {
    padding: 0 5%;
  }
  .hour-items {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 8%;
  }
  .hour-item {
    padding: 2% 4% 1px 3%;
    border: 3px solid transparent;
    margin-right: 5%;
    cursor: pointer;
  }
  p {
    color: #646464;
    font-family: GolanoRegular;
    font-size: 30px;
    font-weight: 400;
  }
  .active-hour {
    border-radius: 10px;
    border: 3px solid #ff8400;
    p {
      font-family: GolanoSemi;
    }

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
  .time-group {
    width: 50%;
    display: flex;
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
    .hour-item {
      padding: 3% 2% 1px 1%;
    }
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
    .time-item {
      padding: 0;
    }
    .time-group {
      width: 40%;
    }
  }
  @media screen  and (max-width: 960px){
    p {
      font-size: 1.5rem;
    }
  }
  @media screen  and (max-width: 460px){
    .hour-item {
      text-align: center;
      padding: 2%;
    }
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
