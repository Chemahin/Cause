<template>
  <div>
    <div class="first">
      <h2>
        Mijn toekomstige
        collega’s
      </h2>
      <hr>
    </div>
  <b-container fluid>
    <b-row>

    </b-row>
    <b-row>
      <b-col class="caruselMy">
        <CaruselSpecialists type="star">
          <Anketa
            v-for="profile in profiles"
            :key="profile.name + Math.random()"
            :name="profile.name"
            :text="profile.text"
            :img="profile.img"
            :mainText="profile.description"
            ></Anketa>
        </CaruselSpecialists>
      </b-col>
      <b-col class="noneCarusel" v-for="profile in profiles" :key="profile.name + Math.random()" sm="6" cols="6" >
        <Anketa
          :key="profile.name + Math.random()"
          :name="profile.name"
          :text="profile.text"
          :mainText="profile.description"
          :img="profile.img"
          ></Anketa>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>

  import CaruselSpecialists from '../CaruselSpecialists';
  import Anketa from './RegistrationAncet';


  export default {
    data(){
      return {
        profiles:[
          {
            img:'photo1.png',
            name:'Lionel',
            text:'Grafisch vormgever',
            description:'Lorem ipsum dolor sit amet, consec tet ur adipisicing elit sed do eiusmod temp or nisi. Lorem ipsum dolor sit amet, con sec tetur adipisicing. Lorem ipsum.'
          },
          {
            img:'photo2.png',
            name:'Thijs',
            text:'Copywriter',
            description:'Lorem ipsum dolor sit amet, consec tet ur adipisicing elit sed do eiusmod temp or nisi. Lorem ipsum dolor sit amet, con sec tetur adipisicing. Lorem ipsum.'

          },
          {
            img:'photo3.png',
            name:'Jochem',
            text:'Grafisch vormgever',
            description:'Lorem ipsum dolor sit amet, consec tet ur adipisicing elit sed do eiusmod temp or nisi. Lorem ipsum dolor sit amet, con sec tetur adipisicing. Lorem ipsum.'
          },
          {
            img:'photo1.png',
            name:'Lionel',
            text:'Grafisch vormgever',
            description:'Lorem ipsum dolor sit amet, consec tet ur adipisicing elit sed do eiusmod temp or nisi. Lorem ipsum dolor sit amet, con sec tetur adipisicing. Lorem ipsum.'
          },
          {
            img:'photo3.png',
            name:'Jochem',
            text:'Grafisch vormgever',
            description:'Lorem ipsum dolor sit amet, consec tet ur adipisicing elit sed do eiusmod temp or nisi. Lorem ipsum dolor sit amet, con sec tetur adipisicing. Lorem ipsum.'
          },
          {
            img:'photo2.png',
            name:'Thijs',
            text:'Copywriter',
            description:'Lorem ipsum dolor sit amet, consec tet ur adipisicing elit sed do eiusmod temp or nisi. Lorem ipsum dolor sit amet, con sec tetur adipisicing. Lorem ipsum.'

          },
        ],
      }
    },
    components:{
      CaruselSpecialists,
      Anketa,
    }
  }
</script>
<style scoped lang="scss">
  .first{
    margin: 8.3% 0 5% 11%;
    h2{
      word-break: break-word  ;
      color: #00c8d7;
      font-family: GolanoSemi;
      font-size: 3.82vw;
      font-weight: 400;
      width: 50%;
      letter-spacing: -2px;
      margin-bottom: 2.6%;
    }
    hr{
      margin:29px 0 29px 0;
      width: 5.5%;
      height: 0.5vw;
      background-color: #00c8d7;
    }
  }
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
</style>
