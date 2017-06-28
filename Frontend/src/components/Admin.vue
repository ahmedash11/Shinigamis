<template>
<div class="admin">
  <NavBar></NavBar>
  <Clients></Clients>
  <Projects></Projects>
  <Locations></Locations>
</div>
</template>

<script>
import env from '../env'
import NavBar from './navBar'
import Clients from './clientsAdmin'
import Projects from './historyProjectsAdmin'
import Locations from './locationsAdmin'
export default {
  name: 'admin',
  data() {
    return {}
  },
  methods: {},
  created() {},
  components: {
    NavBar,
    Clients,
    Projects,
    Locations
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
