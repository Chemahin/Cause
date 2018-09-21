<template>
    <div class="calendar-main">
      <div class="btn-items">
        <div :class="{active: activeFirst}" @click="btnClickFirst">Direct inzetten</div>
        <div :class="{active: activeLast}" @click="btnClickLast">Proefdag aanvragen</div>
      </div>
      <hr>
      <div v-if="activeFirst" class="direct">
        <Direct></Direct>
      </div>
      <div v-if="activeLast" class="trial-day">
        <TrialDay></TrialDay>
      </div>

    </div>
</template>

<script>
  import Direct from './DirectPart';
  import TrialDay from './TrialDayPart';
    export default {
      data() {
        return {
          activeFirst: true,
          activeLast: false,
          selectedDate: {
            start: new Date(2018, 0, 9),
            end: new Date(2018, 0, 18)
          }
        }
      },
      methods: {
        btnClickFirst(){
          this.activeFirst = true;
          this.activeLast = false;
        },
        btnClickLast(){
          this.activeLast = true;
          this.activeFirst = false;
        }
      },
      components: {
        Direct,
        TrialDay
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
  .btn-items {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 8%;
    margin-top: 5%;
    div {
      border-radius: 10px;
      border: 3px solid transparent;
      color: #646464;
      font-family: GolanoRegular;
      font-size: 30px;
      font-weight: 400;
      line-height: 35.24px;
      cursor: pointer;
      padding: 2%;
      width: 35%;
      &:hover {
        color: black;
      }
    }
    .active {
      border: 3px solid #ff8400;
      font-family: GolanoSemi;
    }
    :first-child {
      margin-right: 5%;
      width: 30%;
    }

  }
  hr {
    height: 2px;
    background-color: #d7d7d7;
    width: 93%;
    margin-top: 3%;
  }




</style>
