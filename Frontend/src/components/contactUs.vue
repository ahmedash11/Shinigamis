<template>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <div>
        <h3><i class="glyphicon glyphicon-home"></i> Headquarter Address</h3>
        <p>{{Info.address}}</p>
        <br />
        <br />
        <h3><i class="glyphicon glyphicon-envelope"></i> Email</h3>
        <p>{{Info.email}}</p>
        <br />
        <br />


        <h3><i class="glyphicon glyphicon-phone-alt"></i> Phone</h3>
        <p v-for="phone in Info.phone">{{phone}}</p>

        <br />
        <br />
        <h3><i class="glyphicon glyphicon-iphone"></i> Mobile</h3>
        <p v-for="mob in Info.mobile">{{mob}}</p>

        <br />
        <br />

        <h3><i class="glyphicon glyphicon-fax"></i> Fax</h3>
        <p v-for="fax in Info.fax">{{fax}}</p>

        <br />
        <br />

        <h3><i class="glyphicon glyphicon-user"></i> Contact Persons</h3>
        <p> Eng. Mahmoud Rashied -Chairman Eng. Ahmed Rashied - Vice Chairman
        </p>

        <br />
        <br />
      </div>
    </div>

  </div>
</div>
</template>

<script>
import env from '../env'
export default {
  name: 'contactUs',
  data() {
    return {
      Info: {}
    }
  },
  created() {
    //getInfo()

  },
  methods: {
    getInfo: function() {
      this.$http.get(env.URL + '/getInfo').then(data => {
        this.Info = response.data.data.info
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
