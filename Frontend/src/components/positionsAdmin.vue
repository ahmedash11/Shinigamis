<template>
<div class="positionAdmin">
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Position</h2>
      </header>
     
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="position in Positions">
            
            <h3>{{position.title }}</h3>
            <p>{{position.description}}</p>
            <ul class="actions">
             <li v-if="!position.isOffered"><a class="button special" v-on:click="offerPosition(position._id)">Offer</a></li>
              <li><a class="button special" v-on:click="deletePosition(position._id)">Delete</a></li>
              
            </ul>
          </section>
          <section class=" 4u 6u(medium) 12u$(xsmall) ">
            <CENTER>
              <button data-toggle="modal" data-target="#addPosition" class="button special big">Add a new Position</button>
            </CENTER>
          </section>
     
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
        Positions:[],
        title:'',
        description:''
        
      }
    },
    created(){
      this.getPositions()
      
    },
    methods:{
      //open overlay
      
      // Send a request to the login URL and save the returned JWT
      getPositions:function(){
          this.$http.get('http://localhost:3000/user/getPositions').then(response=>{
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
        type: 'success',
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
    }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.closebtn:hover {
  color: white;
}
.test{
font-family: Helvetica, sans-serif;
}

/* The Overlay (background) */
.overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */    
    height: 100%;
    width: 0;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(0,0,0); /* Black fallback color */
    background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
    position: relative;
    top: 25%; /* 25% from the top */
    width: 65%; /* 100% width */
    text-align: center; /* Centered text/links */
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
    padding-left: 120px;
}

/* The navigation links inside the overlay */
.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block; /* Display block instead of inline */
    transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
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
    .overlay a {font-size: 20px}
    .overlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}
</style>
