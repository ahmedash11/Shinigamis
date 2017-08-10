<template>
<div class="positionAdmin">
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Position</h2>
      </header>

      <div class="row">
        <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="position in Positions">
          <h3>{{position.title }}</h3>
          <p>{{position.description}}</p>
          <ul class="actions">
            <li><a class="button special" v-on:click="deletePosition(position._id)">Delete</a></li>
          </ul>
        </section>

        <section class=" 4u 6u(medium) 12u$(xsmall) ">
          <CENTER>
            <button data-toggle="modal" data-target="#addPosition" class="button special big" v-on:click="resetModal()">Add a new Position</button>
          </CENTER>
        </section>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addPosition" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Add Position</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addPosition()" role="form" style="display: block;" class="form-group">
                  <label class="test">Title</label>
                  <input type="text" name="title" placeholder="Title" v-model="title" required>
                  <label class="test">Description</label>
                  <textarea type="text" name="Description" placeholder="Description" v-model="description" required></textarea>
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
  name: 'positionsAdmin',
  data() {
    return {
      Positions: [],
      title: '',
      description: ''

    }
  },
  created() {
    this.getPositions()

  },
  methods: {
    // Send a request to the login URL and save the returned JWT
    getPositions: function() {
      this.$http.get(env.URL + '/user/getPositions').then(response => {
        this.Positions = response.data.data.positions
      })
    },
    addPosition: function() {
      var newAward = {
        title: this.title,
        description: this.description
      }
      this.$http.post(env.URL + '/admin/addPosition', newAward, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $('#addPosition').modal('hide');
        alertify.notify(response.body.msg, 'success', 5);
        this.getPositions()
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
    deletePosition: function(PositionId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deletePosition', {
          id: PositionId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.getPositions()

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

    offerPosition: function(PositionId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to offer this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Offer this positions!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/offerPosition', {
          id: PositionId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Offered!',
            response.body.msg,
            'success'
          )
          this.getPositions()

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
    resetModal: function() {
      this.title = '';
      this.description = ''
    }
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

.closebtn:hover {
  color: white;
}

.test {
  font-family: Helvetica, sans-serif;
}
</style>
