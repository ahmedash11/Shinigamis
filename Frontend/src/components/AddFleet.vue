<template>
<section id="contact" class="content-section text-center">
  <div class="contact-section">
    <div class="container">
      <h2>Application Form</h2>

      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form role="form" class="form-horizontal" v-on:submit.prevent="AddFleet()">
            <div class="form-group">
              <label for="exampleInputName2">Name</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Name" v-model="name">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Type</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Type" v-model="type">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Design</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Design" v-model="design">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Class</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Class" v-model="class">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail2">Built</label>
              <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Built" v-model="built">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Tonnage</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Tonnage" v-model="tonnage">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Draft</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Draft" v-model="draft">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Horsepower</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Horsepower" v-model="horsepower">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Deck Space</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Deck Space" v-model="deckSpace">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Deck Strength</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Deck Strength" v-model="deckStrength">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Deck Dimensions</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Deck Dimensions" v-model="deckDimensions">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Crane</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Crane" v-model="crane">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Accomodation</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Accomodation" v-model="accomadation">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Flag</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Flag" v-model="flag">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Bollard Pull</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Bollard Pull" v-model="bollardPull">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Fire Fighting</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Fire Fighting" v-model="fireFighting">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Mooring System</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Mooring System" v-model="mooringSystem">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Helideck</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Helideck" v-model="helideck">
            </div>

            <button type="submit" class="btn btn-default">Add Fleet</button>
          </form>
</section>
</template>

<script>
export default {
  name: 'AddFleet',
  data() {
    return {

      name: "",
      type: "",
      design: "",
      class: "",
      built: "",
      tonnage: "",
      draft: "",
      horsepower: "",
      deckSpace: "",
      deckStrength: "",
      deckDimensions: "",
      crane: "",
      accomadation: "",
      flag: "",
      bollardPull: "",
      fireFighting: "",
      mooringSystem: "",
      helideck: "",
      images: []

    }


  },
  methods: {


    // Send a request to the login URL and save the returned JWT
    AddFleet: function() {
      this.$http.post('http://localhost:3000/addFleet', {
        "title": this.name,
        "type": this.type,
        "design": this.design,
        "class": this.class,
        "built": this.built,
        "tonnage": this.tonnage,
        "draft": this.draft,
        "deckSpace": this.deckSpace,
        "deckSpace": this.deckSpace,
        "deckStrength": this.deckStrength,
        "deckDimensions": this.deckDimensions,
        "crane": this.crane,
        "accomadation": this.accomadation,
        "flag": this.flag,
        "bollardPull": this.bollardPull,
        "fireFighting": this.fireFighting,
        "helideck": this.helideck
      }, {
        headers: {
          'jwt-token': localStorage.getItem('id_token')
        }
      }).then(data => {

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
