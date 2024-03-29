import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Matchups from '@/components/Matchups'
import 'vue-awesome/icons/check'
import Icon from 'vue-awesome/components/Icon'


Vue.use(Router)
Vue.component('icon', Icon)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Matchups/:week?',
      name: 'Matchups',
      component: Matchups,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
