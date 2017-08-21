<template>
<div class="locationsPage">

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
                <p v-if="location.address"><i class="glyphicon glyphicon-home"></i> {{location.address}}</p>
                <p v-if="location.phone"><i class="glyphicon glyphicon-phone-alt"></i> Tel: {{location.phone}}</p>
                <p v-if="location.fax"><i class="fa fa-fax " aria-hidden="true"></i> Fax: {{location.fax}}</p>
                <p v-if="location.mobile"><i class="fa fa-mobile fa-2x" aria-hidden="true"></i> Mobile: {{location.mobile}}</p>
                <p v-if="location.email"><i class="glyphicon glyphicon-envelope"></i> Email: {{location.email}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
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
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article.special, section.special {
    text-align: left; 
    padding-left: 2.55em;
}

h3{
text-align: center;
}
</style>
