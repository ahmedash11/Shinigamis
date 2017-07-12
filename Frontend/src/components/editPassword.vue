<template>
<div class="editPassword">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Edit Password</h2>
      </header>

 <form role="form" class="" v-on:submit.prevent="editPassword()">
   
           <br><br>
      <div>
          <div>
          

            <div >
            <center>
                <div class="row">
                Enter Old Password:<input require="required"type="text" style="height:30px;font-size:10pt"class="form-control input-lg" id="myInput1" placeholder="Old Password" v-model="oldPassword" required="*"></input><br/>
                Enter New Password:<input type="text" style="height:30px;font-size:10pt"class="form-control input-lg" id="myInput2" placeholder="New Password" v-model="newPassword" required="*"></input><br/>
                Confirm New Password:<input type="text" style="height:30px;font-size:10pt"class="form-control input-lg" id="myInput3" placeholder="Confirm New Password" v-model="confirmNewPassword" required="*"></input>
                </div>
                </center>
            </div>

            <div class="modal-footer">
                <button class="button" style="margin-bottom:20px;">Update Password</button>
            </div>
          </div>
        </div>
       </form>

</div>
</section>
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'editPassword',
  data() {
    return {
      email:"",
      confirmNewPassword:"",
      oldPassword:"",
      newPassword:"",
    }
  },
  methods: {
    editPassword: function()
    {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change it!'
      }).then(() => {
          this.email = auth.getAdmin().email
            this.$http.post(env.URL+'/admin/editPassword', {"oldPassword":this.oldPassword,"newPassword":this.newPassword, "confirmNewPassword":this.confirmNewPassword,"email":this.email},{headers : {'jwt-token' : localStorage.getItem('id_token')}}).then(data => {
                swal(
            'Password Changed!',
            response.body.msg,
            'success'
          )
           
                confirmNewPassword=""
      oldPassword=""
      newPassword=""
                    }).catch(function(reason) {
                       
                    });
          })
    }
  }
,
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
</style>
