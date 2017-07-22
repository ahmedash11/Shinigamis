<template>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <div>
        <h3 class="p"><i class="fa fa-home fa-2x "></i> Headquarter Address</h3>
        <p class="p">{{Info.address}}</p>
        <br />
        <br />
        <h3 class="p"><i class="fa fa-envelope "></i> Email</h3>
        <p class="p">{{Info.email}}</p>
        <br />
        <br />


        <h3 class="p"><i class="fa fa-phone fa-2x"></i> Phone</h3>
        <p v-for="phone in Info.phone" class="p">{{phone}}</p>

        <br />
        <br />
        <h3 class="p"><i class="fa fa-mobile fa-2x" aria-hidden="true"></i> Mobile</h3>
        <p v-for="mob in Info.mobile" class="p">{{mob}}</p>

        <br />
        <br />

        <h3 class="p"><i class="fa fa-fax" aria-hidden="true"></i> Fax</h3>
        <p v-for="fax in Info.fax" class="p">{{fax}}</p>

        <br />
        <br />

        <h3 class="p"><i class="fa fa-user "></i> Contact Persons</h3>
        <p class="p"> Eng. Mahmoud Rashied -Chairman Eng. Ahmed Rashied - Vice Chairman
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

<style scoped>
.p{
      margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    text-align: left;
}
}
</style>
