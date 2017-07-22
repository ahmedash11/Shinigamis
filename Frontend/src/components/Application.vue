<template>
<section id="contact" class="content-section text-center">
<br>
<br>
<br>
<br>
<br>
<br>

  <div class="contact-section">
    <div class="container">
      <h2>Application Form</h2>

      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form role="form" class="form-horizontal" v-on:submit.prevent="sendApplication()" enctype="multipart/form-data">
            <div class="form-group">
              <label for="exampleInputName2">First Name</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="First Name" v-model="firstName">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Last Name</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Last Name" v-model="lastName">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Position</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Position" v-model="position">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Email</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Email" v-model="email">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail2">Address</label>
              <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Address" v-model="address">
            </div>
            <div class="form-group">
              <label for="exampleInputName2">Country</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="Country" v-model="country">
            </div>
<!--             <div class="form-group">
              <label for="exampleInputName2">Birthdate</label>
              <input type="date" class="form-control" id="exampleInputName2" v-model="birthdate">
            </div> -->
            <div class="form-group ">
              <label for="exampleInputText">Experience</label>
              <textarea class="form-control" placeholder="Experience" v-model="experience"></textarea>
            </div>
            <div class="form-group ">
              <label for="exampleInputText">Upload CV</label>
              <center><input ref="avatar" type="file" name="CV" id="avatar" v-on:change="upload($event.target.name, $event.target.files)" multiple="multiple"> </center>
            </div>
            <br>
            <button type="submit" class="button special">Apply</button>
          </form>
          </div>
          </div>
          </div>
          </div>
</section>
</template>

<script>
import env from '../env'
export default {
  name: 'Application',
  data() {
    return {

      firstName: "",
      lastName: "",
      position: "",
      phone: "",
      email: "",
      address: "",
      country: "",
      birthdate: "",
      experience: "",
      cv: "",
      formData:[]

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
      this.$http.post(env.URL+'/user/sendApplication' ,{
        "firstName": this.firstName,
        "lastName": this.lastName,
        "position": this.position,
        "phone": this.phone,
        "email": this.email,
        "address": this.address,
        "country": this.country,
        "birthdate": this.birthdate,
        "experience": this.experience,
        // "cv": this.cv
      }, {
        headers: {
          'jwt-token': localStorage.getItem('id_token')
        }
      }).then(data => {
        this.formData.append("app_id",data.data.data.newApplication._id)
          this.$http.post(env.URL+'/user/uploadCV',this.formData, {headers : {'jwt-token' : localStorage.getItem('id_token')}}).then(response => {
            
      })

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

input[type=email], input[type=password], input[type=text], select, textarea {
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
    width: 100%;}
</style>
