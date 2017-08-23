<template>
<div class="fleetsPage">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Fleets</h2>
      </header>

      <carousel-3d :inverse-scaling="1500" :space="800" :controls-visible="true" :startIndex="1">
        <slide v-for="(fleet, i) in fleets" :index="i" :key="i">
          <img src="/static/images/OceanDrum.jpg" class="imgcarousel"></img>
          <router-link :to="{ name : 'FleetProfilePage' , params: { fleetId : fleet._id }}">
            <h3>{{fleet.name}}</h3>
          </router-link>
        </slide>
      </carousel-3d>

    </div>
  </section>

</div>
</template>

<script>
import env from '../env'
import {
  Carousel3d,
  Slide
} from 'vue-carousel-3d';
export default {
  name: 'fleetsPage',
  data() {
    return {
      fleets: [],
    }
  },
  created() {
    this.fetchFleets()
  },
  updated() {
    $('.carousel-3d-container').css("height", "273px")
    $('.carousel-3d-controls>a').css("border-bottom", "none")
  },
  methods: {
    fetchFleets: function() {
      this.$http.get(env.URL + '/user/getAllFleets').then(response => {
        this.fleets = response.data.data.fleets
      })
    },
  },
  components: {
    Carousel3d,
    Slide
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  -webkit-filter: grayscale(0);
  cursor: pointer;
  transition: all .5s ease;
  max-width: 90%;
  max-height: auto;
  height: auto;
  width: auto;
}

.imgcarousel {
  display: inline;
  margin: auto;
  height: 75%;
  width: 100%;
}

.carousel-3d-slide {
  border-style: none;
  background-color: rgba(0, 0, 0, .0001);
  text-align: center;
}

.a {
  border-bottom: none;
}
</style>
