<template>
<div id="app">
  <AppNav></AppNav>
  <AppFooter></AppFooter>
</div>
</template>

<script>
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'
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
