import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Setting from '@/components/Setting'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: () => {
        if (store.state.isPlaying) {
          return '/game'
        }
        return '/setting'
      }
    }, {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }, {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
