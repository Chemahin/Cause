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
      <div>
        <VueTimepicker></VueTimepicker>
      </div>
    </div>
</template>

<script>
  //import VueTimepicker from 'vue2-timepicker'


  export default {
      components: {
       
      },

      data() {
        return {
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
    height: 100vh;
  }

  .popover-container {
    width: 100%;
    display: flex;
    margin-top: 5%;
  }
  .ayou-day-cell.ayou-in-range {
    background-color: orange;
  }


</style>
