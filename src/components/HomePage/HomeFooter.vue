<template>
    <b-container fluid class="footer-wrapp">
        <b-row>
            <b-col md="3" cols="6" class="social-item">
              <i class="fab fa-facebook-square"></i>
            </b-col>
            <b-col md="3" cols="6" class="social-item">
              <i class="fab fa-instagram"></i>
            </b-col>
            <b-col md="3" cols="6" class="social-item">
              <i class="fab fa-twitter"></i>
            </b-col>
            <b-col md="3" cols="6" class="social-item">
              <i class="fab fa-linkedin-in"></i>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>

</script>
<style scoped>
    .social-item {
      color: #00c7d6;
      text-align: center;
      font-size: 4vw;
      padding-top: 3.3%;
      padding-left: 2%;
      padding-bottom: 3.3%;
      cursor: pointer;
    }
    .social-item:hover {
      color: white;
      background: black;
    }
    @media screen  and (max-width: 767px){
      .social-item {
        font-size: 10vw;
        padding-top: 4.3%;
        padding-bottom: 4.3%;
      }
    }
    @media screen  and (max-width: 320px){
      .footer-wrapp {
        padding: 0;
      }
    }

</style>
