// TODO: Fix positioning
<template>
<div class="awardsPage">

  <section id="awards">
    <div class="container">
      <header class="major">
        <h2>Awards</h2>
      </header>
      <carousel paginationActiveColor="#ffffff" paginationColor="#333333" :autoplay="true" :autoplayTimeout=2400 easing="linear" :speed=1000 :loop=true :navigationEnabled="true">
        <slide v-for="award in Awards">
          <img :src="url + award.profileimg.path.replace('public','')" class="imgcarousel">
          <h3>{{award.title}}</h3>
        </slide>
      </carousel>
    </div>
  </section>

</div>
</template>

<script>
import env from '../env'
import {
  Carousel,
  Slide
} from 'vue-carousel';
export default {
  name: 'awardsPage',
  data() {
    return {
      Awards: [],
      url: ""
    }
  },
  components: {
    Carousel,
    Slide
  },
  created() {
    this.fetchAwards()
    this.url = env.URL
  },
  updated() {
    $('.VueCarousel-navigation-button').css("border-bottom", "none")
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    fetchAwards: function() {
      this.$http.get(env.URL + '/user/getAllAwards').then(response => {
        this.Awards = response.data.data.awards
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
.imgcarousel {
  display: inline;
  margin: auto;
  height: 75%;
  width: 75%;
}
</style>
