<template>
<div class="admins">
  <!-- Admins Page -->
  <section id="admins" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Admins</h2>
      </header>

      <div class="table-wrapper">
        <table>

          <thead>
            <tr>
              <th>Email</th>
              <th>Super</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="admin in Admins">
              <td>{{admin.email}}</td>
              <td>{{admin.isSuper}}</td>
              <td><a v-on:click="deleteAdmin(admin._id)" class="button special">Delete</a></td>
            </tr>

            <tr>
              <td><input type="text" name="email" placeholder="Email" v-model="email"></td>
              <td><select v-model="isSuper">
                <option disabled value="">Super</option>
                <option :value="true" >True</option>
                <option :value="false" >False</option>
              </select></td>
              <td>
                <button class="button special" v-on:click="addAdmin()"><i id="loading" class="fa fa-plus" aria-hidden="true"></i></button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  </section>

</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'admins',
  data() {
    return {
      Admins: [],
      email: '',
      isSuper: ''
    }
  },
  methods: {
    fetchAdmins: function() {
      this.$http.get(env.URL + '/admin/admins').then((response) => {
        this.Admins = response.body.data.Admins
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
    addAdmin: function() {
      $('#loading').addClass('fa-circle-o-notch fa-spin fa-fw').removeClass('fa-plus')
      var newAdmin = {
        email: this.email,
        isSuper: this.isSuper
      }
      this.$http.post(env.URL + '/admin/addAdmin', newAdmin, {
        headers: auth.getAuthHeader()
      }).then((response) => {
        this.email = ''
        this.isSuper = ''
        alertify.notify(response.body.msg, 'success', 5);
        this.fetchAdmins()
        $('#loading').addClass('fa-plus').removeClass('fa-circle-o-notch fa-spin fa-fw')
      }).catch((error) => {
        $('#loading').addClass('fa-plus').removeClass('fa-circle-o-notch fa-spin fa-fw')
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
    deleteAdmin: function(adminId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteAdmin', {
          id: adminId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.fetchAdmins()

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
    }
  },
  components: {},
  created: function() {
    this.fetchAdmins();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.\34 u img {
  max-height: 100%;
  max-width: 100%;
}

article.special, section.special {
    text-align: left; 
    padding-left: 2.55em;
}

h3{
text-align: center;
}
</style>
