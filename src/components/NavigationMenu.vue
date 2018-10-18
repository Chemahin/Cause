<template>
  <nav class="navbar navbar-expand-lg navbar-light">
      <div class="logoItem">
          <router-link to="/" class="navbar-brand">
              <img :src="getImgUrlLogo" alt="logo">
          </router-link>


          <div class="burgerMenu">

            <span class="navbar-toggler-icon" @click.prevent="burgerShow = !burgerShow"></span>
            <!--<span class="line"></span>-->

            <!--<div class="form-inline">-->
              <!--<img :src="getImgUrlSearch" alt="search" @click.prevent="showSearch = !showSearch">-->
              <!--<transition-->
                <!--name="fade">-->
                <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  v-if="showSearch">-->
              <!--</transition>-->
            <!--</div>-->


              <!--<div class="listBurger">-->
                  <!--<transition name="slide">-->
                      <!--<div class="toggle-menu" v-show="burgerShow" >-->
                          <!--<router-link to="/">Home</router-link>-->
                          <!--<router-link to="/onsVerhaal">Ons verhaal</router-link>-->
                          <!--<router-link to="/onsWerk">Ons werk</router-link>-->
                          <!--<router-link to="/contact">Contact</router-link>-->
                      <!--</div>-->
                  <!--</transition>-->
              <!--</div>-->

          </div>

      </div>


      <div class="collapse navbar-collapse navItem" id="navbarSupportedContent">
          <div class="itemMenuDark">
              <router-link to="/huurEenSpecialist"
              >
                  <Button btnText="HUUR EEN SPECIALIST"
                          btnClass="btnOrangeNav"
                          arrow="short"></Button>
              </router-link>
          </div>
          <div :class="itemColor">
              <router-link to="/" active-class>Home</router-link>
          </div>
          <div :class="itemColor">
              <router-link to="/onsVerhaal">Ons verhaal</router-link>
          </div>
          <div :class="itemColor">
              <router-link to="/onsWerk">Ons werk</router-link>
          </div>
          <div :class="itemColor">
              <router-link to="/contact">Contact</router-link>
          </div>
          <!--<div :class="['borderItemDef',borderItem]"></div>-->
          <!--<div class="form-inline">-->
              <!--<img :src="getImgUrlSearch" alt="search" @click.prevent="showSearch = !showSearch">-->
              <!--<transition-->
                      <!--name="fade">-->
                  <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  v-if="showSearch">-->
              <!--</transition>-->
          <!--</div>-->
      </div>
  </nav>

</template>
<script>
    import Button from './Button'
    export default {
        components:{
            Button
        },
        data: function () {
            return {
                burgerShow:false,
                showSearch: false,

            }
        },
        props: {
          itemColor: {
            type: String,
          },
          borderItem: {
            type: String,
          },
          searchItem: {
            type: String,
          },
          logoColor: {
            type: String,
          }
        },
        computed: {
          getImgUrlSearch() {
            return require('../assets/icons/'+ this.searchItem + '.png');
          },
          getImgUrlLogo() {
            return require('../assets/icons/'+ this.logoColor + '.png');
          }
        }
    }
