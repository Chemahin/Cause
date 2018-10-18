<template>
    <b-container class="wrappHead" fluid>
        <b-row>
            <b-col class="text-center">
                <h2>Diverse specialisten staan voor u klaar</h2>
                <p>Specialisten al vanaf <b>€27,50</b> per uur</p>
                <Button
                        btnClass="btnWhite"
                        btnText="BEKIJK SPECIALISTEN">
                </Button>
            </b-col>
        </b-row>
        <b-row class="cellMargin">
            <HomeCellScill v-for="(cell,index) in cells"
                           :key="Math.random()+index"
                           :src="cell.src"
                           :text="cell.text"
                           :hover="cell.hover">
            </HomeCellScill>
        </b-row>
    </b-container>
</template>
<script>
    import Button from '../Button';
    import HomeCellScill from './HomeCellScill';
    export default {
        data(){
            return {
                cells:[
                    {
                        src:'service-image-basic0.png',
                        hover:'service-image-hover0.png',
                        text:'Graphic designers'
                    },
                    {
                        src:'service-image-basic1.png',
                        hover:'service-image-hover1.png',
                        text:'DTP’ers'
                    },
                    {
                        src:'service-image-basic2.png',
                        hover:'service-image-hover2.png',
                        text:'Copywriters'
                    },
                    {
                        src:'service-image-basic3.png',
                        hover:'service-image-hover3.png',
                        text:'SEO specialists'
                    },
                    {
                        src:'service-image-basic4.png',
                        hover:'service-image-hover4.png',
                        text:'SEO specialists'
                    },
                    {
                        src:'service-image-basic5.png',
                        hover:'service-image-hover5.png',
                        text:'Social media marketeers'
                    },
                    {
                        src:'service-image-basic6.png',
                        hover:'service-image-hover6.png',
                        text:'Camera operators'
                    },
                    {
                        src:'service-image-basic7.png',
                        hover:'service-image-hover7.png',
                        text:'Social media marketeers'
                    },
                    {
                        src:'service-image-basic8.png',
                        hover:'service-image-hover8.png',
                        text:'Social media marketeers'
                    }
                ]
            }
        }
        ,
        components:{
            Button,
            HomeCellScill
        }
    }
</script>
<style scoped lang="scss">
    h2{
        word-break: break-word;
        text-align: center;
        font-size: 3.5vw;
        font-weight: 400;
        line-height: 0.9;
        letter-spacing: 1px;
        color: #00c8d7;
        font-family:GolanoSemi ;
        margin-bottom: 0px;
    }
    .wrappHead{
        margin-top: 7.2%;
       padding-left: 11%;
        padding-right: 12%;
    }
    p{
        font-size: 2.18vw;
        color: #969696;
        font-family:GolanoRegular ;
        line-height: 1.8;
        letter-spacing: -1px;
    }
    button{
        padding: 1.5% 2%;
        border-width: 5px;
        margin-top: 1%;
        font-family: GolanoSemi;
        font-size: 1.6vw;
        font-weight: 400;
    }
    .cellMargin{
        margin-top: 4%;
        border: 1px solid #cacaca;
    }
    @media screen and (max-width: 767px){
      h2{
        text-align: center;
        font-size: 4rem;
      }
      p{
        font-size: 2rem;
        text-align: center;
      }
      .btnWhite{
        width: 60%;
        padding: 3% 0;
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 414px){
      h2{
        font-size: 2.7rem;
      }
      p{
        font-size: 1.7rem;
      }
      .btnWhite{
        width: 100%;
        font-size: 1rem;
      }
    }
    @media screen and (max-width:320px){
      .wrappHead {
        padding: 0;
      }
      .text-center {
        padding: 0 9%;
        h2 {
          font-size: 9.5vw;
          margin: 0;
          text-align: center;
        }
        p {
          font-size: 6.5vw;
          margin-bottom: 10%;
          b {
            font-size: 9vw;
          }
        }
      }
      button {
        width: 100%;
        font-size: 5vw;
        padding: 2% 0;
      }
      .cellMargin {
        margin-top: 10%;
      }
      p {
        font-size: 8.3vw;
        margin: 0 2%;
      }
    }
</style>
