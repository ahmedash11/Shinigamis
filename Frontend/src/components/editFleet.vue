<template>
<div class="editFleet">
  <input id="tab1" type="radio" name="tabs" checked>
  <label for="tab1"><span>About</span></label>

  <input id="tab2" type="radio" name="tabs">
  <label for="tab2"><span>Images</span></label>

  <section id="content1" class="tab-content">
    <h3><input type="text" v-model="Fleet.name"></h3>
    <br></br>
    <p>
      <table class="table table-user-information">
        <tbody>
          <tr>

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
              <input type="text" v-model="Fleet.accomodation"></td>
            <input>
          </tr>
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
          <td>Helideck</td>
          <td>
            <input type="text" v-model="Fleet.helideck">
          </td>
          </tr>

        </tbody>
      </table>
      <button class="button special" v-on:click="editFleet"></button>
    </p>
  </section>

  <section id="content2" class="tab-content">

    <div>
      <br>


      <p>
        <div class="container" id="features">

          <div class="row">
            <div v-for=" image in Fleet.images">



            </div>
          </div>
        </div>
      </p>

    </div>
  </section>
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'EditFleet',
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
      this.$http.get('http://localhost:3000/user/getFleet/'.concat(this.$route.params.fleetId)).then(response => {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.closebtn:hover {
  color: white;
}

.test {
  font-family: Helvetica, sans-serif;
}


/* The Overlay (background) */

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9);
  /* Black w/opacity */
  overflow-x: hidden;
  /* Disable horizontal scroll */
  transition: 0.5s;
  /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}


/* Position the content inside the overlay */

.overlay-content {
  position: relative;
  top: 25%;
  /* 25% from the top */
  width: 65%;
  /* 100% width */
  text-align: center;
  /* Centered text/links */
  margin-top: 30px;
  /* 30px top margin to avoid conflict with the close button on smaller screens */
  padding-left: 120px;
}

/* The navigation links inside the overlay */

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  /* Display block instead of inline */
  transition: 0.3s;
  /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
tyle>
