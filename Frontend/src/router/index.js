import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import HomePage from '@/components/homePage'
import ClientsPage from '@/components/clientsPage'
import AwardsPage from '@/components/awardsPage'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  }, {
    path: '/clients',
    name: 'Clients',
    component: ClientsPage
  }, {
    path: '/awards',
    name: 'Awards',
    component: AwardsPage
  }]
})
