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
           <router-link :to="{ name : 'FleetProfile' , params: { fleetId : fleet._id }}"> <img src="../../static/images/Ship1.jpeg"></img>
              <h3>{{fleet.name}}</h3></router-link>
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
      this.$http.get('http://localhost:3000/user/getAllFleets').then(response => {
        this.fleets = response.data.data.fleets
      })
    }
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
