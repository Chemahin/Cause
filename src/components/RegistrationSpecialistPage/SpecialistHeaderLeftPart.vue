<template>
  <div>
    <b-card  class="card-wrapp">
      <!--<span @click="closeForm" class="form-close"><img v-lazy="mysrc1" alt="close"></span>-->
      <p class="card-text item-title">Meld je aan als specialist!</p>
      <hr>
      <div class="div-form">
        <div class="input-item-wrapp input-class">
          <input type="text" placeholder="Voor- en achternaam*" class="inputDark" v-model="contactName">
          <span class="valid-error">{{validMess.name}}</span>
        </div>
        <div class="input-item-wrapp input-class">
          <input type="email" placeholder="E-mailadres*" class="inputDark" v-model="contactEmail">
          <span class="valid-error">{{validMess.email}}</span>
        </div>
        <div class="input-item-wrapp input-class">
          <input type="text" placeholder="Telefoonnummer*" class="inputDark" v-model="contactPhone">
          <span class="valid-error">{{validMess.phone}}</span>
        </div>
        <div class="input-item-wrapp input-class">
          <input type="text" placeholder="Website" class="inputDark" v-model="contactWeb">
          <span class="valid-error">{{validMess.web}}</span>
        </div>
        <div class="upload-items">
          <div class="upload-item">
            <p>Upload CV</p>
          </div>
          <div class="upload-item portfolio">
            <p>Upload portfolio</p>
          </div>
        </div>
        <div class="checkbox-item">
          <label class="container">Ik ga akkoord met de algemene voorwaarden
            <input type="checkbox" v-model="checked" >
            <span class="checkmark"></span>
          </label>
        </div>

      </div>
      <div class="btnCustom">
        <Button btnText="AANMELDEN"
                btnClass="btnOrangeNav"
                v-on:click-login="activContactForm()"
                :disabled="((contactName && contactEmail && contactPhone && contactWeb ) === '') || !checked"></Button>
      </div>
    </b-card>

  </div>
</template>

