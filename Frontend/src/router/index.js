import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'
import Carousel3d from 'vue-carousel-3d'
import auth from '../auth'

import HomePage from '@/components/homePage'
//var HomePage = () => import('@/components/homePage')
//import Services from '@/components/services'
var Services = () => import('@/components/services')
//import AdminPage from '@/components/Admin'
var AdminPage = () => import('@/components/Admin')
//import ClientsPage from '@/components/clientsPage'
var ClientsPage = () => import('@/components/clientsPage')
//import ClientsAdmin from '@/components/clientsAdmin'
var ClientsAdmin = () => import('@/components/clientsAdmin')
//import AwardsPage from '@/components/awardsPage'
var AwardsPage = () => import('@/components/awardsPage')
//import AwardsAdmin from '@/components/awardsAdmin'
var AwardsAdmin = () => import('@/components/awardsAdmin')
//import HistoryProjectsPage from '@/components/historyProjectsPage'
var HistoryProjectsPage = () => import('@/components/historyProjectsPage')
//import HistoryProjectsAdmin from '@/components/historyProjectsAdmin'
var HistoryProjectsAdmin = () => import('@/components/historyProjectsAdmin')
//import AboutUsPage from '@/components/aboutUsPage'
var AboutUsPage = () => import('@/components/aboutUsPage')
//import LocationsPage from '@/components/locationsPage'
var LocationsPage = () => import('@/components/locationsPage')
//import LocationsAdmin from '@/components/locationsAdmin'
var LocationsAdmin = () => import('@/components/locationsAdmin')
//import FleetsPage from '@/components/fleetsPage'
var FleetsPage = () => import('@/components/fleetsPage')
//import FleetsAdmin from '@/components/fleetsAdmin'
var FleetsAdmin = () => import('@/components/fleetsAdmin')
//import FleetProfileAdmin from '@/components/fleetProfileAdmin'
var FleetProfileAdmin = () => import('@/components/fleetProfileAdmin')
//import FleetProfilePage from '@/components/fleetProfilePage'
var FleetProfilePage = () => import('@/components/fleetProfilePage')
//import ContactUsPage from '@/components/contactUsPage'
var ContactUsPage = () => import('@/components/contactUsPage')
//import ContactUsAdmin from '@/components/contactUsAdmin'
var ContactUsAdmin = () => import('@/components/contactUsAdmin')
//import ApplicationsAdmin from '@/components/applicationsAdmin'
var ApplicationsAdmin = () => import('@/components/applicationsAdmin')
//import ApplicationAdmin from '@/components/applicationAdmin'
var ApplicationAdmin = () => import('@/components/applicationAdmin')
//import Application from '@/components/Application.vue'
var Application = () => import('@/components/Application.vue')
//import AddFleet from '@/components/AddFleet.vue'
var AddFleet = () => import('@/components/AddFleet.vue')
//import Positions from '@/components/positions.vue'
var Positions = () => import('@/components/positions.vue')
//import Announcements from '@/components/Announcements.vue'
var Announcements = () => import('@/components/Announcements.vue')




Vue.use(Router)
Vue.use(VueResource)
//Vue.use(VueCarousel)
//Vue.use(Carousel3d)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/ApplicationsAdmin',
      name: 'ApplicationsAdmin',
      component: ApplicationsAdmin
    },
    {
      path: '/application/:applicationId',
      name: 'ApplicationAdmin',
      component: ApplicationAdmin
    }, {
      path: '/positions',
      name: 'Positions',
      component: Positions
    }, {
      path: '/apply/:position',
      name: 'Application',
      component: Application
    }, {
      path: '/admin',
      name: 'Admin',
      component: AdminPage
    }, {
      path: '/services',
      name: 'Services',
      component: Services
    }, {
      path: '/clients',
      name: 'Clients',
      component: ClientsPage
    }, {
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
    }, {
      path: '/projects',
      name: 'Projects',
      component: HistoryProjectsPage
    }, {
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
    }, {
      path: '/locations',
      name: 'Locations',
      component: LocationsPage
    }, {
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
      component: AwardsPage
    }, {
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
    }, {
      path: '/fleets',
      name: 'Fleets',
      component: FleetsPage
    }, {
      path: '/admin/fleets',
      name: 'FleetsAdmin',
      component: FleetsAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/fleets');
        } else {
          next()
        }
      }
    }, {
      path: '/fleet/:fleetId',
      name: 'FleetProfilePage',
      component: FleetProfilePage
    }, {
      path: '/admin/fleet/:fleetId',
      name: 'FleetProfileAdmin',
      component: FleetProfileAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/fleet/:fleetId');
        } else {
          next()
        }
      }
    }, {
      path: '/aboutUs',
      name: 'AboutUsPage',
      component: AboutUsPage
    },
    /*
    {
      path: '/admin/aboutUs',
      name: 'AboutUsAdmin',
      component: AboutUsAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/aboutUs');
        } else {
          next()
        }
      }
    },
    */
    {
      path: '/contactUs',
      name: 'ContactUsPage',
      component: ContactUsPage
    }, {
      path: '/admin/contactUs',
      name: 'ContactUsAdmin',
      component: ContactUsAdmin,
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        if (!auth.user.authenticated) {
          swal(
            'Oops...',
            'You shall not pass!!',
            'error'
          )
          next('/contactUs');
        } else {
          next()
        }
      }
    }, {
      path: '/addFleet',
      name: 'AddFleet',
      component: AddFleet
    }, {
      path: '/announcements',
      name: 'Announcements',
      component: Announcements
    }
  ]
})
