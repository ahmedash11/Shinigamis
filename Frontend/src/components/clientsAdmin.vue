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
            <img :src="'http://localhost:3000/'+client.profileimg.path.replace('public','')">
            <h3>{{client.name}}</h3>
            <p>
              {{client.description}}
            </p>
            
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
                <form @submit.prevent="editClient()" role="form" style="display: block;">
                  <label class="test">Name</label>
                  <input type="text" name="name" v-model="name" required>

                  <label class="test">Description</label>
                  <textarea type="text" name="description" v-model="description" required></textarea>

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
    <div class="modal fade" id="addClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
              <div class="form-group">
              <label for="exampleInputName2">Upload Images</label>
             <input ref="avatar" class="button special" type="file" name="avatar" id="avatar" v-on:change="upload($event.target.name, $event.target.files)" multiple="multiple"> 
            </div>
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
export default {
  name: 'clientsAdmin',
  data() {
    return {
      clients: [],
      name: '',
      description: '',
      selectedClient: '',
      formData:{}
    }
  },
  methods: {
    fetchClients: function() {
      this.$http.get(env.URL + '/user/getAllClients').then(response => {
        this.clients = response.data.data.clients
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
    addClient: function() {
      var newClient = {
        name: this.name,
        description: this.description
      }
      this.$http.post(env.URL + '/admin/addClient', newClient, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $('#addClient').modal('hide');
        alertify.notify(response.body.msg, 'success', 5);
         this.formData.append("client_id",response.data.data.client._id)
         this.$http.post(env.URL+'/admin/ClientImage',this.formData, {headers : {'jwt-token' : localStorage.getItem('id_token')}}).then(response => {
            
      })
        this.fetchClients()
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
    editClient: function() {
      var updatedClient = {
        id: this.selectedClient._id,
        name: this.name,
        description: this.description
      }
      this.$http.post(env.URL + '/admin/updateClient', updatedClient, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $('#editClient').modal('hide');
        alertify.notify(response.body.msg, 'success', 5);
        this.fetchClients()

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
    deleteClient: function(clientId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteClient', {
          id: clientId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.fetchClients()

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
    setSelectedClient: function(client) {
      this.selectedClient = client
      if (this.selectedClient) {
        this.name = this.selectedClient.name
        this.description = this.selectedClient.description
      } else {
        this.name = ''
        this.description = ''
      }
    }, upload: function(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();
        // append the files to FormData
        Array.from(Array(fileList.length).keys()).map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });
        
        this.formData = formData
       
    }
  },
  created() {
    this.fetchClients()
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
