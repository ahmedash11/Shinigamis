<template>
  <div class="container">

    <div>
      <CENTER>
        <H3>Fleets</H3>
      </CENTER>
        <ul >
          
            <li>

                <span>Name</span>
                <span>Type</span>
                
                <span>Actions</span>
                <span></span>
            </li>
            <li v-for="Fleet in Fleets">
                <span>{{Fleet.name}}</span>
                <span>{{Fleet.type}}</span>
                
                
                <span>
                    <div class="btn-group btn-group-xs" role="group" aria-label="...">
                        <button type="button" class="btn btn-default">Edit</button>
                        <button type="button" class="btn btn-default">Delete</button>
                    </div>
                </span>
                <span></span>
            </li>
      
           
        </ul>
        <button type="button" class="btn btn-default">Add Fleet</button>
    </div>

</div>
<br<br>

 <div class="container">

    <div>
      <CENTER>
        <H3>Clients</H3>
      </CENTER>
        <ul >
        
            <li>
                <span></span>
                <span>Name</span>
                <span>Actions</span>
                <span></span>
            </li>
            <li v-for="Client in Clients">
                <span><img src=""></span>
                <span>{{Client.name}}</span>
                
                <span>
                    <div class="btn-group btn-group-xs" role="group" aria-label="...">
                        <button type="button" class="btn btn-default">Edit</button>
                        <button type="button" class="btn btn-default" disabled>Delete</button>
                    </div>
                </span>
                <span></span>
            </li>
      
           
        </ul>
        <button type="button" class="btn btn-default">Add Client</button>
    </div>

</div>
<br><br>

 <div class="container">

    <div>
    <CENTER>
        <H3>Positions</H3>
      </CENTER>
        <ul >
        
            <li>
                
                <span>Name</span>
                
                <span>Actions</span>
                <span></span>
            </li>
            <li v-for="Position in Positions">
                <span>23</span>
                
                <span>
                    <div class="btn-group btn-group-xs" role="group" aria-label="...">
                        <button v-if="!{{Position.isOffered}}">Offer</button>
                        <button type="button" class="btn btn-default">Delete</button>
                    </div>
                </span>
                <span></span>
            </li>
      
           
        </ul>
        <a class="external" data-toggle="modal" data-target="#addPosition" style="cursor:pointer;"><span>Add Position</span></a>
        <button type="button" class="btn btn-default">Add Position</button>
    </div>

</div>
<br><br>

 <div class="container">

    <div>
    <CENTER>
        <H3>Awards</H3>
      </CENTER>
        <ul >
        
            <li>
                <span>Image</span>
                <span>Title</span>

                <span>Actions</span>
                <span></span>
            </li>
            <li v-for="Award in Awards">
                <span><img src=""></span>
                <span>{{Award.title}}</span>
               
                <span>
                    <div class="btn-group btn-group-xs" role="group" aria-label="...">
                        
                        <button type="button" class="btn btn-default" disabled>Delete</button>
                    </div>
                </span>
                <span></span>
            </li>
      
           
        </ul>
        <button type="button" class="btn btn-default">Add Award</button>
    </div>

</div>

    <div class="modal fade" id="addPosition" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="row" style ="border:none;">
        <div class="col-md-12">

                          <form @submit.prevent="AddPosition"  role="form" style="display: block;">
                  <div class="form-group">
                      <input  v-show="reset" type="text" name="email" id="email" tabindex="1" v-model="resetPWEmail" class="form-control efc" placeholder="Email" value="" required="true">
                    </div>
                     <div class="form-group">
                      
                      <TEXTAREA></TEXTAREA>
                    </div>

                  
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                          <input  type="submit"    class="form-control btn btn-login efc" value="Add Position">
                        </div>
                      </div>
                    </div>
                  </form>

              
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>

               <div class="modal fade" id="addClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="row" style ="border:none;">
        <div class="col-md-12">

                          <form @submit.prevent="AddClient"  role="form" style="display: block;">
                  <div class="form-group">
                      <input  v-show="reset" type="text" name="email" id="email" tabindex="1" v-model="resetPWEmail" class="form-control efc" placeholder="Email" value="" required="true">
                    </div>
                     <div class="form-group">
                      
                      <TEXTAREA></TEXTAREA>
                    </div>

                  
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                          <input  type="submit"    class="form-control btn btn-login efc" value="Add Client">
                        </div>
                      </div>
                    </div>
                  </form>

              
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>

               <div class="modal fade" id="addAward" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="row" style ="border:none;">
        <div class="col-md-12">

                          <form @submit.prevent="AddAward"  role="form" style="display: block;">
                  <div class="form-group">
                      <input  v-show="reset" type="text" name="email" id="email" tabindex="1" v-model="resetPWEmail" class="form-control efc" placeholder="Email" value="" required="true">
                    </div>
                     <div class="form-group">
                      
                      <TEXTAREA></TEXTAREA>
                    </div>

                  
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                          <input  type="submit"    class="form-control btn btn-login efc" value="Add Award">
                        </div>
                      </div>
                    </div>
                  </form>

              
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
     

</template>

<script>
  export default {
    name: 'Positions',
    data() {
      return {
        Positions:[],
        Clients:[],
        Fleets:[],
        Awards:[]
        
      }
    },
    created(){
      getPositions()
      getClients()
      getFleets()
      getAwards()
      
    },
    methods:{
      //open overlay
      
      // Send a request to the login URL and save the returned JWT
      getPositions:function(){
          this.$http.get('http://localhost:3000/getPositions').then(data=>{
         this.Positions = response.data.data.positions
          })
      },
      getClients:function(){
          this.$http.get('http://localhost:3000/getPositions').then(data=>{
         this.Clients = response.data.data.clients
          })
      },
      getFleets:function(){
          this.$http.get('http://localhost:3000/getFleets').then(data=>{
         this.Fleets = response.data.data.fleets
          })
      },
      getAwards:function(){
          this.$http.get('http://localhost:3000/getAwards').then(data=>{
         this.Awards = response.data.data.awards
          })
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
