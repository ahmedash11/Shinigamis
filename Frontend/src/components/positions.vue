<template>
<section id="positions" class="wrapper style1 special fade-up">

  <div class="container">
    <header class="major">
      <h2>Positions</h2>
    </header>
    <div class="row">
      <section class=" 4u 6u(medium) 12u$(xsmall) " v-for="position in Positions">
        <h3>{{position.title }}</h3>
        <p>{{position.description}}</p>
        <router-link :to="{name:'Application', params: { position: position.title }}"> <button class="button special">Apply </button></router-link>
        <br>
        <br>
      </section>
    </div>
  </div>
</section>
</template>

<script>
import env from '../env'
export default {
  name: 'Positions',
  data() {
    return {
      Positions: []

    }
  },
  created() {
    this.getPositions()

  },
  methods: {
    getPositions: function() {
      this.$http.get(env.URL + '/user/getPositions').then(response => {
        this.Positions = response.data.data.positions
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
