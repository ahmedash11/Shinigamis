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
        <table class="table table-Fleet-information">
          <tbody>
            <tr>

              <tr>
                <td>Type</td>
                <td>{{Fleet.type}}</td>
              </tr>
              <tr>
                <td>Design</td>
                <td>{{Fleet.design}}</td>
              </tr>
              <tr>
                <td>Built</td>
                <td>{{Fleet.built}}</td>
              </tr>
              <td>Tonnage</td>
              <td>{{Fleet.tonnage}}
              </td>
            </tr>
            <tr>
              <td>Draft</td>
              <td>{{Fleet.draft}}</td>
            </tr>
            <tr>
              <td>Horsepower</td>
              <td>{{Fleet.horsepower}}</td>
            </tr>
            <tr>
              <td>Deck Space</td>
              <td>{{Fleet.deckSpace}}</td>
            </tr>
            <td>Deck Strength</td>
            <td>{{Fleet.deckStrength}}
            </td>
            </tr>
            <tr>
              <td>Deck Dimensions</td>
              <td>{{Fleet.deckDimensions}}</td>
            </tr>
            <tr>
              <td>Crane</td>
              <td>{{Fleet.Crane}}</td>
            </tr>

            <tr>
              <td>Accomodation</td>
              <td>{{Fleet.accomodation}}</td>
            </tr>
            <td>Flag</td>
            <td>{{Fleet.flag}}
            </td>
            </tr>
            <tr>
              <td>Bollard Pull</td>
              <td>{{Fleet.bollardPull}}</td>
            </tr>
            <tr>
              <td>Fire Fighting</td>
              <td>{{Fleet.fireFighting}}</td>
            </tr>
            <tr>
              <td>Mooring System</td>
              <td>{{Fleet.mooringSystem}}</td>
            </tr>
            <td>Helideck</td>
            <td>{{Fleet.helideck}}
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
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'Fleets',
  data() {
    return {
      Fleet: {},
      Images:[]

    }
  },
  created() {
    this.getFleet()
    this.getImages()
  },

  methods: {


    // Send a request to the login URL and save the returned JWT
    getFleet: function() {
      this.$http.get('http://localhost:3000/user/getFleet/'.concat(this.$route.params.fleetId)).then(response => {
        this.Fleet = response.data.data.fleet
        
      })
    },
     getImages: function() {
      this.$http.get('http://localhost:3000/user/getImages/'.concat(this.$route.params.fleetId)).then(response => {
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

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4,
#tab5:checked ~ #content5 {
  display: block;
  
  
}

.img-thumbnails .img-thumbnail {
    margin-top: 15px;
}

.tab_container .tab-content p,
.tab_container .tab-content h3 {
  -webkit-animation: fadeInScale 0.7s ease-in-out;
  -moz-animation: fadeInScale 0.7s ease-in-out;
  animation: fadeInScale 0.7s ease-in-out;
}
.tab_container .tab-content h3  {
  text-align: center;
}

.tab_container [id^="tab"]:checked + label {
  background: #1c1d26;
  box-shadow: inset 0 3px #e44c65;
}

.tab_container [id^="tab"]:checked + label .fa {
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
  float: left;
  width: 20%;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  
}


input, section {
  clear: both;
  padding-top: 10px;
  display: none;
}




input[type=checkbox]+label:before, input[type=radio]+label:before {
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
