<template>
    <b-col md="4" sm="6" cols="12" class="cellScill"
         @mouseenter="isHover = ! isHover"
         @mouseleave="isHover = ! isHover">
        <img v-lazy="isHover ? hoverImg : mysrc"
             :alt="text">
        <hr>
        <p>{{text}}</p>
    </b-col>
</template>
<script>
    export default {
        data(){
            return {
                isHover:false,
                mysrc:require(`../../assets/icons/${this.src}`),
                hoverImg:require(`../../assets/icons/${this.hover}`)
            }
        },
        props:{
            src:{
                type:String
            },
            hover:{
                type:String
            },
            text:{
                type:String
            }
        }
    }
</script>
<style scoped lang="scss">
    .cellScill{
        img{
            max-width: 100%;
        }
        padding-top: 2%;
        border: 1px solid #cacaca;
        text-align: center;
        &:hover{
            hr{
                border-color: white;
            }
            p{
                color: white;
            }
            background-color: #2ad0e1;
            border-color: #2ad0e1;
            color: white;
        }
    }
    hr{
        border: 1px solid #cacaca;
        width: 20%;
        margin-bottom: 4%;
    }
    p{
        color: #969696;
        font-family:GolanoRegular;
        font-size:1.3vw;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 6%;
    }
    @media screen and (max-width: 767px){
        p{
          font-size: 2rem;
        }
        .cellScill img{
            max-width: 40%;
        }
        .cellScill:last-child{
            display: none;
        }
    }
    @media screen and (max-width: 320px){
      .cellScill {
        padding: 0 2%;
      }

    }
</style>
