<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSpecialistScill></HomeSpecialistScill>
        <HomeThreeQuestions></HomeThreeQuestions>
        <HomeCompanies></HomeCompanies>
        <HomeSpecialistsSlider></HomeSpecialistsSlider>
        <HomeDeirectionsDevelop></HomeDeirectionsDevelop>
        <HomeWerktHet></HomeWerktHet>
        <HomeOurClients></HomeOurClients>
        <HomeFastRegistrate></HomeFastRegistrate>
        <HomeFooter></HomeFooter>
    </div>
</template>
<script>
    import HomeHeader from './HomeHeader';
    import HomeSpecialistScill from './HomeSpecialistScill';
    import HomeThreeQuestions from './HomeThreeQuestions';
    import HomeCompanies from './HomeCompanies';
    import HomeSpecialistsSlider from './HomeSpecialistsSlider';
    import HomeDeirectionsDevelop from './HomeDeirectionsDevelop';
    import HomeWerktHet from './HomeWerktHet';
    import HomeOurClients from './HomeOurClients';
    import HomeFastRegistrate from './HomeFastRegistrate';
    import HomeFooter from './HomeFooter';
    export default {
        components:{
            HomeHeader,
            HomeSpecialistScill,
            HomeThreeQuestions,
            HomeCompanies,
            HomeSpecialistsSlider,
            HomeDeirectionsDevelop,
            HomeWerktHet,
            HomeOurClients,
            HomeFastRegistrate,
            HomeFooter
        }
    }
</script>
<style lang="scss">
  html, body {
    overflow-x: hidden;
  }
  @media screen and (max-width:320px) {


    .row {
      margin: 0;
    }

  }

</style>
