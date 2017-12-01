import Vue from 'vue'
import Router from 'vue-router'
import Index1 from '@/components/index/Index'
import Index2 from '@/components/entrance/Index'
import Index3 from '@/components/petrol/Index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index1',
      component: Index1
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: Index2
    },
    {
      path: '/petrol',
      name: 'petrol',
      component: Index3
    },
  ]
})
