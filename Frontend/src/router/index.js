import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import auth from '../auth'

import HomePage from '@/components/homePage'
import AdminPage from '@/components/admin'
import ClientsPage from '@/components/clientsPage'
import ClientsAdmin from '@/components/clientsAdmin'
import AwardsPage from '@/components/awardsPage'
import AwardsAdmin from '@/components/awardsAdmin'
import HistoryProjectsPage from '@/components/historyProjectsPage'
import HistoryProjectsAdmin from '@/components/historyProjectsAdmin'
import AboutUs from '@/components/aboutUs'
import LocationsPage from '@/components/locationsPage'
import LocationsAdmin from '@/components/locationsAdmin'
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
      component: ClientsPage,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          next();
        } else {
          next('/admin/clients')
        }
      }
    },
    {
      path: '/admin/clients',
      name: 'ClientsAdmin',
      component: ClientsAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/clients');
        } else {
          next()
        }
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: HistoryProjectsPage,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          next();
        } else {
          next('/admin/projects')
        }
      }
    },
    {
      path: '/admin/projects',
      name: 'ProjectAdmin',
      component: HistoryProjectsAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/projects');
        } else {
          next()
        }
      }
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationsPage,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          next();
        } else {
          next('/admin/locations')
        }
      }
    },
    {
      path: '/admin/locations',
      name: 'LocationsAdmin',
      component: LocationsAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/locations');
        } else {
          next()
        }
      }
    }, {
      path: '/awards',
      name: 'Awards',
      component: AwardsPage,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          next();
        } else {
          next('/admin/awards')
        }
      }
    },
    {
      path: '/admin/awards',
      name: 'AwardsAdmin',
      component: AwardsAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/awards');
        } else {
          next()
        }
      }
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
