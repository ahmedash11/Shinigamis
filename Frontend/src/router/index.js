import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import HomePage from '@/components/homePage'
import Services from '@/components/services'
import AdminPage from '@/components/Admin'
import ClientsPage from '@/components/clientsPage'
import AwardsPage from '@/components/awardsPage'
import ApplicationAdmin from '@/components/applicationsAdmin'
import HistoryProjectsPage from '@/components/historyProjectsPage'
import AboutUs from '@/components/aboutUs'
import LocationPage from '@/components/locationsPage'
import Fleet from '@/components/Fleet'
import FleetEdit from '@/components/editFleet.vue'
import AddFleet from '@/components/AddFleet.vue'
import FleetsPage from '@/components/fleetsPage.vue'
import Positions from '@/components/positions.vue'
import Application from '@/components/Application.vue'
import Announcements from '@/components/Announcements.vue'


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
        path: '/ApplicationAdmin',
        name: 'ApplicationAdmin',
        component: ApplicationAdmin
    }, {
        path: '/positions',
        name: 'Positions',
        component: Positions
    }, {
        path: '/application',
        name: 'Application',
        component: Application
    }, {
        path: '/admin',
        name: 'Admin',
        component: AdminPage
    }, {
        path: '/fleetsPage',
        name: 'FleetsPage',
        component: FleetsPage
    }, {
        path: '/clients',
        name: 'Clients',
        component: ClientsPage
    }, {
        path: '/projects',
        name: 'Project',
        component: HistoryProjectsPage
    }, {
        path: '/locations',
        name: 'Location',
        component: LocationPage
    }, {
        path: '/services',
        name: 'Services',
        component: Services
    }, {
        path: '/awards',
        name: 'Awards',
        component: AwardsPage
    }, {
        path: '/fleet',
        name: 'FleetPro',
        component: Fleet
    }, {
        path: '/aboutUs',
        name: 'AboutUs',
        component: AboutUs
    }, {
        path: '/getFleet/:fleetId',
        name: 'FleetProfile',
        component: Fleet
    }, {
        path: '/editFleet/:fleetId',
        name: 'EditFleet',
        component: FleetEdit
    }, {
        path: '/addFleet',
        name: 'AddFleet',
        component: AddFleet
    },{
        path:'/announcements',
        name:'Announcements',
        component:Announcements
    }]
})
