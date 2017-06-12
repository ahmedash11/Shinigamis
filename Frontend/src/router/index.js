import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HomePage from '@/components/HomePage'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  }]
})
