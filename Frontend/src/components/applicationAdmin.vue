<template>
<div class="ApplicationAdmin">

  <section class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>{{Application.firstName}} {{Application.lastName}}'s Application</h2>
      </header>

      <table>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>
              <h4>{{Application.firstName}}</h4></td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <h4>{{Application.lastName}}</h4></td>
          </tr>
          <tr>
            <td>Position</td>
            <td>
              <h4>{{Application.position}}</h4></td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <h4>{{Application.email}}</h4></td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <h4>{{Application.address}}</h4></td>
          </tr>
          <tr>
            <td>Birthdate</td>
            <td>
              <h4>{{Application.birthdate}}</h4></td>
          </tr>
          <tr>
            <td>Experience</td>
            <td>
              <h4>{{Application.experience}}</h4></td>
          </tr>
          <tr>
            <td>CV</td>
            <td>
              <i class="fa fa-file" aria-hidden="true" v-on:click="Open(Application.Cv)"></i>
            </td>
          </tr>
        </tbody>
      </table>

      <ul class="actions">
        <button class="button special" v-on:click="deleteApplication(Application._id)">Delete</button>
        <router-link :to="{name:'ApplicationsAdmin'}"> <button class="button special">View other applications </button></router-link>
      </ul>
    </div>

  </section>

</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
import router from '../router'
export default {
  name: 'ApplicationAdmin',
  data() {
    return {
      Application: {}
    }
  },
  methods: {
    Open: function(URL) {
      URL = env.URL.concat(URL.replace('public', ''))
      window.open(URL)
    },
    getApplication: function() {
      this.$http.get(env.URL + '/admin/getApplication/'.concat(this.$route.params.applicationId), {
        headers: auth.getAuthHeader()
      }).then(response => {
        this.Application = response.data.data.application
      })
    },
    deleteApplication: function(ApplicationId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteApplication', {
          id: ApplicationId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.$router.push({
            name: "ApplicationsAdmin"
          })
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
  },
  created() {
    this.getApplication()
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-file:hover {
  color: green
}
</style>
