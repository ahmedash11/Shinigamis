<template>
<div class="locationsAdmin">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Locations</h2>
      </header>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Facilities</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="location in locations">
              <td>
                <h3>{{location.title}}</h3>
                <p v-if="location.address">{{location.address}}</p>
                <p v-if="location.phone">Tel: {{location.phone}}</p>
                <p v-if="location.fax">Fax: {{location.fax}}</p>
                <p v-if="location.mobile">Mobile: {{location.mobile}}</p>
                <p v-if="location.email">Email: {{location.email}}</p>
              </td>
              <td>
                <td><button data-toggle="modal" data-target="#editLocation" class="button special" v-on:click="setSelectedLocation(location)">Edit</button>
                  <a v-on:click="deleteLocation(location._id)" class="button special">Delete</a></td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button data-toggle="modal" data-target="#addLocation" class="button special big" v-on:click="clearEntries()">Add a new location</button> </div>

    <!-- Modal -->
    <div class="modal fade" id="addLocation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Add Location</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addLocation()" role="form" style="display: block;">
                  <label class="test">Title</label>
                  <input type="text" name="title" placeholder="Title" v-model="title" required>
                  <label class="test">Address</label>
                  <input type="text" name="address" placeholder="Address" v-model="address">
                  <label class="test">Email</label>
                  <input type="email" name="email" placeholder="Email" v-model="email">
                  <label class="test">Phone</label>
                  <input type="text" name="phone" placeholder="Phone" v-model="phone">
                  <label class="test">Fax</label>
                  <input type="text" name="fax" placeholder="Fax" v-model="fax">
                  <label class="test">Mobile</label>
                  <input type="text" name="mobile" placeholder="Mobile" v-model="mobile">
                  <br>
                  <div>
                    <CENTER>
                      <button class="button special">Submit</button>
                    </CENTER>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="editLocation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="setSelectedLocation('')"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Edit Location</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="editLocation()" role="form" style="display: block;">
                  <label class="test">Title</label>
                  <input type="text" name="title" placeholder="Title" v-model="title" required>
                  <label class="test">Address</label>
                  <input type="text" name="address" placeholder="Address" v-model="address">
                  <label class="test">Email</label>
                  <input type="email" name="email" placeholder="Email" v-model="email">
                  <label class="test">Phone</label>
                  <input type="text" name="phone" placeholder="Phone" v-model="phone">
                  <label class="test">Fax</label>
                  <input type="text" name="fax" placeholder="Fax" v-model="fax">
                  <label class="test">Mobile</label>
                  <input type="text" name="mobile" placeholder="Mobile" v-model="mobile">
                  <div>
                    <br>
                    <CENTER>
                      <button class="button special">Submit</button>
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
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'locationAdmin',
  data() {
    return {
      locations: [],
      title: '',
      address: '',
      email: '',
      phone: '',
      fax: '',
      mobile: '',
      selectedLocation: ''
    }
  },
  methods: {
    fetchLocations: function() {
      this.$http.get(env.URL + '/user/getAllLocations').then(response => {
        this.locations = response.data.data.locations
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
    clearEntries: function() {
      this.title = ''
      this.address = ''
      this.email = ''
      this.phone = ''
      this.fax = ''
      this.mobile = ''
    },
    addLocation: function() {
      var newLocation = {
        title: this.title,
        address: this.address,
        email: this.email,
        phone: this.phone,
        fax: this.fax,
        mobile: this.mobile
      }
      this.$http.post(env.URL + '/admin/addLocation', newLocation, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $('#addLocation').modal('hide');
        alertify.notify(response.body.msg, 'success', 5);
        this.clearEntries()
        this.fetchLocations()
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
    },
    editLocation: function() {
      var locationId = this.selectedLocation._id
      var updatedLocation = {
        id: locationId,
        title: this.title,
        address: this.address,
        email: this.email,
        phone: this.phone,
        fax: this.fax,
        mobile: this.mobile
      }
      this.$http.post(env.URL + '/admin/updateLocation', updatedLocation, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $('#editLocation').modal('hide');
        alertify.notify(response.body.msg, 'success', 5);
        this.setSelectedLocation('')
        this.fetchLocations()

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
    deleteLocation: function(locationId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteLocation', {
          id: locationId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.fetchLocations()

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
    setSelectedLocation: function(location) {
      this.selectedLocation = location
      if (this.selectedLocation) {
        this.title = this.selectedLocation.title
        this.address = this.selectedLocation.address
        this.email = this.selectedLocation.email
        this.phone = this.selectedLocation.phone
        this.fax = this.selectedLocation.fax
        this.mobile = this.selectedLocation.mobile
      } else {
        this.clearEntries()
      }
    }
  },
  created() {
    this.fetchLocations()
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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






























































































































































































































































































































































































































































/* position the content inside the overlay */

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






























































































































































































































































































































































































































































/* position the close button (top right corner) */

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
tyle>
tyle>
