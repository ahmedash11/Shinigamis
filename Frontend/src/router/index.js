import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import HomePage from '@/components/homePage'
import AdminPage from '@/components/admin'
import ClientsPage from '@/components/clientsPage'
import AwardsPage from '@/components/awardsPage'
import HistoryProjectsPage from '@/components/historyProjectsPage'
import AboutUs from '@/components/aboutUs'
import LocationPage from '@/components/locationsPage'
import Fleet from '@/components/fleet'
import FleetEdit from '@/components/editFleet.vue'

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
    },
    {
      path: '/fleet',
      name: 'FleetPro',
      component: Fleet
    },
     {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/getFleet/:fleetId',
      name: 'FleetProfile',
      component: Fleet
    },
    {
      path: '/editFleet/:fleetId',
      name: 'EditFleet',
      component: FleetEdit
    }
  ]
})
