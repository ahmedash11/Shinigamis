<template>
<div class="fleetsPage">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up" >
    <div class="container">

      <header class="major">
        <h2>Fleets</h2>
      </header>

      <div class="box alt" >
               <carousel paginationActiveColor="#FFFFFF" paginationColor="#333333" :autoplay="true" easing="linear" :speed=300 :loop=true>
    <slide v-for="fleet in fleets">
    <!-- <img :src="url + image.img.path.replace('public','')" class="imgcarousel"> -->
     <router-link :to="{ name : 'FleetProfilePage' , params: { fleetId : fleet._id }}">
   <img src="/static/images/OceanDrum.jpg" class="imgcarousel"></img>
   <h3>{{fleet.name}}</h3></router-link>
    </slide>
  </carousel>
            
          </div>
          </div> 
              
          </section>




    </div>

  </section>

</div>
</template>

<script>
import env from '../env'
import { Carousel, Slide } from 'vue-carousel';

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
  components:{
    Carousel,
    Slide
  },
  methods: {
    // Send a request to the login URL and save the returned JWT
    fetchFleets: function() {
      this.$http.get(env.URL + '/user/getAllFleets').then(response => {
        this.fleets = response.data.data.fleets
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container2 {
  margin: 4% auto;
  width: 210px;
  height: 140px;
  position: relative;
  perspective: 1000px;
}

#carousel {
  width: 130;
  height: 130;
  position: relative;
  transform-style: preserve-3d;
  animation: rotation 20s infinite linear;
}

#carousel:hover {
  animation-play-state: paused;
}

#carousel figure {
  display: block;
  width: 1000;
  height: 1000;
  position: absolute;
  overflow: hidden;
  left: 10px;
  top: 10px;
  background: black;
  overflow: hidden;
  border: solid 5px black;
}

#carousel figure:nth-child(1) {
  transform: rotateY(0deg) translateZ(288px);
}

#carousel figure:nth-child(2) {
  transform: rotateY(40deg) translateZ(288px);
}

#carousel figure:nth-child(3) {
  transform: rotateY(80deg) translateZ(288px);
}

#carousel figure:nth-child(4) {
  transform: rotateY(120deg) translateZ(288px);
}

#carousel figure:nth-child(5) {
  transform: rotateY(160deg) translateZ(288px);
}

#carousel figure:nth-child(6) {
  transform: rotateY(200deg) translateZ(288px);
}

#carousel figure:nth-child(7) {
  transform: rotateY(240deg) translateZ(288px);
}

#carousel figure:nth-child(8) {
  transform: rotateY(280deg) translateZ(288px);
}

#carousel figure:nth-child(9) {
  transform: rotateY(320deg) translateZ(288px);
}

img {
  -webkit-filter: grayscale(0);
  cursor: pointer;
  transition: all .5s ease;
  max-width: 90%;
  max-height: auto;
  height: auto;
  width: auto;
}



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
.imgcarousel {
  display: inline;
  margin: auto;
  height: 75%;
  width: 100%;
}
</style>
