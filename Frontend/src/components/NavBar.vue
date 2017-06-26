<template>
<div class="navBar">
  <!-- Header -->
  <header id="header">
    <h1 id="logo"><a href="#">Rashied Maritime</a></h1>
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">About Us</router-link>
        </li>
        <li>
          <a href="#">Services & Fleets</a>
          <ul>
            <li>
              <router-link to="/">Services</router-link>
            </li>
            <li>
              <router-link to="/">Fleets</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/clients">Clients</router-link>
        </li>
        <li>
          <router-link to="/awards">Media & Awards</router-link>
        </li>
        <li v-if="!this.user.authenticated"><a @click="openNav" class="button special">Login</a></li>
        <li v-else><a @click="logout" class="button special">Logout</a></li>
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
            <label class="test">Email</label>
            <input type="email" name="email" placeholder="Enter Your Email.." v-model="email">
            <label class="test">Password</label>
            <input type="password" name="password" placeholder="Enter Your Password.." v-model="password">
          </form>

          <div>
            <button @click="login" class="button special">Login</button>
          </div>
        </div>

      </div>

    </div>


  </header>

</div>
</template>

<script>
import env from '../env'
import auth from '../auth'
export default {
  name: 'navBar',
  data() {
    return {
      email: "",
      password: "",
      user: auth.user,
      error: ''
    }
  },
  methods: {
    //open overlay
    openNav: function() {
      document.getElementById("myNav").style.width = "100%";
    },
    //close overlay
    closeNav: function() {
      document.getElementById("myNav").style.width = "0%";
    },
    // Send a request to the login URL and save the returned JWT
    login: function() {
      this.$http.post(env.URL + '/admin/authenticate', {
        email: this.email,
        password: this.password
      }).then((response) => {
        if (response.body.success) {
          let data = {
            token: response.body.data.token,
            admin: JSON.stringify(response.body.data.admin)
          }
          auth.login(data)
          this.closeNav();
          this.$router.push({
            path: 'admin'
          })
        } else {
          this.error = response.body.msg
        }
      })
    },
    // To log out, we just need to remove the token
    logout: function() {
      auth.logout();
    }
  },
  created() {
    auth.checkAuth();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.closebtn:hover {
  color: white;
}

.test {
  font-family: Helvetica, sans-serif;
}








































/* The Overlay (background) */

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9);
  /* Black w/opacity */
  overflow-x: hidden;
  /* Disable horizontal scroll */
  transition: 0.5s;
  /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}








































/* Position the content inside the overlay */

.overlay-content {
  position: relative;
  top: 25%;
  /* 25% from the top */
  width: 65%;
  /* 100% width */
  text-align: center;
  /* Centered text/links */
  margin-top: 30px;
  /* 30px top margin to avoid conflict with the close button on smaller screens */
  padding-left: 120px;
}








































/* The navigation links inside the overlay */

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  /* Display block instead of inline */
  transition: 0.3s;
  /* Transition effects on hover (color) */
}








































/* When you mouse over the navigation links, change their color */

.overlay a:hover,
.overlay a:focus {
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
  .overlay a {
    font-size: 20px
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
