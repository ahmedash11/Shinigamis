<template>
<div class="awardsAdmin">

  <section class="wrapper style1 special fade-up">
    <div class="container">

      <header class="major">
        <h2>Awards</h2>
      </header>

      <div class="box alt">
        <div class="row uniform">
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="Award in Awards">
            <img v-if="Award.profileimg.path" :src="url+Award.profileimg.path.replace('public','')">
            <img v-else src="/static/images/rms.jpg">
            <h3>{{Award.title}}</h3>
            <ul class="actions">
              <li><a class="button special" v-on:click="deleteAward(Award._id)">Delete</a></li>
            </ul>
          </section>

          <section class=" 4u 6u(medium) 12u$(xsmall) ">
            <CENTER>
              <button data-toggle="modal" data-target="#addAward" class="button special big" v-on:click="resetModal()">Add a new Award</button>
            </CENTER>
          </section>
        </div>
      </div>


    </div>

    <!-- Modal -->
    <div class="modal fade" id="addAward" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Add Award</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addAward()" role="form" style="display: block;" class="form-group">
                  <label class="test">Title</label>
                  <input type="text" name="title" placeholder="Title" v-model="title" required>

                  <label class="test">Upload Images</label>
                  <input ref="avatar" class="button special" type="file" name="avatar" id="awardPicture" v-on:change="upload($event.target.name, $event.target.files)" required>

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
  name: 'awardsAdmin',
  data() {
    return {
      Awards: [],
      title: '',
      image: '',
      selectedAward: '',
      formData: {},
      url: ""
    }
  },
  methods: {
    fetchAwards: function() {
      this.$http.get(env.URL + '/user/getAllAwards').then(response => {
        this.Awards = response.data.data.awards
        console.log(this.Awards)
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
    addAward: function() {
      var newAward = {
        title: this.title,
      }
      this.$http.post(env.URL + '/admin/addAward', newAward, {
        headers: auth.getAuthHeader()
      }).then(response => {
        $('#addAward').modal('hide');
        alertify.notify(response.body.msg, 'success', 5);
        this.formData.append("award_id", response.data.data.award._id)
        this.$http.post(env.URL + '/admin/AwardImage', this.formData, {
          headers: {
            'jwt-token': localStorage.getItem('id_token')
          }
        }).then(response => {
          this.fetchAwards()
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
    deleteAward: function(AwardId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteAward', {
          id: AwardId
        }, {
          headers: auth.getAuthHeader()
        }).then((response) => {
          swal(
            'Deleted!',
            response.body.msg,
            'success'
          )
          this.fetchAwards()

        }).catch((error) => {
          if (error.body.msg instanceof String || typeof error.body.msg === "string") {
            swal(
              'Oops...',
              error.body.msg,
              'error'
            ).then(() => {
              this.fetchAwards()
            })
          } else {
            for (var i = 0; i < error.body.msg.length; i++) {
              var msg = error.body.msg[i].msg
              alertify.notify(msg, 'error', 5);
            }
          }
        })
      }, (dismiss) => {})
    },
    upload: function(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      this.formData = formData

    },
    resetModal: function() {
      this.title = '';
      this.formData = {}
      var $el = $('#awardPicture');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
    }
  },
  created() {
    this.fetchAwards()
    this.url = env.URL
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
  min-height: 100%
}
</style>
