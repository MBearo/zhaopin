<template>
  <div>
    <div class="filter_wrap flex justify-between bg-white">
      <div class="filter_item">
        区域
        <i class="ion-chevron-down"></i>
      </div>
      <div class="filter_item">
        类型
        <i class="ion-chevron-down"></i>
      </div>
      <div class="filter_item">
        时间
        <i class="ion-chevron-down"></i>
      </div>
    </div>

    <InviteList></InviteList>
  </div>
</template>

<script>
import InviteList from './InviteList'
  export default {
      components:{
        InviteList
      }
  }

</script>

<style>
  .filter_wrap>div {
    padding: 0 5px;
    box-sizing: border-box;
    width: 33%;
    height: 44px;
    border-bottom: 1px solid #f3f3f3;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    position: relative;
  }

  .filter_wrap>div>i {
    position: absolute;
    top: 15px;
    right: 20px;
    line-height: 14px;
    font-size: 12px;
  }

</style>
