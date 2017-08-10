<template>
<div class="">
  <br>
  <br>
  <br>
  <br>
  <br>


  <header class="major">
    <h2>Announcements</h2>
  </header>

  <section id="cd-timeline" class="cd-container">
    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Title of section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">Jan 14</span>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-movie">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Title of section 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">Jan 18</span>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Title of section 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit,
          itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat
          aliquam sunt similique aut adipisci.</p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">Jan 24</span>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-location">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Title of section 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">Feb 14</span>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-location">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Title of section 5</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">Feb 18</span>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-movie">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Final Section</h2>
        <p>This is the content of the last section</p>
        <span class="cd-date">Feb 26</span>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->
  </section>
  <!-- cd-timeline -->
</div>
</template>

<script>
import env from '../env'
export default {
  name: 'Announcements',
  data() {
    return {
      Announcement: [],

    }
  },
  created() {
    this.getAnnouncements()
  },
  methods: {
    // Send a request to the login URL and save the returned JWT
    getAnnouncements: function() {
      this.$http.get(env.URL + '/admin/getAnnouncements').then(data => {
        this.Announcement = data.data.data.announcements
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}

#cd-timeline::before {
  /* this is the vertical line */
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #d7e4ed;
}

.cssanimations .cd-timeline-img.is-hidden {
  visibility: hidden;
}

.cssanimations .cd-timeline-img.bounce-in {
  visibility: visible;
  animation: cd-bounce-1 0.6s;
}

@keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  60% {
    opacity: 1;
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
