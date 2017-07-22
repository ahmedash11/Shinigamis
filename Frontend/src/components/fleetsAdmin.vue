<template>
<div class="fleetsAdmin">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Fleets</h2>
      </header>

      <div class="box alt">
        <div class="row uniform">

          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="fleet in fleets">
            <img src="/static/images/OceanDrum.jpg"></img>
            <router-link :to="{ name : 'FleetProfileAdmin' , params: { fleetId : fleet._id }}">
              <h3>{{fleet.name}}</h3>
            </router-link>
            <a class="button special" v-on:click="deleteFleet(fleet._id)">Delete</a>
          </section>

          <section class=" 4u 6u(medium) 12u$(xsmall) ">
            <CENTER>
              <router-link :to="{name : 'AddFleet'}"><button id="btn" class="button special big">Add a new fleet</button></router-link>
            </CENTER>
          </section>

        </div>
      </div>


    </div>

  </section>

</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'fleetsAdmin',
  data() {
    return {
      fleets: [],


    }
  },
  created() {
    this.fetchFleets()
  },
  methods: {
    // Send a request to the login URL and save the returned JWT
    fetchFleets: function() {
      this.$http.get(env.URL + '/user/getAllFleets').then(response => {
        this.fleets = response.data.data.fleets
      })
    },
    deleteFleet: function(fleetId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d53',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteFleet', {
          id: fleetId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.fetchFleets()

        }).catch((error) => {
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
      }, (dismiss) => {})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-content {
  position: relative;
  background-color: #1c1d26;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}

.\34 u img {
  max-height: 100%;
  max-width: 100%;
}
</style>
