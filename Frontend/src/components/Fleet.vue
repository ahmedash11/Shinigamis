<template>
<div>

  <div class="tab_container">
    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1"><span>About</span></label>

    <input id="tab2" type="radio" name="tabs">
    <label for="tab2"><span>Images</span></label>

    <section id="content1" class="tab-content">
      <h3>{{Fleet.name}}</h3>
      <br></br>
      <p>
        <table class="table table-user-information">
          <tbody>
            <tr>

              <tr>
                <td>Type</td>
                <td>{{Fleet.type}}</td>
              </tr>
              <tr>
                <td>Design</td>
                <td>{{service.design}}</td>
              </tr>
              <tr>
                <td>Built</td>
                <td>{{user.built}}</td>
              </tr>
              <td>Tonnage</td>
              <td>{{service.tonnage}}
              </td>
            </tr>
            <tr>
              <td>Draft</td>
              <td>{{service.draft}}</td>
            </tr>
            <tr>
              <td>Horsepower</td>
              <td>{{service.horsepower}}</td>
            </tr>
            <tr>
              <td>Deck Space</td>
              <td>{{user.deckSpace}}</td>
            </tr>
            <td>Deck Strength</td>
            <td>{{service.deckStrength}}
            </td>
            </tr>
            <tr>
              <td>Deck Dimensions</td>
              <td>{{service.deckDimensions}}</td>
            </tr>
            <tr>
              <td>Crane</td>
              <td>{{service.Crane}}</td>
            </tr>

            <tr>
              <td>Accomodation</td>
              <td>{{user.accomodation}}</td>
            </tr>
            <td>Flag</td>
            <td>{{service.flag}}
            </td>
            </tr>
            <tr>
              <td>Bollard Pull</td>
              <td>{{service.bollardPull}}</td>
            </tr>
            <tr>
              <td>Fire Fighting</td>
              <td>{{service.fireFighting}}</td>
            </tr>
            <tr>
              <td>Mooring System</td>
              <td>{{user.mooringSystem}}</td>
            </tr>
            <td>Helideck</td>
            <td>{{service.helideck}}
            </td>
            </tr>

          </tbody>
        </table>
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
</template>

<script>
export default {
  name: 'Fleets',
  data() {
    return {
      Fleet: {},

    }
  },
  created() {
    getFleet()
  },

  methods: {


    // Send a request to the login URL and save the returned JWT
    getFleet: function() {
      this.$http.get('http://localhost:3000/getFleet').then(data => {
        this.Fleet = response.data.data.fleet
      })
    }
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
