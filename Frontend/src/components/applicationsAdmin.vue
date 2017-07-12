<template>
<div class="ApplicationsAdmin">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Applications</h2>
      </header>

      <div class="box alt">
        <div class="row uniform">
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="Application in Applications">
            
            <h3 id="name" data-toggle="modal" data-target=".my-modal">{{Application.firstName}} {{Application.lastName}}</h3>
              
            


           
            <ul class="actions">
              <i id="bin"class=" glyphicon glyphicon-trash" v-on:click="deleteApplication(Application._id)"></i> <i id="ok" class="glyphicon glyphicon-check"></i>
            </ul>
          </section>
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
  name: 'applicationsAdmin',
  data() {
    return {
      Applications: {}
    }
  },
  created(){
    this.fetchApplications()
  },
  methods: {
    hi:function(){
      console.log('hi')
    },
    fetchApplications: function() {
      this.$http.get(env.URL + '/admin/findApplications').then(response => {
        console.log("response"+ response)
        this.Applications = response.data.data.applications
        // console.log(this.Applications)
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
          this.fetchApplications()

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
    setSelectedApplication: function(Application) {
      this.selectedApplication = Application
      if (this.selectedApplication) {
        this.name = this.selectedApplication.name
        this.description = this.selectedApplication.description
      } else {
        this.name = ''
        this.description = ''
      }
    }
  },
  created() {
    this.fetchApplications()
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.modal-dialog {
  transform: none;
}*/
/*.modal-content {
  position: relative;
  background-color: #1c1d26;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}*/

.\34 u img { 
  max-height: 100%;   
  max-width: 100%; 
}
 #bin{   
  padding-right:50px;   
  cursor: pointer; 
  } 
  #ok:hover{   
    cursor: pointer;   
    color: green; }
#bin:hover{ 
  color:red; 
}
#name:hover{
  color:green;
}

</style>
