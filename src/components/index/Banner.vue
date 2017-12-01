<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" style="height:120px">
      <!-- 这部分放你要渲染的那些内容 -->
      <!-- <swiper-slide v-for="item in listImg" :key="item.id" :style="{ backgroundImage: 'url(' + item.img + ')' }"> -->
      <swiper-slide v-for="item in TEMPORARY_data" :key="item.id" :style="{backgroundImage: `url(${item.img})` }">

      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        TEMPORARY_data: [{
            img: '/static/img/linliwen_1511233146555.jpg'
          }, {
            img: '/static/img/linliwen_1511233146555.jpg'
          },
          {
            img: '/static/img/linliwen_1511233146555.jpg'
          },
        ],
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
          // notNextTick: true,
          pagination: {
            el: '.swiper-pagination'
          },
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 1,
          paginationClickable: true,
          //spaceBetween: 30,
          loop: true,
          autoplay: {
            deay: 1000
          }
        },
      }
    }
  }

</script>

<style scoped>
  .swiper-slide {
    background-size: cover
  }

  .swiper-pagination-bullet-active {
    background-color: #fe7418;
  }

</style>
