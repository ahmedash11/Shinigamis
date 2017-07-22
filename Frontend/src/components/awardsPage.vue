<template>
<div class="awardsPage">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Awards</h2>
      </header>
      <div class="box alt">
        <div class="row uniform">
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="award in Awards">
                         <img v-if="award.profileimg.path" :src="url+award.profileimg.path.replace('public','')">
              <img v-else src="/static/images/pic07.jpg">
            <h3>{{award.title }}</h3>

          </section>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import env from '../env'
export default {
  name: 'awardsPage',
  data() {
    return {
      Awards: [],
      url:""
    }
  },
  components: {},
  created() {
    this.fetchAwards()
 this.url= env.URL

  },
  methods: {
    //open overlay

    // Send a request to the login URL and save the returned JWT
    fetchAwards: function() {
      this.$http.get(env.URL + '/user/getAllAwards').then(response => {
        this.Awards = response.data.data.awards
        console.log(this.Awards)
      }).catch(error => {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
