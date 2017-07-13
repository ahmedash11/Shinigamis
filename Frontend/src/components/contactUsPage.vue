<template>
<div class="contactUsPage">

  <!-- Four -->
  <section id="four" class="wrapper style1 special fade-up">
    <div class="container">
      <header class="major">
        <h2>Contact Us</h2>
      </header>


      <div class="table-wrapper">
        <table>
          <tbody>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-home" aria-hidden="true"></i> Headquarter Address</h3>
              </td>
              <td>{{info.address}}</td>
            </tr>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i> Email</h3></td>
              <td>{{info.email}}</td>
            </tr>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-phone-alt" aria-hidden="true"></i> Phone</h3>
                <td>
                  <div v-for="phone in info.phone">
                    {{phone}}
                    <br>
                  </div>
                </td>
            </tr>
            <tr>
              <td>
                <h3><i class="fa fa-mobile fa-2x" aria-hidden="true"></i> Mobile</h3>
                <td>
                  <div v-for="mobile in info.mobile">
                    {{mobile}}
                    <br>
                  </div>
                </td>
            </tr>
            <tr>
              <td>
                <h3><i class="fa fa-fax " aria-hidden="true"></i> Fax</h3>
                <td>
                  <div v-for="fax in info.fax">
                    {{fax}}
                    <br>
                  </div>
                </td>
            </tr>
            <tr>
              <td>
                <h3><i class="glyphicon glyphicon-user" aria-hidden="true"></i> Contact Persons</h3></td>
              <td>
                <div v-for="contactsPerson in info.contactsPersons">
                  {{contactsPerson}}
                  <br>
                </div>
              </td>
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
  name: 'contactUsPage',
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.fetchInfo()

  },
  methods: {
    fetchInfo: function() {
      this.$http.get(env.URL + '/user/getInfo').then(response => {
        this.info = response.data.data.info
      })
    }
  }
}
</script>

<style scoped>
</style>
