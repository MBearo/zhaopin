<template>
  <div class="hello">
    <BarSearch></BarSearch>
    <Banner></Banner>
    <Ad></Ad>
    <Entrance></Entrance>
    <!-- <InviteScreen></InviteScreen> -->
    <Titles></Titles>
  </div>
</template>

<script>
  import BarSearch from './BarSearch'
  import Banner from './Banner'
  import Ad from './Ad'
  import Entrance from './Entrance'
  import InviteScreen from './InviteScreen'
   import Titles from './Titles'
  // import InviteList from './InviteList'

  import '@/assets/css/index.css'

  export default {
    components: {
      BarSearch,
      Banner,
      Ad,
      Entrance,
      InviteScreen,
      Titles
    },
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
