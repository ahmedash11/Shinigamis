<template>
  <div class="navBar">
    <!-- Header -->
      <header id="header">
        <h1 id="logo"><a href="#">Rashied Maritime</a></h1>
        <nav id="nav">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li>
              <a href="#">Layouts</a>
              <ul>
                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                <li><a href="right-sidebar.html">Right Sidebar</a></li>
                <li><a href="no-sidebar.html">No Sidebar</a></li>
                <li>
                  <a href="#">Submenu</a>
                  <ul>
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                    <li><a href="#">Option 4</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="elements.html">Elements</a></li>
            <li v-if="!this.authenticated"><a  href="#" @click="openNav" class="button special" >Login</a></li>
            <li v-else><a  href="#" @click="logout" class="button special" >Logout</a></li>
          </ul>
        </nav>
        <!-- The overlay -->
<div id="myNav" class="overlay">

  <!-- Button to close the overlay navigation -->
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

  <!-- Overlay content -->
  <div class="overlay-content">
  <div class="container">
    <form class="form-group">
    <label>Email</label>
      <input class="test" type="email" name="email" v-model="email">
      <label>Password</label>
       <input type="password" name="password" v-model="password">

    </form>
    <div>

      <btn  href="#" @click="login" class="button special" >Login</btn>
            

    </div>
    </div>

  </div>

</div>


      </header>
    
    </div>
   
</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {
        email:"",
        password:"",
        authenticated:false
      }
    },
    created(){
      if(localStorage.getItem('id_token')!=null){
        this.authenticated=true;
      }
    },
    methods:{
      //open overlay
      openNav:function(){
        document.getElementById("myNav").style.width = "100%";

      },
      //close overlay
      closeNav:function(){
        document.getElementById("myNav").style.width = "0%";
      },
      // Send a request to the login URL and save the returned JWT
      login:function(){
          this.$http.post('http://localhost:3000/user/login',{email:this.email,password:this.password}).then(data=>{
            localStorage.setItem('id_token', data.body.data.token);
            this.authenticated=true;
            this.closeNav()
          })
      },
        // To log out, we just need to remove the token
      logout:function(){
          localStorage.removeItem('id_token');
          this.authenticated=false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
    padding-left: 100px;
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
