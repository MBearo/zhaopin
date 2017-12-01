<template>
  <div>
    <BarBack content="加油站信息"></BarBack>
    <div class="jiayouxinxi bg-primary">
      <!-- <div id="main" style="height: 200px;"></div> -->
    </div>

  </div>
</template>

<script>
  import echarts from 'echarts'
  import BarBack from '../entrance/BarBack'
  import Show from '../entrance/BarBack'

  export default {
    components: {
      BarBack
    },
    data() {
      return {
        charts: '',
        opinion: ['平均油价'],
        opinionData: [{
          value: 50,
          name: '平均油价'
        }]
      }
    },
    methods: {
      // drawPie(id) {
      //   this.charts = echarts.init(document.getElementById(id))
      //   this.charts.setOption({
      //     tooltip: {
      //       trigger: 'item',
      //       formatter: "{a} <br/>{b} : {c}%"
      //     },
      //     series: [{
      //       name: '平均油价',
      //       type: 'gauge',
      //       radius: '80%',
      //       detail: {
      //         formatter: '{value}%'
      //       },
      //       axisLine: {
      //         show: true,
      //         lineStyle: {
      //           width: 10,
      //           shadowBlur: 0,
      //           color: [
      //             [0.2, '#E43F3D'],
      //             [0.4, '#E98E2C'],
      //             [0.6, '#DDBD4D'],
      //             [0.8, '#7CBB55'],
      //             [1, '#9CD6CE']
      //           ]
      //         },
      //       },
      //       axisLabel: {
      //         distance: -15
      //       },
      //       axisTick: {
      //         splitNumber: 1,
      //       },
      //       splitLine: {
      //         show: false,
      //       },
      //       pointer: {
      //         length: '60%',
      //         width: 3
      //       },
      //       itemStyle: {

      //       },
      //       data: this.opinionData
      //     }]
      //   })
      // }
    },
    mounted() {
      // this.$nextTick(function () {
      //   this.drawPie('main')
      // })
    }
  }

</script>

<style>
  .echarts {
    height: 200px;
  }

</style>
