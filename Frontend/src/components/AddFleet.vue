<template>
<div class="addFleet">
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Add Fleet</h2>
      </header>

      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form role="form" class="form-horizontal" v-on:submit.prevent="AddFleet()">
            <div class="form-group">
              <label for="exampleInputName2">Name</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Name" v-model="name" required>
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
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Class" v-model="fleetclass">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail2">Built</label>
              <input type="text" class="form-control" id="exampleInputEmail2" placeholder="Built" v-model="built">
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
            <div class="form-group">
              <label for="exampleInputName2">Upload Images</label>
              <input ref="avatar" class="button special" type="file" name="avatar" id="avatar" v-on:change="upload($event.target.name, $event.target.files)" multiple="multiple">
            </div>
            <br>
            <br>
            <button id="btn" type="submit" class="button special">Add Fleet</button>
          </form>
        </div>
      </div>

    </div>
  </section>
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'addFleet',
  data() {
    return {
      name: "",
      type: "",
      design: "",
      fleetclass: "",
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
      fleet_id: "",
      formData: [],
      images: []
    }
  },
  methods: {
    // Send a request to the login URL and save the returned JWT
    AddFleet: function() {
      this.$http.post(env.URL + '/admin/addFleet', {
        "name": this.name,
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
        headers: auth.getAuthHeader()
      }).then(data => {
        console.log('data ' + data);
        console.log('formdata  ' + this.formData);
        this.formData.append("fleet_id", data.data.data.fleet._id)
        this.$http.post(env.URL + '/admin/upload', this.formData, {
          headers: {
            'jwt-token': localStorage.getItem('id_token')
          }
        }).then(response => {
          alertify.notify(response.body.msg, 'success', 5);

        })

      })

    },
    upload: function(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      this.formData = formData

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
