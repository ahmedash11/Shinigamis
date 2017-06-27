<template>
<div class="clientsPage">
  <NavBar>
  </Navbar>

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Clients</h2>
      </header>
      <div class="box alt">
        <div class="row uniform">
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="client in clients">
            <img src="static/images/pic07.jpg"></img>
            <h3>{{client.name}}</h3>
            <p>{{client.description}}</p>
          </section>
        </div>
      </div>
    </div>
  </section>

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
      clients: []
    }
  },
  methods: {
    fetchClients: function() {
      this.$http.get(env.URL + '/user/getAllClients').then((response) => {
        if (response.body.success) {
          this.clients = response.body.data.clients
        } else {
          this.error = response.body.msg
        }
      })
    }
  },
  components: {
    NavBar,
    Footer
  },
  created: function() {
    this.fetchClients();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.\34 u img {
  max-height: 100%;
  max-width: 100%;
}
</style>
