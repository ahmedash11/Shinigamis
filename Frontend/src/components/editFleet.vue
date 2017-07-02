<template>
<div class="editFleet">
  <!-- Main -->
  <div id="main" class="wrapper style1">
    <div class="container">
      <header class="major">
        <h2>Right Sidebar</h2>
        <p>Ipsum dolor feugiat aliquam tempus sed magna lorem consequat accumsan</p>
      </header>
      <div class="row 150%">
        <div class="8u 12u$(medium)">

          <!-- Content -->
          <section id="content">
            <a href="#" class="image fit"><img src="images/pic06.jpg" alt="" /></a>
            <div class="table wrapper">
              <table class="alt">
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>
                      <input type="text" v-model="Fleet.type">
                    </td>
                  </tr>
                  <tr>
                    <td>Design</td>
                    <td>
                      <input type="text" v-model="Fleet.design"></td>
                  </tr>
                  <tr>
                    <td>Built</td>
                    <td>
                      <input type="text" v-model="Fleet.built"></td>
                  </tr>
                  <tr>
                    <td>Tonnage</td>
                    <td>
                      <input type="text" v-model="Fleet.tonnage">
                    </td>
                  </tr>
                  <tr>
                    <td>Draft</td>
                    <td>
                      <input type="text" v-model="Fleet.draft"></td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>
                      <input type="text" v-model="Fleet.horsepower"></td>
                  </tr>
                  <tr>
                    <td>Deck Space</td>
                    <td>
                      <input type="text" v-model="Fleet.deckSpace"></td>
                  </tr>
                  <tr>
                    <td>Deck Strength</td>
                    <td>
                      <input type="text" v-model="Fleet.deckStrength">
                    </td>
                  </tr>
                  <tr>
                    <td>Deck Dimensions</td>

                    <td>
                      <input type="text" v-model="Fleet.deckDimensions"></td>
                  </tr>
                  <tr>
                    <td>Crane</td>

                    <td>
                      <input type="text" v-model="Fleet.crane">
                    </td>
                  </tr>

                  <tr>
                    <td>Accomodation</td>
                    <td>
                      <input type="text" v-model="Fleet.accomodation">
                    </td>
                  </tr>
                  <tr>
                    <td>Flag</td>
                    <td>
                      <input type="text" v-model="Fleet.flag">
                    </td>
                  </tr>
                  <tr>
                    <td>Bollard Pull</td>
                    <td>
                      <input type="text" v-model="Fleet.bollardPull"></td>
                  </tr>
                  <tr>
                    <td>Fire Fighting</td>
                    <td>
                      <input type="text" v-model="Fleet.fireFighting"></td>
                  </tr>
                  <tr>
                    <td>Mooring System</td>
                    <td>
                      <input type="text" v-model="Fleet.mooringSystem"></td>
                  </tr>
                  <tr>
                    <td>Helideck</td>
                    <td>
                      <input type="text" v-model="Fleet.helideck">
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </section>

        </div>
        <div class="4u$ 12u$(medium)">

          <!-- Sidebar -->
          <section id="sidebar">
            <section>
              <h3>Magna Feugiat</h3>
              <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>
              <footer>
                <ul class="actions">
                  <li><a href="#" class="button">Learn More</a></li>
                </ul>
              </footer>
            </section>
            <hr />
            <section>
              <a href="#" class="image fit"><img src="images/pic07.jpg" alt="" /></a>
              <h3>Amet Lorem Tempus</h3>
              <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
              <footer>
                <ul class="actions">
                  <li><a href="#" class="button">Learn More</a></li>
                </ul>
              </footer>
            </section>
          </section>

        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'editFleet',
  data() {
    return {
      Fleet: {},
    }
  },
  created() {
    this.fetchFleet()
  },

  methods: {
    // Send a request to the login URL and save the returned JWT
    fetchFleet: function() {
      this.$http.get(env.URL + '/user/getFleet/'.concat(this.$route.params.fleetId)).then(response => {
        this.Fleet = response.data.data.fleet
      })
    },
    editFleet: function() {
      this.$http.post(env.URL + '/admin/updateFleet', this.Fleet, {
        headers: auth.getAuthHeader()
      }).then(response => {
        alertify.notify(response.body.msg, 'success', 5);
        this.fetchFleet()
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
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
/style>
