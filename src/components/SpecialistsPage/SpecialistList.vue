<template>
    <div class="wrapp">
      <div class="price-items">
        <div class="price-item">
          <img v-lazy="mysrc1" alt="image">
          <h2>Semi Pro</h2>
          <span>&#8364; 30 p.u</span>
        </div>
        <div class="price-item">
          <img v-lazy="mysrc2" alt="image">
          <h2>Pro</h2>
          <span>&#8364; 45 p.u</span>
        </div>
        <div class="price-item">
          <img v-lazy="mysrc3" alt="image">
          <h2>Expert</h2>
          <span>&#8364; 55 p.u</span>
        </div>
      </div>
      <div class="filters">

        <div class="filter-item">
          <vue-single-select
            v-model="filterFirst"
            placeholder="Specialismen"
            :options="['Specialismen_1','Specialismen_2','Specialismen_3','Specialismen_4']"
            :required="true"
            class="input-cast"
          ></vue-single-select>
        </div>
        <div class="filter-item">
          <vue-single-select
            v-model="filterSecond"
            placeholder="Regio"
            :options="['Regio_1','Regio_2','Regio_3','Regio_4']"
            :required="true"
            class="input-cast"
          ></vue-single-select>
        </div>
        <div class="filter-item">
          <vue-single-select
            v-model="filterThird"
            placeholder="Locatie werkplek"
            :options="['werkplek_1','werkplek_2','werkplek_3','werkplek_4']"
            :required="true"
            class="input-cast"
          ></vue-single-select>
        </div>
        <div class="filter-item">
          <vue-single-select
            v-model="filterLast"
            placeholder="Locatie last"
            :options="['last_1','last_2','last_3','last_4']"
            :required="true"
            class="input-cast"
          ></vue-single-select>
        </div>
      </div>
      <b-container fluid class="anketa-items">
        <b-row>
          <b-col class="anketa-item" v-for="profile in profiles" xl="4" sm="6" cols="12" :key="profile.name + Math.random()">
            <Anketa
              :key="profile.name + Math.random()"
              :name="profile.name"
              :text="profile.text"
              :img="profile.img"
              :stars="profile.stars"
              :type="'stars'">
            </Anketa>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="anketa-item" v-for="profile in closedAccounts" :key="profile.name + Math.random()" xl="4" sm="6" cols="12">
            <AnketaDisabled
              :key="profile.name + Math.random()"
              :name="profile.name"
              :text="profile.text"
              :img="profile.img"
              :text-body="profile.textBody"
              :date="profile.date"
              >
            </AnketaDisabled>
          </b-col>
          <b-col class="anketa-item" v-for="profile in inConversation" :key="profile.name + Math.random()" xl="4" sm="6" cols="12">
            <AnketaInConversation
              :key="profile.name + Math.random()"
              :name="profile.name"
              :text="profile.text"
              :img="profile.img"
              :stars="profile.stars"
              :type="'stars'">
            </AnketaInConversation>
          </b-col>
        </b-row>
      </b-container>



    </div>
</template>

<script>
  import VueSingleSelect from "vue-single-select";
  import Anketa from '../Anketa';
  import AnketaDisabled from './AnketaDisabled';
  import AnketaInConversation from './AnketaInConversation';
    export default {
      data() {
        return {
            mysrc1:require(`../../assets/semi.png`),
            mysrc2:require(`../../assets/pro.png`),
            mysrc3:require(`../../assets/expert.png`),
            filterFirst: '',
            filterSecond: '',
            filterThird: '',
            filterLast: '',
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
              },
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
              },
            ],
            closedAccounts:[
              {
                img:'photo1.png',
                name:'Lionel',
                text:'Grafisch vormgever',
                textBody: 'Beschikbaar vanaf',
                date: '01-01-18'
              },
              {
                img:'photo3.png',
                name:'Jochem',
                text:'Grafisch vormgever',
                textBody: 'Beschikbaar vanaf',
                date: '01-01-18'
              },
            ],
            inConversation: [
              {
                img:'photo2.png',
                name:'Thijs',
                text:'Copywriter',
                stars:5
              },
            ]
          }
      },

      components: {
        VueSingleSelect,
        Anketa,
        AnketaDisabled,
        AnketaInConversation
      },
    }
</script>

<style scoped lang="scss">
  p {
    margin: 0;
    color: #646464;
    font-family: GolanoRegular;
    font-size: 25px;
    font-weight: 400;
    line-height: 30.54px;
  }
  .price-items {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 4%;
  }
  .price-item {
    width: 160px;
    text-align: center;
    padding-top: 2%;
    margin-right: 2% ;
    cursor: pointer;

    img {
      width: 90%;
      margin-bottom: 12%;
    }
    h2 {
      color: #646464;
      font-family: GolanoSemi;
      font-size: 29px;
      margin: 0;
    }
    span {
      color: #646464;
      font-family: GolanoRegular;
      font-size: 29px;
    }
  }
  .filters, .filter-item {
    display: flex;
  }
  .filters {
    width: 100%;
    margin-top: 4%;
    margin-left: 2.5%;
    justify-content: space-around;
  }
  .filter-item {
    width: 32%;
    div {
      width: 100%;
    }
  }
  .input-cast {
    font-family: GolanoRegular;
    font-size: 20px;
    font-weight: 400;
    line-height: 30.54px;

  }
  .anketa-items {
    margin-top: 4%;
    margin-left: 1%;
    width: 84vw;
  }
  .anketa-item {
    margin-bottom: 4%;
  }
  @media screen and (max-width: 1780px) {
    button{
      font-size: 0.8rem;
      padding: 3% 0 !important;
    }
  }
  @media screen and (max-width: 1440px) {
    button{
      font-size: 0.7rem;
    }
  }
  /*@media screen and (max-width: 1300px) {*/
    /*button{*/
      /*font-size: 0.7rem;*/
    /*}*/
  /*}*/
  @media screen and (max-width: 1090px){
    .input-cast{
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 900px){
.filters {
  flex-direction: column;
}
    .filter-item {
      width: 100%;
    }

  }
  @media screen and (max-width: 500px) {
    .price-item {
      img {
        width: 70%;
      }
      h2 {
        font-size: 1.5rem;
      }
      span {
        font-size: 1.2rem;
      }
    }
  }
  @media screen  and (max-width: 440px){
    .anketa-item {
      padding: 0;
    }
  }
  @media screen  and (max-width: 425px){
    .filters {
      margin-left: 0;
      padding: 3%;
    }
    .anketa-items {
      margin-left: 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 410px) {
    .price-item {
      img {
        width: 60%;
      }
      h2 {
        font-size: 1.3rem;
      }
      span {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 320px){
    .price-items {
      margin-bottom: 10%;
    }
    .filter-item div {
      width: 100%;
    }
    .anketa-items {
      margin-left: 0;
      padding: 0;
      .anketa-item {
        padding: 0;
      }
    }

  }


</style>
