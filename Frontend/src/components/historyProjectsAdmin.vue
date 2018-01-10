<template>
<div class="historyProjectsAdmin">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>History Projects</h2>
      </header>


      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Contracts Name & No.</th>
              <th>Marine Units</th>
              <th>Title of the Client</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects">
              <td>{{project.name}}</td>
              <td>{{project.unit}}</td>
              <td>{{project.clientName}}</td>
              <td><a v-on:click="deleteProject(project._id)" class="button special">Delete</a></td>
            </tr>
            <tr>
              <td><input type="text" name="name" placeholder="Contract Name" v-model="name"></td>
              <td><select name="unit" id="unit" v-model="unit">
                <option disabled value="">Marine Units</option>
                <option :value="fleet.name" v-for="fleet in fleets">{{fleet.name}}</option>
              </select></td>
              <td><select name="clientName" id="clientName" v-model="clientName">
                <option disabled value="">Client Name</option>
                <option :value="client.name" v-for="client in clients">{{client.name}}</option>
                <option value="Other">Other</option>
              </select>
                <div id="other">
                </div>
              </td>
              <td><button class="button special" v-on:click="addProject()">+</button></td>
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
  name: 'historyProjectsAdmin',
  data() {
    return {
      projects: [],
      clients: [],
      fleets: [],
      name: '',
      unit: '',
      clientName: ''
    }
  },
  watch: {
    clientName: function(val) {
      if (this.val = "Other") {
        document.getElementById('other').innerHTML = 'Other: <input type="text" name="other" />';
      } else {
        document.getElementById('other').innerHTML = '';
        $('#other').css("display", "none")
      }
    }
  },
  methods: {
    fetchProjects: function() {
      this.$http.get(env.URL + '/user/getAllProjects').then((response) => {
        this.projects = response.body.data.historyProjects
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
    fetchClients: function() {
      this.$http.get(env.URL + '/user/getAllClients').then(response => {
        this.clients = response.body.data.clients
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
    fetchFleets: function() {
      this.$http.get(env.URL + '/user/getAllFleets').then(response => {
        this.fleets = response.body.data.fleets
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
    addProject: function() {
      var newProject = {
        name: this.name,
        unit: this.unit,
        clientName: this.clientName
      }
      this.$http.post(env.URL + '/admin/addProject', newProject, {
        headers: auth.getAuthHeader()
      }).then((response) => {
        this.name = ''
        this.unit = ''
        this.clientName = ''
        alertify.notify('Project added successfully', 'success', 5);
        this.fetchProjects()

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
    deleteProject: function(projectId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteProject', {
          id: projectId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.fetchProjects()

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
    this.fetchProjects();
    this.fetchClients();
    this.fetchFleets();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.\34 u img {
  max-height: 100%;
  max-width: 100%;
}

article.special,
section.special {
  text-align: left;
  padding-left: 2.55em;
}

h3 {
  text-align: center;
}
</style>