<script>

  import Button from '../Button';

  export default {
    data(){
      return {
          mysrc1:require(`../../assets/icons/close.png`),
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          contactWeb:'',
          checked: false,
          valid: {},
          validMess: {
            name:'',
            email:'',
            phone:'',
            web:'',
          },
      }
    },


    components:{
      Button
    },
    methods: {
      closeForm() {
        this.$emit('closed-form');
      },
      activContactForm(){

        const patternEmail =/.+@.+\..+/i;
        const patternPhone = /^\d+$/;


        if(!patternEmail.test(this.contactEmail)) {
          this.validMess.email = 'error Email';
          this.contactEmail = '';

        }
        else {
          this.validMess.email = '';
          this.valid.email = '1';
        };

        if(this.contactName.length < 3) {
          this.validMess.name = 'enter your name (3+)';
          this.contactName = '';

        }
        else {
          this.validMess.name = '';
          this.valid.name = '1';
        };

        if(!patternPhone.test(this.contactPhone) || this.contactPhone.length <=5) {
          this.validMess.phone = 'must be only number(6+)';
          this.contactPhone = '';

        }
        else {
          this.validMess.phone = '';
          this.valid.phone = '1';
        };

        if(this.contactWeb.length <= 6) {
          this.validMess.web = 'enter your web site(6+)';
          this.contactWeb = '';
        }
        else {
          this.validMess.web = '';
          this.valid.web = '1';
        };

        if (Object.keys(this.valid).length === 4) {
          this.contactName = '';
          this.contactEmail = '';
          this.contactPhone = '';
          this.contactWeb ='';
          this.checked = false;
          console.log('--------SUBMIT--------');
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  /*input type="checkbox" */
  .container {
    display: block;
    position: relative;
    padding-left: 11%;
    margin-top: -13px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #646464;
    font-family: GolanoRegular;
    font-size: 25px;
    font-weight: 400;
    line-height: 60px;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 10px;
    left: 16px;
    height: 36px;
    width: 36px;
    border-radius: 5px;
    border: 2px solid #b7b7b7;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #dedede;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #ff8400;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 3px;
    width: 13px;
    height: 18px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .upload-items {
    display: flex;
    height: auto;
    width: 100%;
    margin-left: -1.5%;
  }
  .upload-item {
    border-radius: 5px;
    border: 2px solid #b7b7b7;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding-top: 6.3%;
    margin-right: 3%;
    cursor: pointer;
    p{
      color: #000000;
      font-family: GolanoRegular;
      font-size: 20px;
      font-weight: 400;
      line-height: 29.22px;
      margin: 0 10%;
      padding-bottom: 31%;
      text-align: center;
    }

  }
  .row {
    margin: 0;
  }
  .checkbox-item {
    display: flex;
    width: 100%;
    margin-left: -4%;
    margin-top: 11%;
    margin-bottom: 7%;
  }
  .valid-error {
    color: #f97e7e;
  }
  .input-item-wrapp {
    width: 95%;
  }
  .input-class {
    margin-bottom: 8%;
  }
  .inputDark{
    color: #646464;
    border-bottom: 2px solid #b7b7b7;
    font-size: 1.6rem;
    padding: 0px 0 0 10px;
    margin-bottom: 20px;
    &::placeholder{
      color: #646464;
    }
  }
  .div-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 6.5%;
    padding-left: 6%;
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
  input[type="checkbox"]{
    width: 10px;
  }
  hr {
    border-top: 2px solid #d7d7d7;
    width: 96%;
    margin-left: 20px;
    margin-bottom: 10%;
  }
  .card-wrapp{
    position: relative;
    border: 2px solid #d7d7d7;
    margin-top: 17.5%;
    width: 91%;
    margin-left: -4%;
  }
  .form-close{
    position: absolute;
    right: 20px;
    img {
      cursor: pointer;
    }
    hr {
      border-top: 2px solid #d7d7d7;
      width: 96%;
      margin-left: 20px;
      margin-bottom: 10%;
    }
  }
  .item-title{
    color: #00c8d7;
    font-family: GolanoSemi;
    font-size: 60px;
    font-weight: 400;
    line-height: 70px;
    padding: 8% 19% 7% 8%;
  }
  .input-class{
    margin-bottom: 25px;

  }
  .btnCustom{
    margin: 4% 0;
    margin-top: -5px;
    text-align: center;
    margin-bottom: 5%;

    button{
      cursor: pointer;
      width: 55%;
      font-size: 1.24vw;
      padding: 3% 5%;
      border-radius: 10px;
    }
  }
  @media screen and (max-width:1440px ){
    .card-body {
      padding: 1%;
    }
    .item-title {
      padding: 0;
      margin-top: 10%;
      margin-left: 5%;
      font-size: 3rem;
    }
    .input-class {
      margin-bottom: 8%;
    }
    .upload-item {
      width: 25%;
    }
    .container {
      padding-left: 17%;
      padding-top: 2%;
      margin-top: 0px;
      line-height: 1;
    }
  }
  @media screen and (max-width:1200px ){
    .upload-item p {
      font-size: 16px;
      line-height: 1;
    }
    .inputDark {
      font-size: 1.5rem;
    }
    .btnCustom button{
      width: 60%;
      font-size: 1.2rem;
    }
    .card-wrapp {
      margin-right: 0;
      width: 100%;
    }
  }
  @media screen  and (max-width: 991px){
    .card-wrapp {
      margin-top: 8.5%;
      width: 100%;
       margin-left: 0;
    }
    .input-class {
      margin-bottom: 3%;
    }
    .item-title {
      text-align: center;
      margin-left: 0;
    }
    .form-close {
      display: none;
    }
    .btnCustom button {
      width: 65%;
      font-size: 1.5rem;
      padding: 2% 5%;
    }
    .upload-items {
      justify-content: center;
    }
    .upload-item {
      padding-top: 4%;
    }
    .upload-item p {
      padding-bottom: 15%;
    }
  }


  @media screen  and (max-width: 767px){
    .checkbox-item {
      margin-top: 3%;
    }
    .item-title {
      font-size: 2.5rem;
    }
    .btnCustom button {
      font-size: 1.2rem;
    }

  }

  @media screen  and (max-width: 570px){
    .col-lg-6 {
      padding: 0;
    }
    .div-form {
      padding: 0;
    }
    hr {
      width: 100%;
      margin-left: 0;
    }
    .card-body {
      padding: 1% 6%;
      margin-top: 5%;
    }
    .card-wrapp {
      border: none;
    }
    .item-title {
      font-size: 2rem;
      line-height: 1;
    }
    .upload-items {
      justify-content: center;
      p {
        font-size: 1rem;
      }
    }

    .container {
      font-size: 1.3rem;
      padding-left: 20%;
    }
  }
  @media screen  and (max-width: 320px){
    .upload-item {
      width: 30%;
    }
    .btnCustom button {
      font-size: 1.3rem;
      width: 100%;
      margin-top: 10%;
    }
  }
</style>

