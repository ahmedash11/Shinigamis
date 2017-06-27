import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import HomePage from '@/components/homePage'
import AdminPage from '@/components/admin'
import ClientsPage from '@/components/clientsPage'
import AwardsPage from '@/components/awardsPage'
import HistoryProjectsPage from '@/components/historyProjectsPage'
import LocationPage from '@/components/locationsPage'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage
    }, {
      path: '/clients',
      name: 'Clients',
      component: ClientsPage
    },
    {
      path: '/projects',
      name: 'Project',
      component: HistoryProjectsPage
    },
    {
      path: '/locations',
      name: 'Location',
      component: LocationPage
    }, {
      path: '/awards',
      name: 'Awards',
      component: AwardsPage
    }
  ]
})
