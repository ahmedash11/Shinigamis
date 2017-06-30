<template>
<div class="navBar">
  <!-- Header -->
  <header id="header">
    <h1 id="logo"><a href="#">Rashied Maritime</a></h1>
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/"><i class="fa fa-home fa-2x" aria-hidden="true"></i></router-link>
        </li>
        <li>
          <router-link to="/aboutUs">About Us</router-link>
        </li>
        <li>
          <!-- <a>Services & Fleets</a> -->
          <i class="fa fa-ship fa-2x" aria-hidden="true"></i>
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
          <a href="#">Clients & Projects</a>
          <ul>
            <li>
              <router-link to="/clients">Clients</router-link>
            </li>
            <li>
              <router-link to="/projects">Projects</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/awards"><i class="fa fa-trophy fa-2x" aria-hidden="true"></i></router-link>
        </li>
        <li>
          <a>Contact Us</a>
          <ul>
            <li>
              <router-link to="/contactUs">Overview</router-link>
            </li>
            <li>
              <router-link to="/locations">Locations</router-link>
            </li>
          </ul>
        </li>
        <li v-if="!this.user.authenticated"><a @click="openNav" class="button special">Login</a></li>
        <li v-else><a @click="logout" class="button special">Logout</a></li>
      </ul>
    </nav>
    <router-view></router-view>
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
  color: #fff
}

.test {
  font-family: Helvetica, sans-serif
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: #000;
  background-color: rgba(0, 0, 0, .9);
  overflow-x: hidden;
  transition: .5s
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 65%;
  text-align: center;
  margin-top: 30px;
  padding-left: 120px
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: .3s
}

.overlay a:focus,
.overlay a:hover {
  color: #f1f1f1
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px
}

@media screen and (max-height:450px) {
  .overlay a {
    font-size: 20px
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px
  }
}
</style>
