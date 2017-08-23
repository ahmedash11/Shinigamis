<template>
<div class="announcementsAdmin">
  <section id="announcementsAdmin" class="wrapper style1 special fade-up">

    <div class="container">

      <header class="major">
        <h2>Announcements</h2>
      </header>


      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12" v-for="Ann in Announcement">
          <!-- Wrapper for slides -->
          <div class="crop" style="max-width:100%; max-height:100%;">
            <img src="/static/images/rms.jpg" alt="Image">
          </div>

          <div class="slide-content">
            <h4>{{Ann.title}}</h4>
            <p>
              {{Ann.content}}
            </p>
            <i id="bin" class="glyphicon glyphicon-trash" @click="remove(Ann)"></i>

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
        <button id="scroll" data-toggle="modal" data-target="#announcements" class="button special">+</button>
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
      Announcement: [],
      title: '',
      content: ''
    }
  },
  created() {
    this.getAnnouncements()

  },
  methods: {
    addAnnouncement: function() {
      this.$http.post(env.URL + '/admin/addAnnouncement', {
        title: this.title,
        content: this.content
      }, {
        headers: {
          'jwt-token': localStorage.getItem('token')
        }
      }).then(response => {
        this.title = '';
        this.content = '';
        $("#announcements").modal('hide');
        swal(
          'Announcement Posted!',
          "",
          'success'
        )
        this.getAnnouncements();

      })

    },
    remove: function(a) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.$http.post('http://localhost:3000/admin/deleteAnnouncement', {
          id: a._id
        }, {
          headers: {
            'jwt-token': localStorage.getItem('id_token')
          }
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
    getAnnouncements: function() {
      this.$http.get('http://localhost:3000/admin/getAnnouncements').then(data => {
        this.Announcement = data.data.data.announcements
      })
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
