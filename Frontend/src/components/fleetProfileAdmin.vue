<template>
<div class="fleetProfileAdmin">
  <section id="four" class="wrapper style1 special fade-up">

    <div class="container">

      <header class="major">
        <h2>{{fleet.name}}</h2>
      </header>

      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td><input type="text" v-model="fleet.type"></td>
          </tr>
          <tr>
            <td>Design</td>
            <td><input type="text" v-model="fleet.design"></td>
          </tr>
          <tr>
            <td>Built</td>
            <td><input type="text" v-model="fleet.built"></td>
          </tr>
          <tr>
            <td>Tonnage</td>
            <td><input type="text" v-model="fleet.tonnage"></td>
          </tr>
          <tr>
            <td>Draft</td>
            <td><input type="text" v-model="fleet.draft"></td>
          </tr>
          <tr>
            <td>Horsepower</td>
            <td><input type="text" v-model="fleet.horsepower"></td>
          </tr>
          <tr>
            <td>Deck Space</td>
            <td><input type="text" v-model="fleet.deckSpace"></td>
          </tr>
          <tr>
            <td>Deck Strength</td>
            <td><input type="text" v-model="fleet.deckStrength"></td>
            </td>
          </tr>
          <tr>
            <td>Deck Dimensions</td>
            <td><input type="text" v-model="fleet.deckDimensions"></td>
          </tr>
          <tr>
            <td>Crane</td>
            <td><input type="text" v-model="fleet.crane"></td>
          </tr>
          <tr>
            <td>Accomodation</td>
            <td><input type="text" v-model="fleet.accomodation"></td>
          </tr>
          <tr>
            <td>Flag</td>
            <td><input type="text" v-model="fleet.flag"></td>
            </td>
          </tr>
          <tr>
            <td>Bollard Pull</td>
            <td><input type="text" v-model="fleet.bollardPull"></td>
          </tr>
          <tr>
            <td>Fire Fighting</td>
            <td><input type="text" v-model="fleet.fireFighting"></td>
          </tr>
          <tr>
            <td>Mooring System</td>
            <td><input type="text" v-model="fleet.mooringSystem"></td>
          </tr>
          <tr>
            <td>Helideck</td>
            <td><input type="text" v-model="fleet.helideck"></td>
          </tr>
        </tbody>
      </table>
      <a class="button special" v-on:click="editFleet(fleet._id)">Update</a>
    </div>
  </section>
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'FleetProfileAdmin',
  data() {
    return {
      fleet: {},
    }
  },
  created() {
    this.fetchFleet()
  },

  methods: {
    fetchFleet: function() {
      this.$http.get(env.URL + '/user/getFleet/'.concat(this.$route.params.fleetId)).then(response => {
        this.fleet = response.data.data.fleet
      })
    },
    editFleet: function() {
      this.$http.post(env.URL + '/admin/updateFleet', this.fleet, {
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
