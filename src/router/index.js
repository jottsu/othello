import Vue from 'vue'
import Router from 'vue-router'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/setting'
    }, {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
