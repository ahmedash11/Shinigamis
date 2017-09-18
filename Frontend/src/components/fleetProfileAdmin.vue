<template>
<div class="fleetProfileAdmin" align="center">
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
        <a class="button special" style="margin-bottom: 10px;" v-on:click="editFleet(fleet._id)">Update</a>
      </div>
    </section>

    <section id="content2">
      <div class="container">

        <div class="row" v-for=" image in images">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div data-animation class="team-member">
              <img :src="url + image.img.path.replace('public','')">
            </div>
          </div>

          <div class="col-lg-8 col-md-6 col-sm-12">
            <br>
            <br>
            <ul class="actions">
              <button type="button" name="button" class="button special" v-on:click="deletePic(image._id)">Delete</button>
              <button type="button" name="button" class="button special" v-on:click="makeProfilePic(image.img.path)">Make Prof Picture</button>
              <button type="button" name="button" class="button special" v-on:click="makeCoverPic(image.img.path)">Make Cover Picture</button>
            </ul>
          </div>

        </div>
        <div class="row">
          <div class="col-lg-12 col-md-6 col-sm-12">
            <button align="center" style="margin-bottom:25px;" data-toggle="modal" data-target="#addPic" class="button special" v-on:click="resetModal()">Add Picture</button>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="addPic" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">

            <!-- Modal header-->
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4><CENTER>Add Picture</CENTER></h4>
            </div>

            <!-- Modal body-->
            <div class="modal-body">
              <div class="row" style="border:none;">
                <div class="col-md-12">
                  <form @submit.prevent="addPic()" role="form" style="display: block;" class="form-group">
                    <div class="form-group">
                      <input ref="avatar" class="button special" type="file" name="avatar" id="addImage" v-on:change="upload($event.target.name, $event.target.files)" multiple="multiple" required>
                    </div>

                    <div>
                      <br>
                      <CENTER>
                        <input class="button special" type="submit" value="Upload">
                      </CENTER>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
  <!-- </section> -->
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
//import jQuery from 'jQuery'
export default {
  name: 'fleetProfileAdmin',
  data() {
    return {
      fleet: {},
      images: [],
      url: '',
      formData: [],
    }
  },
  created() {
    this.fetchFleet()
    this.getImages()
    this.url = env.URL
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

    makeProfilePic: function(path) {
      this.$http.post(env.URL + '/admin/makeProfilePic', {
        path: path,
        id: this.fleet._id
      }, {
        headers: auth.getAuthHeader()
      }).then(response => {
        console.log(response)
        alertify.notify(response.body.msg, 'success', 5);
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

    makeCoverPic: function(path) {
      this.$http.post(env.URL + '/admin/makeCoverPic', {
        path: path,
        id: this.fleet._id
      }, {
        headers: auth.getAuthHeader()
      }).then(response => {
        console.log(response)
        alertify.notify(response.body.msg, 'success', 5);
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

    deletePic: function(id) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d53',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deletePic', {
          id: id
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          console.log(response)
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.getImages()
        }).catch((error) => {
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
      }, (dismiss) => {})
    },

    upload: function(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });
      this.formData = formData
    },

    addPic: function() {
      this.formData.append("fleet_id", this.fleet._id)
      this.$http.post(env.URL + '/admin/addImage', this.formData, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $("#addPic").modal('hide');
        alertify.notify(response.body.msg, 'success', 5);
        this.getImages();
      })
    },

    resetModal: function() {
      this.formData = []
      var $el = $('#addImage');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tab1:checked~#content1,
#tab2:checked~#content2,
#tab3:checked~#content3,
#tab4:checked~#content4,
#tab5:checked~#content5 {
  display: block;
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

#scroll {
  position: fixed;
  bottom: 100px;
  right: 50px;
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

.\34 u img {
  max-height: 100%;
  max-width: 100%;
}


img {
  height: auto;
}

img {
  max-width: 100%;
  border: none;
}

@media (min-width: 768px) .col-sm-12 {
  width: 100%;
}
</style>
