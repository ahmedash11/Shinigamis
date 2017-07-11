<template>
<div class="container">
  <div class="row">
<!--     <div class="col-xs-8 col-xs-offset-2">
 -->      <center><h4>Announcements</h4></center>
<!--     </div>
 -->  <!-- </div> -->
  <div class="container">
 <button data-toggle="modal" data-target="#announcements" class="button special">+</button>

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
  </div>
  </div>
  <!-- Begin of rows -->
  <div v-for="Ann in Announcement">
    <div class="col-xs-8 col-xs-offset-2 slide-row">
      <div>


        <!-- Wrapper for slides -->
        <div>
          <div>
            <img src="/static/images/signature-pic.jpg" alt="Image">
          </div>
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
      <br>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Announcements',
  data() {
    return {
      Announcement: [],
      title:'',
      content:''
    }
  },
  created() {
    this.getAnnouncements()

  },
  methods: {
    addAnnouncement: function(){
      this.$http.post('http://localhost:3000/admin/addAnnouncement',{title:this.title,content:this.content},{headers:{'jwt-token':localStorage.getItem('id_token')}}).then(data=>{
        this.title='';
        this.content='';
        $("#announcements").modal('hide');
         swal(
            'Announcement Posted!',
            "",
            'success'
          )
        this.getAnnouncements();

      })

    },
    remove: function(a){
       swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(()=>{
      this.$http.post('http://localhost:3000/admin/deleteAnnouncement',{id:a._id},{headers:{'jwt-token':localStorage.getItem('id_token')}}).then(data=>{
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
.container{
  padding-top: 20px;
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

.\34 u img {
  max-height: 100%;
  max-width: 100%;
  }
  #bin:hover{
    color: red;

  }
</style>
