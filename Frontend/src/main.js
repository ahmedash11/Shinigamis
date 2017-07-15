// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

// CSS
import './assets/css/bootstrap.css'
import './assets/css/main.css'
import './assets/css/alertify.min.css'
import './assets/css/default.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/lightgallery.min.css'
import './assets/css/sweetalert2.min.css'

// Scripts
import './assets/js/jquery.min.js'
import './assets/js/jquery.scrolly.min.js'
import './assets/js/jquery.dropotron.min.js'
import './assets/js/jquery.scrollex.min.js'
import './assets/js/skel.min.js'
import './assets/js/util.js'
import './assets/js/main.js'
import './assets/js/bootstrap.min.js'
import './assets/js/alertify.min.js'
//import './assets/js/lightgallery.min.js'
import './assets/js/sweetalert2.min.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
