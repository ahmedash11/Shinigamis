<template>
<div class="awardsPage">
  <NavBar>
  </Navbar>

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Awards</h2>
      </header>
      <div class="box alt">
        <div class="row uniform">
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="award in Awards">
            <img src="static/images/pic07.jpg"></img>
            <h3>{{award.title }}</h3>
            
          </section>
        </div>
      </div>
    </div>
  </section>

  <Footer></Footer>
</div>
</template>

<script>
import NavBar from './navBar'
import Footer from './footer'
export default {
  name: 'awardsPage',
  data() {
    return {
      Award:[],
    }
  },
  components: {
    NavBar,
    Footer
  },
  created(){
      getAwards()
      
    },
    methods:{
      //open overlay
      
      // Send a request to the login URL and save the returned JWT
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

</style>
