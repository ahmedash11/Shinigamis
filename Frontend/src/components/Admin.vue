<template>
  <div class="admin">
     <NavBar></NavBar>
     <Clients></Clients>
     <Projects></Projects>
  </div>
</template>

<script>
  import env from '../env'
  import NavBar from './navBar'
  import Clients from './clientsAdmin'
  import Projects from './historyProjectsAdmin'
  export default {
    name: 'admin',
    data() {
      return {}
    },
    methods: {},
    created() {},
    components: {
      NavBar,
      Clients,
      Projects
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .\34 u img {
    max-height: 100%;
    max-width: 100%;
  }

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
  /* position the content inside the overlay */

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
  /* position the close button (top right corner) */

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
