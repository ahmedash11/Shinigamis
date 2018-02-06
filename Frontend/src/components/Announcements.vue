<template>
<section id="announcements" class="wrapper style1 special fade-up">

  <div class="container">
    <header class="major">
      <h2>Announcements</h2>
    </header>
    <!-- Begin of rows -->
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12" v-for="Ann in announcements">
        <!-- Wrapper for slides -->
        <div class="crop" style="max-width:100%; max-height:100%;">
          <img v-if="Ann.profileimg.path" :src="url+Ann.profileimg.path.replace('public','')">
            <img src="/static/images/rms.jpg" v-else>
            <h2>{{Ann.createdAt}}</h2>
        </div>

        <div class="slide-content">
          <h4>{{Ann.title}}</h4>
          <p>
            {{Ann.content}}
          </p>
          <hr>
        </div>

      </div>
    </div>
  </div>
</section>
</template>

<script>
import env from '../env'
export default {
  name: 'Announcements',
  data() {
    return {
      announcements: [],
      url: ''
    }
  },
  created() {
    this.getAnnouncements()
    this.url=env.URL
  },
  methods: {
    // Send a request to the login URL and save the returned JWT
    getAnnouncements: function() {
      this.$http.get(env.URL + '/admin/getAnnouncements').then(data => {
        this.announcements = data.data.data.announcements
        console.log(this.announcements)
        this.announcements.sort(function(a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
        for (var i = 0; i < this.announcements.length; i++) {
          this.announcements[i].createdAt = this.formatDate(this.announcements[i].createdAt)
        }
      })
    },
    formatDate: function(date) {
      var date = new Date(date)
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
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
