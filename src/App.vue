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
</style>
