<template>
<div class="fleetProfilePage">
  <!-- <section id="four" class="wrapper style1 special fade-up"> -->


  <header class="major">
    <h2>{{fleet.name}}</h2>
  </header>

  <div class="tab_container" align="center">

    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1"><span>About</span></label>

    <input id="tab2" type="radio" name="tabs">
    <label for="tab2"><span>Images</span></label>

    <section id="content1">
      <div class="container">
        <table>
          <tbody>
            <tr v-if="fleet.type">
              <td>Type</td>
              <td>{{fleet.type}}</td>
            </tr>
            <tr v-if="fleet.design">
              <td>Design</td>
              <td>{{fleet.design}}</td>
            </tr>
            <tr v-if="fleet.built">
              <td>Built</td>
              <td>{{fleet.built}}</td>
            </tr>
            <tr v-if="fleet.tonnage">
              <td>Tonnage</td>
              <td>{{fleet.tonnage}}</td>
            </tr>
            <tr v-if="fleet.draft">
              <td>Draft</td>
              <td>{{fleet.draft}}</td>
            </tr>
            <tr v-if="fleet.horsepower">
              <td>Horsepower</td>
              <td>{{fleet.horsepower}}</td>
            </tr>
            <tr v-if="fleet.deckSpace">
              <td>Deck Space</td>
              <td>{{fleet.deckSpace}}</td>
            </tr>
            <tr v-if="fleet.deckStrength">
              <td>Deck Strength</td>
              <td>{{fleet.deckStrength}}
              </td>
            </tr>
            <tr v-if="fleet.deckDimensions">
              <td>Deck Dimensions</td>
              <td>{{fleet.deckDimensions}}</td>
            </tr>
            <tr v-if="fleet.crane">
              <td>Crane</td>
              <td>{{fleet.Crane}}</td>
            </tr>
            <tr v-if="fleet.accomodation">
              <td>Accomodation</td>
              <td>{{fleet.accomodation}}</td>
            </tr>
            <tr v-if="fleet.flag">
              <td>Flag</td>
              <td>{{fleet.flag}}
              </td>
            </tr>
            <tr v-if="fleet.bollardPull">
              <td>Bollard Pull</td>
              <td>{{fleet.bollardPull}}</td>
            </tr>
            <tr v-if="fleet.fireFighting">
              <td>Fire Fighting</td>
              <td>{{fleet.fireFighting}}</td>
            </tr>
            <tr v-if="fleet.mooringSystem">
              <td>Mooring System</td>
              <td>{{fleet.mooringSystem}}</td>
            </tr>
            <tr v-if="fleet.helideck">
              <td>Helideck</td>
              <td>{{fleet.helideck}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="content2" class="tab-content">

      <div>
        <br>
        <p>
          <div class="container">
            <div class="row img-thumbnails">
              <div class="col-md-6" v-for=" image in Images">
                <a href="#">
              <img :src="'http://localhost:3000/'+image.img.path.replace('public','')">
          </a>
              </div>
            </div>

          </div>

        </p>

      </div>
    </section>
  </div>
  <!-- </section> -->
</div>
</template>

<script>
import env from '../env'
export default {
  name: 'fleetProfilePage',
  data() {
    return {
      fleet: {},
      Images: []

    }
  },
  created() {
    this.getFleet()
    this.getImages()
  },

  methods: {

    // Send a request to the login URL and save the returned JWT
    getFleet: function() {
      this.$http.get(env.URL + '/user/getFleet/'.concat(this.$route.params.fleetId)).then(response => {
        this.fleet = response.data.data.fleet
      })
    },
    getImages: function() {
      this.$http.get(env.URL + '/user/getImages/'.concat(this.$route.params.fleetId)).then(response => {
        console.log(response)
        this.Images = response.data.data.images
        console.log(this.Images)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
