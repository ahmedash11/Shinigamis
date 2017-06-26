<template>
<div class="clientsAdmin">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Clients</h2>
      </header>

      <div class="box alt">
        <div class="row uniform">
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="client in clients">
            <img src="static/images/pic07.jpg"></img>
            <h3>{{client.name}}</h3>
            <p>{{client.description}}</p>
            <ul class="actions">
              <li><button data-toggle="modal" data-target="#editClient" class="button special" v-on:click="setSelectedClient(client)">Edit</button></li>
              <li><a class="button special" v-on:click="deleteClient(client._id)">Delete</a></li>
            </ul>
          </section>

          <section class=" 4u 6u(medium) 12u$(xsmall) ">
            <CENTER>
              <button data-toggle="modal" data-target="#addClient" class="button special big" v-on:click="setSelectedClient('')">Add a new client</button>
            </CENTER>
          </section>
        </div>
      </div>


    </div>

    <!-- Modal -->
    <div class="modal fade" id="editClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="setSelectedClient('')"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Edit Client</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="" role="form" style="display: block;">
                  <form class="form-group">
                    <label class="test">Name</label>
                    <input type="email" name="name" v-model="name">
                    <label class="test">Description</label>
                    <textarea type="text" name="description" v-model="description"></textarea>
                  </form>

                  <div>
                    <CENTER>
                      <button @click="editClient()" class="button special">Submit</button>
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
    <div class="modal fade" id="addClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="setSelectedClient('')"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Add Client</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addClient()" role="form" style="display: block;" class="form-group">
                  <label class="test">Name</label>
                  <input type="text" name="name" placeholder="Name" v-model="name" required>
                  <label class="test">Description</label>
                  <textarea type="text" name="description" placeholder="Description" v-model="description" required></textarea>
                  <div>
                    <br>
                    <CENTER>
                      <input class="button special" type="submit" value="Submit">
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
import NavBar from './navBar'
export default {
  name: 'clientsAdmin',
  data() {
    return {
      clients: [],
      name: '',
      description: '',
      selectedClient: '',
      error: ''
    }
  },
  methods: {
    fetchClients: function() {
      this.$http.get(env.URL + '/user/getAllClients').then(response => {
        this.clients = response.data.data.clients
      })
    },
    addClient: function() {
      var newClient = {
        name: this.name,
        description: this.description
      }
      this.$http.post(env.URL + '/admin/addClient', newClient, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $('#addClient').modal('hide');
        this.fetchClients()
      }).catch((err) => {
        this.error = err.body
      })
    },
    editClient: function() {
      var updatedClient = {
        id: this.selectedClient._id,
        name: this.name,
        description: this.description
      }
      this.$http.post(env.URL + '/admin/updateClient', updatedClient, {
        headers: auth.getAuthHeader()
      }).then(response => {
        if (response.body.success) {
          $('#editClient').modal('hide');
          this.fetchClients()
        } else {
          this.error = response.body.msg
        }
      })
    },
    deleteClient: function(clientId) {
      this.$http.post(env.URL + '/admin/deleteClient', {
        id: clientId
      }, {
        headers: auth.getAuthHeader()
      }).then((response) => {
        if (response.body.success) {
          this.fetchClients()
        } else {
          this.error = response.body.msg
        }
      })
    },
    setSelectedClient: function(client) {
      this.selectedClient = client
      if (this.selectedClient) {
        this.name = this.selectedClient.name
        this.description = this.selectedClient.description
      } else {
        this.name = ''
        this.description = ''
      }
    }
  },
  created() {
    this.fetchClients()
  },
  components: {
    NavBar
  }
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
