<template>
    <div class="order-main">
      <SpecialistCard></SpecialistCard>
      <SpecialistCalendar></SpecialistCalendar>
    </div>
</template>

<script>
  import SpecialistCard from './SpecialistCard';
  import SpecialistCalendar from './SpecialistCalendar';
    export default {
        components: {
          SpecialistCard,
          SpecialistCalendar
        }
    }
</script>

<style scoped lang="scss">
  .order-main {
    width: 55%;
  }

</style>