</script>
<style scoped lang="scss">
  .navbar-toggler-icon {
    width: 40px;
    height: 40px;
    margin-right: 10%;
  }
  .line {
    height: 43px;
    width: 2px;
    border-right: 1px solid black;
    margin-right: 10%;
  }
    .slide-enter-active {
        transition: all .3s ease;
    }
    .slide-leave-active {
        transition: all .8s ease;
    }
    .slide-enter, .slide-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }
    .burgerMenu{
      display: none;
      width: 20%;


    }
    .listBurger{
        position: relative;
        ul{
            list-style-type: none;
            padding-left: 0px;
            position: absolute;
        }
    }
    .navbar{
        padding: 0;
        background: transparent;
        width: 100%;
    }
    .logoItem{
        width: 43%;

        img{
            max-width: 100%;
        }
    }
    .navItem{
        width:62.5%;
    }
    .borderItemDef {
      width: 20px;
      height: 30px;
    }
    .borderItemDark {
      border-left: 1px solid black;
    }
    .borderItemWhite {
      border-left: 1px solid white;
    }
    .searchDark{

    }
    .col{
        padding: 0px;
    }
    .itemMenuDark{
        margin-right: 4%;
        font-family: GolanoRegular;
        a{
            font-size: 1.2vw;
            text-decoration: none;
            color: #646464;
        }

    }
    .itemMenuWhite{
      margin-right: 4%;
      font-family: GolanoRegular;
      a{
        font-size: 1.2vw;
        text-decoration: none;
        color: white;
      }

    }
    .form-inline{
        position: relative;
      padding: 0;
    }
    img[alt="search"]{
      width: 90%;
      z-index: 10;
      cursor: pointer;
    }
    input[type="search"]{
        border-color:#ff8400;
        width: 10vw;
        margin-left: -4px;
        z-index: 9;
        padding-left: 90%;
        position: absolute;
    }
    .fade-enter-active,.fade-leave-active {
        transition: all .8s;
    }
    .fade-enter,.fade-leave-to{
        transform: translateX(50%);
        opacity: 0;
    }
    .itemMenu button{
        font-size: 0.9vw;
    }
    .router-link-exact-active {
        color: black !important;
    }

    @media screen  and (max-width: 1662px){
      .logoItem{
        width: 35%;
        img {
          width: 81%;
        }
      }
    }
    @media screen  and (max-width: 1400px){
      .logoItem{
        img {
          width: 80%;
        }
      }
      .itemMenuDark{
        a{
          font-size: 17px;
        }

      }
      .itemMenuWhite{
        a{
          font-size: 17px;
        }
      }
    }
    @media screen  and (max-width: 1345px){
      .logoItem {
        width: 33%;
        .itemMenuDark {
          margin-right: 2.5%;
        }
      }
      .itemMenuDark, .itemMenuWhite {
        margin-right: 3.5%;
      }
    }
    @media screen  and (max-width: 1260px){
      .logoItem {
        width: 33%;
        img {
          width: 80%;
        }
      }
      .itemMenuDark, .itemMenuWhite {
        margin-right: 3.5%;
      }
    }
    @media screen  and (max-width: 1200px){
      .logoItem {
        width: 30%;
        img {
          width: 75%;
        }
      }
    }
    @media screen  and (max-width: 1145px){
      .navItem {
        margin-right: -8%;
      }
    }
    @media screen  and (max-width: 1039px){
      .logoItem {
        width: 27%;
      }
      .itemMenuDark {
        margin-right: 2.5%;
      }
    }
    @media screen  and (max-width: 991px){
      .form-inline input {
        width: 15vw;
      }
      .logoItem{
          position: relative;
          margin-top: 2%;
          width: 100%;
          display: flex;
          justify-content: space-between;
      }
      .burgerMenu {
        display: flex;
      }
      .listBurger {
        z-index: 1000;
        margin-top: 20px;
      }
      .toggle-menu {
        position: absolute;
        right: 11px;
        top: 30px;
        display: flex;
        flex-direction: column;
        width: 150px;
        text-align: center;
        background: #ff8400;
        a {
          padding: 10px 5px;
          color: #ffffff;
          text-decoration: none;
        }
        a:hover {
          background: #a96721;
        }
      }
    }
  @media screen  and (max-width: 650px){
    .form-inline input {
      width: 22vw;
      top: 45px;
      right: -56px;
    }
    .line {
      height: 39px;
    }
  }
  @media screen  and (max-width: 576px){
    .form-inline input {
      right: -41px;
    }

  }
  @media screen  and (max-width: 540px){
    .form-inline input {
      right: -32px;
      font-size: 20px;

    }
    .toggle-menu{
      right: -9px;
    }

  }
  @media screen  and (max-width: 320px){
    .line {
      display: none;
    }
    .form-inline {
      display: none;
    }
    .toggle-menu{
      right: -21px;
    }

  }
</style>
