<template>
<div class="editPassword">

  <!-- Four -->
  <section id="editPassword" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Edit Password</h2>
      </header>

      <form role="form" class="" v-on:submit.prevent="editPassword()">
        <center>
          <div class="6u 12u$(xsmall)">
            <label class="test">Current Password:</label>
            <input type="password" name="name" v-model="oldPassword" required>
          </div>

          <div class="6u 12u$(xsmall)">
            <label class="test">Password:</label>
            <input type="password" name="name" v-model="newPassword" required>
          </div>

          <div class="6u 12u$(xsmall)">
            <label class="test">Confirm Password:</label>
            <input type="password" name="name" v-model="confirmNewPassword" required>
          </div>
        </center>
        <br>
        <button class="button special" style="margin-bottom:20px;">Update Password</button>
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
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    }
  },
  methods: {
    editPassword: function() {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change it!'
      }).then(() => {
        let data = {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          confirmNewPassword: this.confirmNewPassword,
          email: auth.getAdmin().email
        }
        this.$http.post(env.URL + '/admin/editPassword', data, {
          headers: auth.getAuthHeader()
        }).then(response => {
          swal(
            'Password Changed!',
            response.body.msg,
            'success'
          )

          this.confirmNewPassword = ""
          this.oldPassword = ""
          this.newPassword = ""
        }).catch(function(error) {
          if (error.body.msg instanceof String || typeof error.body.msg === "string") {
            swal(
              'Oops...',
              error.body.msg,
              'error'
            );
          } else {
            if (error.body.msg.length == 1) {
              swal(
                'Oops...',
                error.body.msg[0].msg,
                'error'
              );
            } else {
              for (var i = 0; i < error.body.msg.length; i++) {
                var msg = error.body.msg[i].msg
                alertify.notify(msg, 'error', 5);
              }
            }
          }
        });
      })
    }
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
</style>
