<template>
  <div>
    <ul class="list_block">
      <!--左侧可以使用背景图片，也可以使用css圆形彩色底白字分类-->
      <!--如果使用css分类，添加.fenli 和相应 类名-->
      <li class="flex classify bg-contain" v-cloak :class="item.classify" :style="{backgroundImage: 'url(' + item.img + ')'}" v-for="(item,index) in list_item"
        :key="index">
        <div class="list_img flex-0">

        </div>
        <div class="list_content flex-1">
          <div class="title">
            {{item.title}}
          </div>
          <div class="desc ellipsis">
            <span>{{item.place}}</span>
            <span>{{item.time_limit}}</span>
          </div>
          <div class="other clear-both">
            <div class="money left-float">
              {{item.money}}
            </div>
            <div class="time right-float">
              {{item.time}}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list_item: [{
          classify: 'xiaoshou',
          title: '某知名运动品牌兼职导购品牌兼职导购品牌兼职导购品牌兼职导购',
          place: '城阳区',
          time_limit: '09月01日起工作（大约工作3个月）',
          money: '20元/小时',
          time: '2017-10-10',
          img: ''
        },{
          classify: 'xiaoshou',
          title: '某知名运动品牌兼职导购品牌兼职导购品牌兼职导购品牌兼职导购',
          place: '城阳区',
          time_limit: '09月01日起工作（大约工作3个月）',
          money: '20元/小时',
          time: '2017-10-10',
          img: ''
        },{
          classify: 'xiaoshou',
          title: '某知名运动品牌兼职导购品牌兼职导购品牌兼职导购品牌兼职导购',
          place: '城阳区',
          time_limit: '09月01日起工作（大约工作3个月）',
          money: '20元/小时',
          time: '2017-10-10',
          img: ''
        },{
          classify: 'xiaoshou',
          title: '某知名运动品牌兼职导购品牌兼职导购品牌兼职导购品牌兼职导购',
          place: '城阳区',
          time_limit: '09月01日起工作（大约工作3个月）',
          money: '20元/小时',
          time: '2017-10-10',
          img: ''
        },{
          classify: 'xiaoshou',
          title: '某知名运动品牌兼职导购品牌兼职导购品牌兼职导购品牌兼职导购',
          place: '城阳区',
          time_limit: '09月01日起工作（大约工作3个月）',
          money: '20元/小时',
          time: '2017-10-10',
          img: ''
        },{
          classify: 'xiaoshou',
          title: '某知名运动品牌兼职导购品牌兼职导购品牌兼职导购品牌兼职导购',
          place: '城阳区',
          time_limit: '09月01日起工作（大约工作3个月）',
          money: '20元/小时',
          time: '2017-10-10',
          img: ''
        },
        ]
      }

    }
  }

</script>

<style>
  .list_block>li {
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
    flex-wrap: nowrap;
    border-bottom: 1px solid #f8f7f7;
  }

  .list_img {
    width: 52px;
    height: 52px;
    position: relative;
    margin-right: 10px;
  }

  .list_content {
    line-height: 1;
  }

  .list_block .title {
    font-size: 16px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 82%;
    font-weight: 400;
  }

  .list_block .desc {
    font-size: 12px;
    color: #a5a5a5;
    width: 100%;
    margin: 5px 0;
  }

  .list_block .desc>span:first-child {
    margin-right: 8px;
  }

  .list_block .other {}

  .list_block .money {
    color: #fe7418;
  }

  .list_block .time {
    color: #a5a5a5;
  }

</style>
