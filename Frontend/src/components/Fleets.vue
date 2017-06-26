<template>
<div class="row">


  <div class="col-md-3" v-for="fleet in Fleets">
    <div>
      <div>
        <h3>fleet.name <span>
          fleet.type</span>
          </h3>
        <h4>
          </h4>
      </div>
      <ul>

      </ul>
      <div>

        <a>
          View More
          </a>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div class="my-list">
        <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="dsadas" />
        <h3>HP Core i3 6th Gen</h3>
        <span>RS:45K</span>
        <span class="pull-right">SKU:100022</span>
        <div class="offer">Extra 5% Off. Cart value Rs 500</div>
        <div class="detail">
          <p>Glyphicons in Bootstrap : Bootstrap Includes over 250 glyphs in font format </p>
          <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="dsadas" />
          <a href="#" class="btn btn-info">Add To Cart</a>
          <a href="#" class="btn btn-info">Deatil</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Fleets',
  data() {
    return {
      Fleet: [],


    },
    created() {
      getFleets()
    }
  },
  methods: {
    //open overlay

    // Send a request to the login URL and save the returned JWT
    getFleets: function() {
      this.$http.get('http://localhost:3000/getFleets').then(data => {
        this.Fleets = response.data.data.fleets
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
