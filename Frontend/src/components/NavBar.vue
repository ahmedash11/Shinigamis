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
        <li v-if="user.authenticated">
          <a href="#" class="button special" @click="logout">Logout</a>

        </li>
        <li v-else>
          <LoginModal :show.sync="showLoginModal">
          </LoginModal>
          <a href="#" id="show-login-modal" class="button special" @click="showLoginModal = true">Login</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
</template>

<script>
import auth from '../auth'
import LoginModal from './loginModal'
export default {
  name: 'navBar',
  data() {
    return {
      showLoginModal: false,
      user: auth.user
    }
  },
  methods: {
    logout: function() {
      auth.logout()
    }
  },
  components: {
    LoginModal,
  },
  created: function() {
    auth.checkAuth()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
