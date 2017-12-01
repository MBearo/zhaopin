<template>
  <div>
    <div class="entry_block flex bg-white">
      <router-link class="flex-0" tag="div" :to="{path:'/entrance'}">
        <div class="left-float">
          <div class="entry_tel">招聘信息</div>
          <div class="entry_del">最精准的本地化信息</div>
        </div>
        <div class="entry_right bg-contain" style="background-image: url(/static/img/xiaoren.png);">

        </div>
      </router-link>
      <router-link class="flex-0" tag="div" :to="{path:'/petrol'}">
        <div class="left-float">
          <div class="entry_tel">加油站</div>
          <div class="entry_del">权威、快速、惠民</div>
        </div>
        <div class="entry_right bg-contain" style="background-image: url(/static/img/jiayou.png);">

        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  .entry_block {
    margin-bottom: 10px;
  }

  .entry_block>div {
    width: 50%;
    height: 65px;
    box-sizing: border-box;
    padding: 12px 15px;
    position: relative;
  }

  .entry_block>div:nth-child(2n+1) {
    border-right: 1px solid #e6e6e6;
  }

  .entry_tel {
    color: #3f3f3f;
    line-height: 1.5;
    font-size: 16px;
  }

  .entry_del {
    color: #d1d1d1;
    font-size: 12px;
    line-height: 1.5;
  }

  .entry_right {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 10px;
    right: 10px;
  }

</style>
