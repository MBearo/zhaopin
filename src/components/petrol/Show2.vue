<template>
  <div>
    <div class="banner-show flex bg-primary color-white text-center">
      <div>
        <div class="bs-num">
          <span>
            <i class="iconfont icon-gongsi"></i>
          </span> 56</div>
        <div class="bs-title">招聘企业数</div>
      </div>
      <div class="zhongxian"></div>
      <div>
        <div class="bs-num">
          <i class="iconfont icon-gangwei"></i>
          </span> 234</div>
        <div class="bs-title">待招岗位数</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  .banner-show {
    justify-content: space-around;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0px;
    background-image: linear-gradient(to bottom, #27b0ff, #5daeff);
  }

  .zhongxian {
    border-right: 1px solid white;
    height: 40px;
  }

  .bs-num {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .bs-title {
    font-size: 14px;
  }

</style>
