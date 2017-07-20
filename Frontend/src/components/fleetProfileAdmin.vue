<template>
<div class="fleetProfileAdmin" align="center">
  <!-- <section id="four" class="wrapper style1 special fade-up"> -->
  <br>
  <br>

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
    <section id="content2">
      <div class="slick">
        <div v-for="image in images"><img :src="url + image.img.path.replace('public','')" alt="" /></div>
      </div>
    </section>
  </div>
  <!-- </section> -->
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
import '../assets/js/slick.min.js'
//import '../assets/js/arrive.min.js'
//import '../assets/js/lightgallery.min.js'
export default {
  name: 'fleetProfileAdmin',
  data() {
    return {
      fleet: {},
      images: [],
      url: '',
    }
  },
  created() {
    this.fetchFleet()
    this.getImages()
    this.url = env.URL
  },
  updated() {
    if ($('.slick').hasClass('slick-initialized')) {
      $('.slick').removeClass("slick-initialized slick-slider");
    }
    this.createSlick()
  },
  methods: {
    fetchFleet: function() {
      this.$http.get(env.URL + '/user/getFleet/'.concat(this.$route.params.fleetId)).then(response => {
        this.fleet = response.data.data.fleet
      })
    },
    getImages: function() {
      this.$http.get(env.URL + '/user/getImages/'.concat(this.$route.params.fleetId)).then(response => {
        this.images = response.data.data.images
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
    createSlick: function() {
      $('.slick').not('.slick-initialized').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    },
    destroySlick: function() {
      if ($('.slick').hasClass('slick-initialized')) {
        $('.slick').removeClass("slick-initialized slick-slider");
      }
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* external css: flickity.css */

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.carousel {
  background: #EEE;
}

.carousel img {
  display: block;
  height: 200px;
}

@media screen and ( min-width: 768px) {
  .carousel img {
    height: 400px;
  }
}

#tab1:checked~#content1,
#tab2:checked~#content2,
#tab3:checked~#content3,
#tab4:checked~#content4,
#tab5:checked~#content5 {
  display: block;
}

.tab_container .tab-content p,
.tab_container .tab-content h3 {
  -webkit-animation: fadeInScale 0.7s ease-in-out;
  -moz-animation: fadeInScale 0.7s ease-in-out;
  animation: fadeInScale 0.7s ease-in-out;
}

.tab_container .tab-content h3 {
  text-align: center;
}

.tab_container [id^="tab"]:checked+label {
  background: #1c1d26;
  box-shadow: inset 0 3px #e44c65;
}

.tab_container [id^="tab"]:checked+label .fa {
  color: #1c1d26;
}

label .fa {
  font-size: 1.3em;
  margin: 0 0.4em 0 0;
}


label {
  font-weight: 700;
  font-size: 18px;
  display: block;

  width: 20%;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}


section {
  clear: both;
  padding-top: 10px;
  display: none;
}




input[type=checkbox]+label:before,
input[type=radio]+label:before {
  border: 1px solid rgba(255, 255, 255, .3);
  content: '';
  display: none;
  height: 1.8em;
  left: 0;
  line-height: 1.725em;
  position: absolute;
  text-align: center;
  top: 0;
  width: 1.8em;
}


.spotlight.style1 .content {
  border-color: #191a22;
}
</style>
