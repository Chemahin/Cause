<template>
    <button @click="logIn" type="button" :class="btnClass">
        {{btnText}}
        <img src="../assets/icons/arrow-short.png"
             alt="arrow"
             v-if="arrow==='short'"
             :style="stylesImg!==''?stylesImg:''">
        <img src="../assets/icons/arrow-long-white.png"
             alt="arrow"
             v-else-if="btnClass==='btnOrangeNav'"
             :style="stylesImg!==''?stylesImg:''">
        <img src="../assets/icons/arrow-long-orange.png"
             alt="arrow"
             :style="stylesImg!==''?stylesImg:''"
             v-else>
    </button>
</template>
<script>
    export default {
        props:{
            btnText:'',
            arrow:'',
            btnClass:'',
            stylesImg:''
        },
      methods: {
          logIn(){
            this.$emit('click-login');
          }
      }
    }
</script>
<style scoped lang="scss">
    img{
        max-width: 100%;
        margin-left: 5px;
        display: inline;
    }
    button{
        font-size: 1vw;
        font-family: GolanoSemi;
        border-radius: 10px;
        outline:none;
        &:focus{
            box-shadow: 0 0 0 2pt #b97700;
        }
    }

    .btnOrangeNav{
        background: #ff8400;
        color: white;
        border: 3px solid #ff8400;
        padding: 13px;
        cursor: pointer;
    }
    .btnWhite{
        background: white;
        color: #ff8400;
        border: 3px solid #ff8400;
        padding: 10px;
        cursor: pointer;
    }
    .btnOrangeNav[disabled] {
      cursor: not-allowed;
      background: #ff84009c;
      border: 3px solid #ff840024;
    }
</style>
