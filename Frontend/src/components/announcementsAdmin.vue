<template>
<div class="announcementsAdmin">
  <section id="announcementsAdmin" class="wrapper style1 special fade-up">

    <div class="container">

      <header class="major">
        <h2>Announcements</h2>
      </header>


      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12" v-for="announcement in announcements">
          <!-- Wrapper for slides -->
          <div class="crop" style="max-width:100%; max-height:100%;">
            <img v-if="announcement.profileimg.path" :src="url+announcement.profileimg.path.replace('public','')">
            <img src="/static/images/rms.jpg" v-else>
            <h2>
              {{announcement.createdAt}}
            </h2>
          </div>

          <div class="slide-content">
            <h4>{{announcement.title}}</h4>
            <p>
              {{announcement.content}}
            </p>
            
            <i id="bin" class="glyphicon glyphicon-trash" @click="removeAnnouncement(announcement._id)"></i>

            <hr>
          </div>

        </div>
      </div>



    </div>

    <!-- Modal -->
    <div class="modal fade" id="announcements" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

          <!-- Modal header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4><CENTER>Add Announcement</CENTER></h4>
          </div>

          <!-- Modal body-->
          <div class="modal-body">
            <div class="row" style="border:none;">
              <div class="col-md-12">
                <form @submit.prevent="addAnnouncement()" role="form" style="display: block;" class="form-group">
                  <label class="test">Title</label>
                  <input type="text" name="title" placeholder="Title" v-model="title" required>
                  <br>
                  <label class="test">Content</label>
                  <textarea type="text" name="content" placeholder="Content" v-model="content" required></textarea>
                  <br>
                  <label class="test">Announcement Date</label>
                  <input type="date" style="color: #7e7f84; background-color: #1c1d26; border-color: #606066;" v-model="createdAt" required/>
                  <br>
                  <div class="form-group">
                    <label for="exampleInputName2">Upload Image</label>
                    <CENTER>
                      <input ref="avatar" class="button special" type="file" name="avatar" id="addAnnouncementImage" style="background-color: #1c1d26" v-on:change="upload($event.target.name, $event.target.files)">
                    </CENTER>
                  </div>

                  <div>
                    <br>
                    <CENTER>
                      <input class="button special" type="submit" value="Create">
                    </CENTER>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <section class=" 4u 6u(medium) 12u$(xsmall) ">
      <CENTER>
        <button id="scroll" data-toggle="modal" data-target="#announcements" class="button special" v-on:click="createFormData()">+</button>
      </CENTER>
    </section>
  </section>
</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'announcementsAdmin',
  data() {
    return {
      announcements: [],
      title: '',
      content: '',
      createdAt: '',
      formData: {},
      url: ''
    }
  },
  created() {
    this.url = env.URL
    this.getAnnouncements()
  },
  methods: {
    addAnnouncement: function() {
      this.formData.append("title", this.title)
      this.formData.append("content", this.content)
      this.formData.append("createdAt", this.createdAt)
      this.$http.post(env.URL + '/admin/addAnnouncement', this.formData, {
        headers: auth.getAuthHeader()
      }).then(response => {
        this.title = '';
        this.content = '';
        this.createdAt = '';
        $("#announcements").modal('hide');
        swal(
          'Announcement Posted!',
          "",
          'success'
        )
        this.getAnnouncements();
      }).catch((error) => {
        this.createFormData()
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
    removeAnnouncement: function(announcementId) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post(env.URL + '/admin/deleteAnnouncement', {
          id: announcementId
        }, {
          headers: auth.getAuthHeader()
        }).then(data => {
          this.getAnnouncements();
          swal(
            'Deleted!',
            "",
            'success'
          )
        })
      })
    },
    createFormData: function() {
      this.title = '';
      this.content = '';
      this.createdAt = '';
      var $el = $('#addAnnouncementImage');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
      this.formData = {}
      this.formData = new FormData()
    },
    upload: function(fieldName, fileList) {
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        this.formData.append(fieldName, fileList[x], fileList[x].name);
      });
    },
    getAnnouncements: function() {
      this.$http.get(env.URL + '/admin/getAnnouncements').then(data => {
        this.announcements = data.data.data.announcements
        this.announcements.sort(function(a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
        for (var i = 0; i < this.announcements.length; i++) {
          this.announcements[i].createdAt = this.formatDate(this.announcements[i].createdAt)
        }
      })
    },
    formatDate: function(date) {
      var date = new Date(date)
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
  }
}
</script>
<style scoped>
#scroll {
  position: fixed;
  bottom: 100px;
  right: 50px;
}

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

.image-cropper {
  width: 130;
  height: 130;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}


img {
  display: inline;
  margin: auto;
  height: 100%;
  width: auto;
}

.\34 u img {
  max-height: 100%;
  max-width: 100%;
}

#bin:hover {
  color: red;
}
</style>
