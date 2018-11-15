<template>
    <slick
            ref="slick"
            :options="slickOptions">
        <slot></slot>
    </slick>
</template>
<script>
    import Slick from 'vue-slick';
    export default {
        props:{
            type:String
        },
        components: { Slick},
        data() {
            return {

                slickOptions: {
                    autoplay:true,
                    adaptiveHeight:true,
                    lazyLoad:'progressive',
                    mobileFirst:true,
                    prevArrow:'<button type="button" class="slick-prev"><img src="'+require('../assets/icons/arrow-carousel-left.png')+'" alt="left"></button>',
                    nextArrow:'<button type="button" class="slick-next"><img src="'+require('../assets/icons/arrow-carousel-right.png')+'" alt="right"></button>',
                    responsive:[
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 780,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                    ]
                },
            };
        },

        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            }
        }
    };

</script>
<style lang="scss">
    @import '../../node_modules/slick-carousel/slick/slick.css';
    .slick-slider{
        display: flex;
        align-items: center;

    }
    button.slick-arrow{
        background-color: white;
        background-size: cover;
        border: none;
        cursor: pointer;
        outline: none;
    }
    .slick-prev{
        margin-right: 35px;
    }
    .slick-next{
        margin-left: 35px;
    }
    .slick-list {
      width: 100%;
    }
    @media screen and (max-width: 575px){
      .slick-slider{
        width: 100%;
        position: relative;
      }

      button.slick-arrow {
        position: absolute;
        background: transparent;
        z-index: 1;
        img {
          width: 70%;
        }
      }
      .slick-prev {
        left: 0;
      }
      .slick-next {
        right: 0;
      }
      .header img {
        width: 50%;
      }
      .slick-track {
        text-align: center;
      }
    }

</style>
