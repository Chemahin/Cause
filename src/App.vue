<template>
        <router-view></router-view>
</template>

<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";
    export default {

    }
</script>

<style>
        @font-face {
                font-family: GolanoSemi;
                src: url("./assets/fonts/GalanoGrotesqueSemiBold.otf") format("opentype");
        }
        @font-face {
                font-family: GolanoRegular;
                src: url("./assets/fonts/GalanoGrotesqueRegular.otf") format("opentype");
        }
        body{
                overflow-x: hidden;
        }
        *{
                box-sizing: border-box;
        }
        /*styles for the component TimePicker in OrderSpecialistPage/DirectPart.vue*/
        .form-control {
          border: none;
          color: #646464;
          font-family: GolanoRegular;
          font-size: 30px;
          line-height: 35px;
          padding: 0;
          height: auto;
        }
        .form-control:focus {
          border: none;
          box-shadow: none;
        }
        .form-group input.form-control.text-center {
            width: 40px !important;
          }

        tr.text-center {
          display: none;
        }
        @media screen and (max-width:320px ){
          body {
            overflow-x: hidden;
          }
        }
</style>
