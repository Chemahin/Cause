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

      <OrderSpecialist></OrderSpecialist>


    </div>
</template>
<script>
  // import AppointmentSpecialist from './AppointmentSpecialist';
  // import ConfirmationSpecialist from './ConfirmationSpecialist';
  import OrderSpecialist from './OrderSpecialistPage/index';

  export default {

    components: {
      // AppointmentSpecialist,
      // ConfirmationSpecialist
      OrderSpecialist
    },

    data() {
      return {
        myDate: {},
      }
    }




  }
</script>
<style scoped lang="scss">
  .main {
    width: 100%;
  }

</style>
