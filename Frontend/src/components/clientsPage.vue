<template>
<div class="clientsPage">
  <NavBar>
  </Navbar>
  <!-- Main -->
  <div id="main" class="wrapper style1">
    <div class="container">
      <header class="major">
        <h2>Clients</h2>
      </header>

      <!-- Content -->
      <section id="content">
        <a href="#" class="image fit"><img src="images/pic07.jpg" alt="" /></a>
        <h3>Big names and clients all over the world.</h3>
        <h4>{{clients[0].name}}</h4>
        <p><span class="image left"><img src="static/images/pic08.jpg" alt="" /></span>{{clients[0].description}}</p>
      </section>

    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import env from '../env'
import NavBar from './navBar'
import Footer from './footer'
export default {
  name: 'clientsPage',
  data() {
    return {
      clients: [],
      error: ''
    }
  },
  components: {
    NavBar,
    Footer
  },
  created: function() {
    this.$http.get(env.URL + '/client/getAllClients').then((response) => {
      if (response.body.success) {
        this.clients = response.body.data.clients
      } else {
        this.error = response.body.msg
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
