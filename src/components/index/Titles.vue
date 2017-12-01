<template>
  <div>
    <div class="block-title flex bg-white">
      <div class="bt-left flex-1 flex color-primary" >
        <i class="ion-android-people"></i> <span>招聘信息</span>  
      </div>
      <div class="bt-right flex-0 flex">
         <span>查看全部</span>  <i class=""></i>
      </div>
    </div>
    <InviteList></InviteList>
  </div>
</template>

<script>
  import InviteList from './InviteList'
  export default {
    components: {
      InviteList
    }
  }

</script>

<style>
  .block-title {
    padding: 10px;
    border-bottom: 1px solid #f3f3f3;
  }
  .bt-left{
    position: relative;
    padding-left: 30px
  }
  .bt-left>i{
      font-size: 24px;
      position: absolute;
      left: 2px;
  }
.bt-left,.bt-right{
  /* justify-content: center; */
  align-items: center;
}
  .bt-right {
    text-align: right;
    font-size:12px;
    color:#898989;
  }

</style>
