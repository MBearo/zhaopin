<template>
  <div class="guangbo bg-white">
    <div class="g_icon">
        <i class="ion-volume-medium"></i>
    </div>
    <swiper class="g_swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in TEMPORARY_data" :key="item.id">
        {{item.msg}}
      </swiper-slide>
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
            msg: '今日xx加油站油价特惠！'
          },
          {
            msg: '时政锻压发布招聘信息'
          },
          {
            msg: '今日最惠加油站'
          },
        ],
        swiperOption: {
          direction: 'vertical',
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

<style >
.guangbo{
	padding: 5px;
	box-sizing: border-box;
	position: relative;
	border-bottom: 1px solid #f8f7f7;;
}
.g_icon{
	position: absolute;
	height: 20px;
	width: 20px;
	text-align: center;
	line-height: 20px;
	font-size: 20px;
}
.g_swiper{
	margin-left:25px ;
	height: 20px;
}


</style>
