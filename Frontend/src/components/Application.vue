<template>
<section id="application" class="wrapper style1 special fade-up">

  <div class="container">
    <header class="major">
      <h2>Positions</h2>
    </header>
    <div class="container">
      <h2>Application Form</h2>

      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form role="form" class="form-horizontal" v-on:submit.prevent="sendApplication()" enctype="multipart/form-data">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" placeholder="First Name" v-model="firstName" required>
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="Last Name" v-model="lastName" required>
            </div>
            <div class="form-group">
              <label>Position</label>
              <input readonly type="text" class="form-control" v-model="position" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" placeholder="Email" v-model="email" required>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="text" class="form-control" placeholder="Phone" v-model="phone" required>
            </div>
            <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control" placeholder="Address" v-model="address" required>
            </div>
            <div class="form-group">
              <label>Birthdate</label>
              <input type="date" class="form-control" v-model="birthdate" style="background-color: #1c1d26;border: 1px solid #616167;" required>
            </div>
            <div class="form-group">
              <label>Experience</label>
              <textarea class="form-control" placeholder="Experience" v-model="experience" style="border: 1px solid #616167;" required></textarea>
            </div>
            <div class="form-group">
              <label>Upload CV</label>
              <center><input ref="avatar" type="file" name="CV" id="avatar" v-on:change="upload($event.target.name, $event.target.files)" multiple="multiple" required> </center>
            </div>
            <br>
            <button type="submit" class="button special" v-if="!loading">Apply</button>
            <button type="submit" class="button special" v-else><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import env from '../env'
import router from '../router'
export default {
  name: 'Application',
  data() {
    return {
      firstName: "",
      lastName: "",
      position: this.$route.params.position,
      phone: "",
      email: "",
      address: "",
      birthdate: "",
      experience: "",
      formData: [],
      loading: false
    }
  },
  methods: {
    upload: function(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      this.formData = formData

    },
    // Send a request to the login URL and save the returned JWT
    sendApplication: function() {
      this.loading = true
      this.$http.post(env.URL + '/user/sendApplication', {
        "firstName": this.firstName,
        "lastName": this.lastName,
        "position": this.position,
        "phone": this.phone,
        "email": this.email,
        "address": this.address,
        "birthdate": this.birthdate,
        "experience": this.experience,
        // "cv": this.cv
      }).then(data => {
        this.formData.append("app_id", data.data.data.app._id)
        this.$http.post(env.URL + '/user/uploadCV', this.formData).then(response => {
          this.loading = false
          alertify.notify(response.body.msg, 'success', 5);
          this.$router.push({
            path: '/positions'
          })
        }).catch((error) => {
          this.loading = false
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

      }).catch((error) => {
        this.loading = false
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=email],
input[type=password],
input[type=text],
select,
textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: border-color .2s ease-in-out;
  -webkit-transition: border-color .2s ease-in-out;
  -ms-transition: border-color .2s ease-in-out;
  transition: border-color .2s ease-in-out;
  background: 0 0;
  /* border-radius: 4px; */
  /* border: 1px solid rgba(255,255,255,.3); */
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
}
</style>
