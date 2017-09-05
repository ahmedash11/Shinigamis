<template>
<div id="app">
  <AppNav></AppNav>
  <AppFooter></AppFooter>
</div>
</template>

<script>
//import AppNav from './AppNav.vue'
var AppNav = () =>
  import ('./AppNav.vue')
//import AppFooter from './AppFooter.vue'
var AppFooter = () =>
  import ('./AppFooter.vue')
export default {
  name: 'app',
  components: {
    AppNav,
    AppFooter
  },
  data() {
    return {

    }
  },
}
</script>
