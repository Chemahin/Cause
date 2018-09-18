<template>
    <div class="input-item-wrapp">
      <input :type="inputTypeVal()" :name="inputName" :placeholder="inputPlaceholderVal()" :class="inputItemColor">
    </div>
</template>

<script>
    export default {
      // data(){
      //   return{
      //     inputVal:"",
      //   }
      // },
        props: {
          inputType: {
            type: String,
            required: true,
          },
          inputPlaceholder: {
            type: String,
          },
          inputItemColor: {
            type: String,
          },
          inputName: {
            type: String,
            required: true,
          }
        },
        methods: {
          inputTypeVal(){
            return this.inputType;
          },
          inputPlaceholderVal(){
            return this.inputPlaceholder;
          },
          getInputValue(methodName){
            this.$emit('closed-form');
          }
        }
    }
</script>

<style scoped lang="scss">
  .input-item-wrapp {
    width: 95%;
  }
  input{
    width: 100%;
    &::placeholder{
      letter-spacing:-0.5px;
     }
    font-family: GolanoRegular;
    margin-bottom: 6%;
    font-size:2vw;
    padding: 12px 19px;
    outline: none;
    background: transparent;
    border: none;
  }
  .inputWhite{
    width: 80%;
    color: white;
    border-bottom: 4px solid white;
    &::placeholder{
      color: white;
    }
  }
  .inputDark{
    color: #646464;
    border-bottom: 2px solid #b7b7b7;
    font-size: 1.7vw;
    padding: 0px 0 0 10px;
    margin-bottom: 20px;
    &::placeholder{
      color: #646464;
    }
  }

</style>
