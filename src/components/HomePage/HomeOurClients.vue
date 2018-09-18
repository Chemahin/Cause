<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <div class="ourQuality">
                    <b-row>
                        <b-col md="2" cols="6" class="ourQuality-item">
                            <img src="../../assets/homepage/profit-image0.png" alt="profit0">
                            <p>Een groei<br>
                                in kennis</p>
                        </b-col>
                        <b-col md="2" cols="6" class="ourQuality-item">
                            <img src="../../assets/homepage/profit-image1.png" alt="profit1">
                            <p>Een groei<br>
                                in flexibiliteit</p>
                        </b-col>
                        <b-col md="2" cols="6" class="ourQuality-item">
                            <img src="../../assets/homepage/profit-image2.png" alt="profit2">
                            <p>Een groei in<br>
                                werkcapiciteit</p>
                        </b-col>
                        <b-col md="2" cols="6" class="ourQuality-item">
                            <img src="../../assets/homepage/profit-image3.png" alt="profit3">
                            <p>Een groei<br>
                                in efficiëntie</p>
                        </b-col>
                        <b-col md="2" cols="6" class="ourQuality-item">
                            <img src="../../assets/homepage/profit-image4.png" alt="profit4">
                            <p>Een groei<br>
                                in daadkracht</p>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="hText">
                <h2>Onze opdrachtgevers</h2>
                <hr>
            </b-col>
        </b-row>
        <b-row class="clients">
            <b-col v-for="n in 10" :key="n +Math.random()">
                <img :src="sourceImages(n)"
                     :alt="'client №'+n">
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        methods:{
            sourceImages(n){
                return require(`../../assets/homepage/client${n}.png`)
            }
        }
    }
</script>
<style scoped lang="scss">
    .ourQuality{
        margin: 0 8% 0 5%;
        padding-top: 20px;
        background: white;
        transition: all 0.7s;
        .row{
            justify-content: center;
        }
        .col-md-2{
            &:last-child{
                padding: 0px;
            }
            text-align: center;
        }
    }
    .ourQuality-item{
      cursor: pointer;
      &:hover{
        background-color: #2ad0e1;
      }
    }
    p{
        color: #646464;
        font-family: GolanoSemi;
        font-size: 1.6vw;
        font-weight: 400;
        line-height: 1.5;
        margin-top: 7%;
        width: 90%;
    }
    h2{
        color: #00c8d7;
        font-family: GolanoSemi;
        font-size: 3.6vw;
        font-weight: 400;
        line-height: 1.7;
        word-break: break-word;
        letter-spacing: 0px;
    }
    .hText{
        margin-top: 5.2%;
        padding: 0px 10%;
    }
    hr{
        margin-top: 2%;
        width: 5.8%;
        margin-left: 6px;
        height: 0.5vw;
        background-color: #00c8d7;
    }
    .clients {
        margin-top: 3%;
        margin-bottom: 5.7%;
        padding: 0px 10%;
        .col{
            text-align: center;
            padding: 0px;
            margin-bottom: 10px;
        }
    }
    @media screen  and (max-width: 767px){
        .ourQuality img{
            width: 60%;
        }
        p{
            font-size:3vw;
        }
        .ourQuality div.col-md-2:last-child{
            padding: 0px 15px;
        }
        .hText,.clients{
            display: none;
        }
    }
    @media screen and (max-width: 320px){
      .ourQuality {
        margin: 0;
        padding: 0;
        img{
          width: 100%;
        }
      }
      p {
        font-size: 5vw;
        line-height: 1.1;
        margin-bottom: 20%;
      }
    }
</style>
