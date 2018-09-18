<template>
  <div class="wrappHead">
    <div class="fon-filter">
      <b-container fluid>

        <b-row>
          <b-col>
            <NavigationMenu itemColor="itemMenuWhite"
                            borderItem="borderItemWhite"
                            searchItem="searchWhite"
                            logoColor="logoWhite" >

            </NavigationMenu>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="7" sm="12" class="part-wrapp" v-show="!closed">
            <ContactLeft v-on:closed-form="closedForm()"></ContactLeft>
          </b-col>
          <b-col lg="5" sm="12">
            <ContactRight></ContactRight>
          </b-col>
        </b-row>
      </b-container>

    </div>
  </div>
</template>
<script>
  import NavigationMenu from '../NavigationMenu'
  import ContactLeft from './ContactHeaderLeftPart'
  import ContactRight from './ContactHeaderRightPart';


  export default {
    data() {
      return {
        closed: false,
      }
    },
    components: {
      NavigationMenu,
      ContactLeft,
      ContactRight,
    },
    methods: {
      closedForm() {
        this.closed = true;
      }
    }

  }
</script>
<style scoped lang="scss">

  .wrappHead{
    height: 1216px;
    background: url("./../../assets/contact_up_bg.png");
  }
  .fon-filter {
    height: 1216px;
    padding: 83px 9%;
    background: #19cddac4;
  }
  .part-wrapp {
    padding: 8% 6% 0 3%;
  }
  @media screen  and (max-width: 991px){
    .fon-filter{
      padding-top: 0;
    }
  }

</style>
