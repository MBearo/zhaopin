<template>
  <div>
    <header class="bar-nav">
      <div class="flex bar-body back color-white">
        <div class="bar-icon back flex-0 touch-dark" @click="back">
          <i class="ion-ios-arrow-left"></i>
        </div>
        <div class="bar-content back flex-1">
          {{content}}
        </div>
        <div class="bar-icon back flex-0">

        </div>
      </div>
      <div class="bar-footer">

      </div>
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      content: ''
    },
    data() {
      return {}
    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }

</script>

<style>


</style>
