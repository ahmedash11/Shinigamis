<template>
<div class="historyProjectsPage">
  <NavBar></NavBar>

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>History Projects</h2>
      </header>


      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Contracts Name & No.</th>
              <th>Marine Units</th>
              <th>Title of the Client</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects">
              <td>{{project.name}}</td>
              <td>{{project.unit}}</td>
              <td>{{project.clientName}}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>

  <Footer></Footer>
</div>
</template>

<script>
import env from '../env'
import NavBar from './navBar'
import Footer from './footer'
export default {
  name: 'historyProjectsPage',
  data() {
    return {
      projects: []

    }
  },
  created() {
    this.fetchProjects()

  },
  methods: {
    fetchProjects: function() {
      this.$http.get(env.URL + '/user/getAllProjects').then((response) => {
        this.projects = response.body.data.historyProjects
      }).catch((error) => {
        this.error = error
      })
    },
  },
  components: {
    NavBar,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
