<template>
    <div class="main">
      <!--<AppointmentSpecialist name="Lionel"-->
                             <!--img="photo2.png"-->
                             <!--specialistText="lal1"-->
                             <!--orderText="lal2"-->
                             <!--cooperationText="lal3">-->
      <!--</AppointmentSpecialist>-->

      <!--<ConfirmationSpecialist name="Lionel"-->
                              <!--img="photo2.png">-->
      <!--</ConfirmationSpecialist>-->


    </div>
</template>
<script>
  // import AppointmentSpecialist from './AppointmentSpecialist';
  // import ConfirmationSpecialist from './ConfirmationSpecialist';

  export default {

    components: {
      // AppointmentSpecialist,
      // ConfirmationSpecialist
    },

    data() {
      return {
        selectedValue: new Date(),
      };
    },



  }
</script>
<style scoped lang="scss">
  .main {
    background: lightblue;
    width: 100%;
  }

</style>
