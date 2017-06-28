<template>
<div class="locationsPage">
  <NavBar></NavBar>

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Locations</h2>
      </header>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Facilities</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="location in locations">
              <td>
                <h3>{{location.title}}</h3>
                <p v-if="location.address">{{location.address}}</p>
                <p v-if="location.phone">Tel: {{location.phone}}</p>
                <p v-if="location.fax">Fax: {{location.fax}}</p>
                <p v-if="location.mobile">Mobile: {{location.mobile}}</p>
                <p v-if="location.email">Email: {{location.email}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <Footer></Footer>
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
import NavBar from './navBar'
import Footer from './footer'
export default {
  name: 'locationsPage',
  data() {
    return {
      locations: []
    }
  },
  methods: {
    fetchLocations: function() {
      this.$http.get(env.URL + '/user/getAllLocations').then(response => {
        this.locations = response.data.data.locations
      }).catch(error => {
        if (error.body.msg instanceof String || typeof error.body.msg === "string") {
          swal(
            'Oops...',
            error.body.msg,
            'error'
          );
        } else {
          for (var i = 0; i < error.body.msg.length; i++) {
            var msg = error.body.msg[i].msg
            alertify.notify(msg, 'error', 5);
          }
        }
      })
    },
  },
  created() {
    this.fetchLocations()
  },
  components: {
    NavBar,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
