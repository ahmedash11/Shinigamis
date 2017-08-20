<template>
<div class="banner">
  <!-- <section id="four" class="wrapper style1 special fade-up"> -->

  <section id=banner v-bind:style="{ 'background-position': 'center 26.85px' ,'background-image':'url('+coverPic+')', 'background-size': '100%',
    'background-repeat': 'no-repeat'}">
    <div class="content">
      <header class="major">
        <div class="crop">
          <img :src="profilePic" class="img" />
        </div>
        <h2>{{fleet.name}}</h2>

      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>

  </section>

  <br>
  <br>



  <div class="tab_container" align="center">

    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1"><span>About</span></label>

    <input id="tab2" type="radio" name="tabs">
    <label for="tab2"><span>images</span></label>

    <section class="section" id="content1">
      <div class="container">
        <table>
          <tbody>
            <tr v-if="fleet.type">
              <td>Type</td>
              <td>{{fleet.type}}</td>
            </tr>
            <tr v-if="fleet.design">
              <td>Design</td>
              <td>{fleet.design}}</td>
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

    <section id="content2" class="section">
  <carousel paginationActiveColor="#000000" paginationColor="#332233" :autoplay="true" easing="linear" speed="500" loop="true">
    <slide v-for="image in images"><img :src="url + image.img.path.replace('public','')" class="imgcarousel"></slide>
  </carousel>
    </section>
</div>
</div>
    </section>
  </div>
</div>
</template>

<script>
import env from '../env'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'fleetProfilePage',
  data() {
    return {
      fleet: {},
      images: [],
      profilePic: "",
      coverPic: "",
      url: ''
    }
  },
  created() {
    this.getFleet()
    this.getImages()
    this.url = env.URL
  },
  components:{
     Carousel,
    Slide
  },

  updated() {
    this.reinitializeSlick()
  },
  methods: {
    getFleet: function() {
      this.$http.get(env.URL + '/user/getFleet/'.concat(this.$route.params.fleetId)).then(response => {
        this.fleet = response.data.data.fleet
        if (this.fleet.profilePic)
          this.profilePic = env.URL.concat(this.fleet.profilePic.replace('public', ''))
        if (this.fleet.coverPic)
          this.coverPic = env.URL.concat(this.fleet.coverPic.replace('public', ''))
      })
    },
    getImages: function() {
      this.$http.get(env.URL + '/user/getImages/'.concat(this.$route.params.fleetId)).then(response => {
        this.images = response.data.data.images
        if (this.images.length != 0) {
          if (!this.profilePic) {
            this.profilePic = env.URL.concat(this.images[0].img.path.replace('public', ''))
          }
          if (!this.coverPic) {
            this.coverPic = env.URL.concat(this.images[0].img.path.replace('public', ''))
          }
        }
      })
    },
    createSlick: function() {
      $('.slick').not('.slick-initialized').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: false
      });
    },
    destroySlick: function() {
      if ($('.slick').hasClass('slick-initialized')) {
        $('.slick').removeClass("slick-initialized slick-slider");
      }
    },
    reinitializeSlick: function() {
      if ($('.slick').hasClass('slick-initialized')) {
        $('.slick').removeClass("slick-initialized slick-slider");
      }

      this.createSlick();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner:after {
  background-color: rgba(23, 24, 32, .95);
  display: block;
  height: 100%;
  position: absolute;
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

.imgcarousel {
  display: inline;
  margin: auto;
  height: 100%;
  width: 100%;
}

.section {
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

.image-cropper {
  max-width: 100%;
  max-height: auto;
  width: auto;
  height: auto;
  position: relative;
  overflow: hidden;
}

.gallery {
  width: 500;
  height: 500;
  position: relative;
  overflow: hidden;
}

.img {
  display: inline;
  margin: auto;
  height: 100%;
  width: auto;
}

.crop {
  width: 400px;
  height: 350px;
  overflow: hidden;
}

.crop img {
  height: 50%;
  width: 100%;
  max-width: 100%;
  max-width: 100%;
}

.CarouImg {
  width: 600;
  height: 500;
  margin: -75px 0 0 -100px;
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.slick {
  width: 100%;
}
</style>
