<template>
    <b-container fluid class="main-wrap">
        <b-row>
            <b-col class="caruselMy" >
                <CaruselSpecialists type="star">
                    <Anketa
                            v-for="profile in profiles"
                            :key="profile.name + Math.random()"
                            :name="profile.name"
                            :text="profile.text"
                            :img="profile.img"
                            :stars="profile.stars"
                            :type="'stars'"></Anketa>
                    <Anketa
                            v-for="profile in profiles"
                            :key="profile.name + Math.random()"
                            :name="profile.name"
                            :text="profile.text"
                            :img="profile.img"
                            :stars="profile.stars"
                            :type="'stars'"></Anketa>
                </CaruselSpecialists>
            </b-col>
            <b-col class="noneCarusel" v-for="profile in profiles" :key="profile.name + Math.random()" sm="6" cols="12">
                <Anketa
                        :key="profile.name + Math.random()"
                        :name="profile.name"
                        :text="profile.text"
                        :img="profile.img"
                        :stars="profile.stars"
                        :type="'stars'"></Anketa>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="btnCenter">
                <Button
                        btnText="BEKIJK ALLE SPECIALISTEN"
                        btnClass="btnWhite"
                ></Button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import CaruselSpecialists from '../CaruselSpecialists';
    import Anketa from '../Anketa';
    import Button from '../Button';
    export default {
        data(){
            return {
                profiles:[
                    {
                        img:'photo1.png',
                        name:'Lionel',
                        text:'Grafisch vormgever',
                        stars:5
                    },
                    {
                        img:'photo2.png',
                        name:'Thijs',
                        text:'Copywriter',
                        stars:5
                    },
                    {
                        img:'photo3.png',
                        name:'Jochem',
                        text:'Grafisch vormgever',
                        stars:5
                    }
                ],
            }
        },
        components:{
            CaruselSpecialists,
            Anketa,
            Button
        }
    }
</script>
<style scoped lang="scss">
    .caruselMy{
        padding: 0 5%;
        margin-bottom: 4%;
    }
    .btnCenter{
        text-align: center;
        margin-bottom: 5%;
        button{
            font-size: 1.5vw;
            padding: 1% 2%;
        }
    }
    .noneCarusel{
        display: none;
        padding: 0px;
    }

    @media screen and (max-width: 767px) {
      .btnCenter button{
        width: 60%;
        font-size: 1.2rem;
        padding: 2% 0;
      }
    }
    @media screen and (max-width: 637px) {
      .btnCenter button{
        width: 70%;
        margin-top: 5%;
      }
    }
    @media screen and (max-width:637px ){
        .caruselMy{
            display: none;
        }
        .noneCarusel{
            display: block;
        }
        .btnCenter button{
          font-size: 3vw;
          border-radius: 5px;
          border-width: 2px;
          padding: 15px;
        }
    }
    @media screen and (max-width: 414px) {
      .btnCenter button{
        width: 90%;
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 360px) {
      .btnCenter button{
        width: 90%;
        font-size: 0.8rem;
      }
    }

    @media screen and (max-width: 320px ){
      .btnCenter button{
        padding: 5% 0;
        width: 100%;
        font-size: 4.2vw;
        margin: 12% 0;
      }
        .main-wrap {
            padding: 0;
        }
    }
</style>
