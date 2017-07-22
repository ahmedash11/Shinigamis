<template>
<div class="clientsPage">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Clients</h2>
      </header>
      <div class="box alt">
        <div class="row uniform">
          <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="client in clients">
                <img v-if="client.profileimg.path" :src="url+client.profileimg.path.replace('public','')">
              <img v-else src="/static/images/pic07.jpg">
            <h3>{{client.name}}</h3>
            <p>{{client.description}}</p>
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
  name: 'clientsPage',
  data() {
    return {
      clients: [],
      url:""
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
    this.url=env.URL;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.\34 u img {
  max-height: 100%;
  max-width: 100%;
}
</style>
