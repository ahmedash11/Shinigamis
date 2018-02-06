<template>
<div class="AppNav">
  <!-- Header -->
  <section id="one" class="spotlight spot style1 left" style="background-size: 100%;" v-if="this.home">
    <header id="header">
      <h1 id="logo">
      <img src="/static/images/1Edit.png" class="rounded" align="left">
    </h1>

      <nav id="nav">
        <ul>
          <li>
            <a><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-info fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/aboutUs">About Us</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-ship fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/services">Services</router-link>
              </li>
              <li>
                <router-link to="/fleets">Fleets</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-anchor fa-2x" aria-hidden="true"></i></a>
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
            <a><i class="fa fa-trophy fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/awards">Awards</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-briefcase fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/apply">Apply Now</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-newspaper-o fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/announcements">Announcements</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-phone fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/contactUs">Overview</router-link>
              </li>
              <li>
                <router-link to="/locations">Locations</router-link>
              </li>
            </ul>
          </li>
          <li v-if="this.user.authenticated">
            <router-link to="/admin"><i class="fa fa-tachometer fa-2x" aria-hidden="true"></i></router-link>
          </li>
          <li v-if="!this.user.authenticated && this.secretlogin">
            <a @click="openNav"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
          </li>
          <li v-else-if="this.user.authenticated"> <a @click="logout"><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i></a>
          </li>
        </ul>
      </nav>

      <br>
      <br>

      <center>
        <h2 id="Welcome">Welcome to Rashied Maritime!</h2>
      </center>

    </header>

    <a href="#two" class="goto-next scrolly"></a>
  </section>

  <section id="one" class="spotlight style1 left" style="background-size: 100%;" v-if="!this.home">
    <header id="header">
      <h1 id="logo">
      <img src="/static/images/1Edit.png" class="rounded" align="left">
    </h1>

      <nav id="nav">
        <ul>
          <li>
            <a><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-info fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/aboutUs">About Us</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-ship fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/services">Services</router-link>
              </li>
              <li>
                <router-link to="/fleets">Fleets</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-anchor fa-2x" aria-hidden="true"></i></a>
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
            <a><i class="fa fa-trophy fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/awards">Awards</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-briefcase fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/apply">Apply Now</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-newspaper-o fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/announcements">Announcements</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a><i class="fa fa-phone fa-2x" aria-hidden="true"></i></a>
            <ul>
              <li>
                <router-link to="/contactUs">Overview</router-link>
              </li>
              <li>
                <router-link to="/locations">Locations</router-link>
              </li>
            </ul>
          </li>
          <li v-if="this.user.authenticated">
            <router-link to="/admin"><i class="fa fa-tachometer fa-2x" aria-hidden="true"></i></router-link>
          </li>
          <li v-if="!this.user.authenticated && this.secretlogin">
            <a @click="openNav"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
          </li>
          <li v-else-if="this.user.authenticated"> <a @click="logout"><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i></a>
          </li>
        </ul>
      </nav>

      <br>
      <br>

      <center>

      </center>

    </header>



  </section>

  <!-- The overlay -->
  <div id="myNav" class="overlay">

    <!-- Button to close the overlay navigation -->
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

    <!-- Overlay content -->
    <div class="overlay-content">
      <div class="container">
        <form class="form-group" @submit.prevent="login">
          <label class="test">Email</label>
          <input type="email" name="email" placeholder="Enter Your Email.." v-model="email" required>
          <label class="test">Password</label>
          <input type="password" name="password" placeholder="Enter Your Password.." v-model="password" required>
          <br>
          <input type="submit" class="button special">
        </form>
      </div>

    </div>

  </div>

  <router-view></router-view>

</div>
</template>

<script>
import env from './env'
import auth from './auth'
import router from './router'
export default {
  name: 'AppNav',
  data() {
    return {
      email: "",
      password: "",
      user: auth.user,
      secretlogin:false,
      home: true
    }
  },
  methods: {
    //open overlay
    openNav: function() {
      this.email = ""
      this.password = ""
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
        let data = {
          token: response.body.data.token,
          admin: JSON.stringify(response.body.data.admin)
        }
        auth.login(data)
        this.closeNav();
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
    // To log out, we just need to remove the token
    logout: function() {
      auth.logout();

    },
  },
  created() {
    if (this.$route.path === '/') {
      this.home = true
    } else {
      this.home = false
    }
    auth.checkAuth();
  },
  updated() {
    if (this.$route.path === '/') {
      this.home = true
    } else {
      this.home = false
    }
    if (this.$route.path === '/secretLogin') {
      this.secretlogin = true
    } else {
      this.secretlogin = false
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Welcome {
  font-family: 'Raleway', sans-serif;
  font-size: 45px;
  color: #000;
  font-weight: 600;
}

#banner:before {
  background-position: center;
  background-image: url(/static/images/RapidoGee.jpg);
  background-size: cover;
  position: relative;
  background-attachment: fixed;
}

#banner:after {
  display: block;
  height: 100%;
  position: absolute;
}

#one:before {
  background-position: center;
  background-image: url(/static/images/RapidoGee.jpg);
  background-size: cover;
  background-attachment: fixed;
}

img {
  height: auto;
}

img {
  max-width: 55%;
  border: none;
}

nav {
  position: fixed;
}

.spotlight {
  background-attachment: fixed;
  background-size: cover;
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, .25);
  height: 60vh;
  position: relative;
}

.spot {
  min-height: 100vh;
}

.closebtn:hover {
  color: #fff
}

.test {
  font-family: Helvetica, sans-serif
}

.overlay {
  height: 100%;
  width: 0%;
  position: fixed;
  z-index: 111;
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
  width: 100%;
  text-align: center;
  margin-top: 30px;
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

@media screen and (max-width: 736px) {
  #titleBar .title {
    display: none;
  }
}
</style>
