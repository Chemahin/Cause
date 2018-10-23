<template>
    <b-container fluid class="main">
        <b-row class="square">
            <b-col>
                <h2>
                    Hoe werkt het?
                </h2>
                <hr>
                <b-container fluid>
                    <b-row>
                        <b-col  lg="3" md="4" cols="12">
                            <h3>Aanvraag</h3>
                            <p>Via onze website kan je gemakkelijk en snel een online specialist inhuren. Je kan duidelijk aangeven waar je de specialist wilt inzetten, waarvoor en hoe lang. Met enkele muisklikken haal jij de juiste werkkrachten en kennis in huis!</p>
                        </b-col>
                        <b-col lg="3" md="4"  cols="12">
                            <h3>Plaatsing</h3>
                            <p>Onze online specialisten zijn binnen heel Nederland inzetbaar. Zo kunnen ze werken bij jou op kantoor, maar ook op een andere locatie. Die keuze laten we bij jou. Maak gebruik van onze diensten waar jij ze nodig hebt!</p>
                        </b-col>
                        <b-col lg="3" md="4" cols="12">
                            <h3>Uitvoering</h3>
                            <p>Alvorens onze specialisten bij jou op locatie gaan werken is een overeenkomst getekend over de exacte werkzaamheden en de lengte daarvan. De specialist zal zich dan ook aan deze overeenkomst houden. Zo is voor alle betrokken partijen duidelijk wat er moet gebeuren.</p>
                        </b-col>
                        <b-col lg="3" md="4" cols="12">
                            <h3>Facturering</h3>
                            <p>Op basis van de overeenkomst zal gedurende de werkzaamheden telkens aan het einde van de maand een factuur naar de opdrachtgever gestuurd worden. </p>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>

</script>
<style scoped lang="scss">
    .main{
        padding:0 6% 0 5.5% ;
        margin-bottom: 7%;
    }
    .square{
        border: 10px solid #1acfdc;
        padding-bottom: 3%;
    }
    h2{
        margin-top: 4.3%;
        margin-left: 4.6%;
        letter-spacing: 0.3px;
        color: #00c8d7;
        font-family: GolanoSemi;
        font-size: 3.6vw;
        font-weight: 400;
        line-height: 1.2;
    }
    h3{
        word-break: break-word;
        color: #646464;
        font-family: GolanoSemi;
        font-size: 2.2vw;
        font-weight: 400;
        line-height:2.2;
    }
    p{
        word-break: break-word;
        color: #969696;
        font-family: GolanoRegular;
        font-size: 1.2vw;
        font-weight: 400;
        line-height: 1.8;
      padding-left: 10%;
    }
    hr{
        margin-left: 5%;
        margin-top: 2%;
        width: 5%;
        height: 11px;
        background-color: #00c8d7;
    }
    .bloks{
        width: 20%;
    }
    .col-md-3{
        padding-top: 2.3%;
        h3{
            letter-spacing: -1px;
        }
        p{
            letter-spacing: -0.5px;
            padding-top: 2%;

        }
        &:first-child{
            padding-left: 5%;
            p{
                padding-left: 14%;
                padding-right: 4%;
            }
        }
        &:nth-child(2){
            padding-left: 4%;
            p{
                padding-left: 13%;
                padding-right: 7%;
            }
        }
        &:nth-child(3){
            padding-left: 0.6%;
            p{
                padding-left: 13%;
                padding-right: 17%;
            }
        }
        &:nth-child(4){
            padding-left: 0px;
            p{
                padding-left: 11%;
                padding-right: 16%;
            }
        }
    }
    @media screen and (max-width: 767px){
        .square{
            border: none;
        }
        hr{
            width: 10%;
            height: 0.5vw;
        }
        .col-md-3:first-child{
            padding-left: 0%;
        }
        .col-md-3:last-child{
            padding-left: 4%;
        }
        h3{
            font-size: 2.8rem;
          text-align: center;
        }
      h2{
        text-align: center;
        font-size: 4rem;
      }
      p{
        font-size: 2rem;
        text-align: center;
        padding: 0;
      }
    }
    @media screen  and (max-width: 670px){
      h2 {
        font-size: 3rem;
        margin: 10% 0 5% 0;
      }
      .main {
        padding: 0 9%;
      }
      p{
        font-size: 1.5rem;
        margin-bottom: 10%;
      }
      hr {
        margin: 2rem 0;
        width: 14%;
      }
    }
    @media screen  and (max-width: 450px) {
      h2 {
        font-size: 2.5rem;
      }
      p{
        font-size: 1.2rem;
      }
    }
    @media screen  and (max-width: 360px) {
      h2 {
        font-size: 2rem;
      }
      p{
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 320px){
      .main {
        padding: 0;
        .col {
          padding: 0;
        }
      }
      hr {
        margin-left: 9%;
        height: 0.5vw;
      }
      h2 {
        width: 100%;
        font-size: 9.5vw;
      }
      h3 {
        font-size: 7.5vw;
      }
      p {
        font-size: 5.5vw;
      }
    }

</style>
