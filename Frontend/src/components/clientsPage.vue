<template>
<div class="clientsPage">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Clients</h2>
      </header>
      <section class="col-lg-12 col-md-12 col-sm-12 small-padding">
        <div class="row" v-for="client in clients">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div data-animation class="team-member">
              <img v-if="client.profileimg.path" :src="url+client.profileimg.path.replace('public','')">
              <img v-else src="/static/images/pic07.jpg">
            </div>
          </div>
          <div class="col-lg-8 col-md-6 col-sm-12">
            <h3>{{client.name}}</h3>
            <p>{{client.description}}</p>
            <br>

          </div>

        </div>
      </section>
    </div>
  </section>

</div>
</template>

<script>
import env from '../env'
export default {
  name: 'clientsPage',
  data() {
    return {
      clients: [],
      url: ""
    }
  },
  methods: {
    fetchClients: function() {
      this.$http.get(env.URL + '/user/getAllClients').then((response) => {
        if (response.body.success) {
          this.clients = response.body.data.clients
        } else {
          this.error = response.body.msg
        }
      })
    }
  },
  components: {},
  created: function() {
    this.fetchClients();
    this.url = env.URL;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.\34 u img {
  max-height: 100%;
  max-width: 100%;
}

img {
  height: auto;
}

img {
  max-width: 100%;
  border: none;
}

@media (min-width: 768px) .col-sm-12 {
  width: 100%;
}
</style>
