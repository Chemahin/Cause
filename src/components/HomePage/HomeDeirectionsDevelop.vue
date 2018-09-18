<template>
    <b-container fluid class="main">
        <b-row>
            <b-col class="firstRow">
                <div class="imgBlock">
                    <img src="../../assets/homepage/business-card.png" alt="Business card" class="img-responsive">
                    <img src="../../assets/homepage/fresh-packaging.png" alt="Fresh" class="img-responsive">
                </div>
                <div>
                    <img src="../../assets/homepage/juicy-bottles.png" alt="Juicy" class="img-responsive">
                </div>
                <div>
                    <h2>
                        Grafisch ontwerp
                    </h2>
                    <hr>
                    <p>
                        Bij het ontwerpen of aanpassen van het grafisch ontwerp is het van belang om met drie aspecten rekening te houden:
                        De identiteit van jouw onderneming, de herkenbaarheid voor jouw consumenten en de toepasbaarheid binnen
                        verschillende uitingen zoals social media, flyers, nieuwsbrieven en websites. Wij denken altijd actief mee met jou mee
                        over wat de beste opties zijn.
                    </p>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="secondRow" md="6">
                <h2>Ontwikkeling</h2>
                <hr>
                <p>Het internet speelt een onmisbare rol in de digitaliserende wereld. Niet alleen in de manier waarop we met elkaar
                    communiceren, maar ook de manier waarop we consumeren. Het aantal online aankopen neemt steeds verder toe. Causeffect
                    heeft veel ervaring met webshops en helpt jou om online te groeien.</p>
            </b-col>
            <b-col md="6">
                <div class="wrapImage">
                    <img src="../../assets/homepage/development-image.png" alt="development" class="img-responsive">
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>

</script>
<style scoped lang="scss">
    img{
        max-width: 91.5%;
        height: auto;
    }
    .col{
        padding: 0px;
    }
    .imgBlock img{
        max-width: 88.5%;
        display: block;
        &:first-child{
            margin-bottom: 10%;
        }
    }
    .main{
        margin-top: 5%;
        margin-bottom: 11.5%;
    }
    h2{
        word-break: break-word;
        margin-left: 15px;
        letter-spacing: -4px;
        color: #00c8d7;
        font-family: GolanoSemi;
        font-size: 4vw;
        font-weight: 400;
        line-height: 0.9;
        margin-bottom: 30px;
    }
    hr{
        width:8.5%;
        height: 10px;
        margin-left: 20px;
        background-color: #00c8d7;
    }
    p{
        padding: 4% 0 0 6%;
        color: #969696;
        font-family: GolanoRegular;
        font-size: 1.5vw;
        font-weight: 400;
        line-height: 1.7;
    }
    .firstRow{
        display: flex;
        div:nth-child(1){
            width: 13%;
        }
        div:nth-child(2){
            width: 25%;
        }
        div:nth-child(3){
            width: 54%;
        }
    }
    .secondRow{
        padding: 6% 0 0 10%;
    }
    .wrapImage{
        position: relative;
        img{
            position: absolute;
            top:-50px;
            max-width: 100%;
        }
    }
    @media screen and (max-width: 767px){
        .main{
            display: none;
        }
    }
</style>
