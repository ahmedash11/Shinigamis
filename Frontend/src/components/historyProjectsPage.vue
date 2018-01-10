<template>
<div class="historyProjectsPage">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Projects</h2>
      </header>


      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Contracts Name</th>
              <th>Marine Units</th>
              <th>Client Name</th>
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

</div>
</template>

<script>
import env from '../env'
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
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article.special,
section.special {
  text-align: left;
}
</style>
