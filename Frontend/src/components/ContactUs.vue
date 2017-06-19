<template>
<div class="container">
    <div>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1>
                    Rashied Maritime Services
                </h1>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <div>
                <h3><span class="glyphicons glyphicons-home"></span>Headquarter Address</h3>               
                <p>{{Info.address}}</p>
                <br />
                <br />
                <h3><span class="glyphicons glyphicons-envelope"></span>Email</h3>               
                <p>{{Info.email}}</p>
                <br />
                <br />
                
              
                  <h3><span class="glyphicons glyphicons-phone-alt"></span>Phone</h3>               
                <p v-for= "phone in Info.phone">{{phone}}</p>

                <br />
                <br />
                 <h3><span class="glyphicons glyphicons-iphone"></span>Mobile</h3>               
                <p v-for= "mob in Info.mobile">{{mob}}</p>

                <br />
                <br />
                  <h3><span class="glyphicons glyphicons-fax"></span>Fax</h3>               
                <p v-for= "fax in Info.fax">{{fax}}</p>

                <br />
                <br />
                  <h3><span class="glyphicons glyphicons-user"></span>Contact Persons</h3>               
                <p> Eng. Mahmoud Rashied -Chairman
              
                    Eng. Ahmed Rashied - Vice Chairman
                </p>

                <br />
                <br />
            </div>
        </div>
       
    </div>
</div>
       

</template>

<script>
export default {
  name: 'contactUs',
  data() {
    return {
      Info:{}
    }
  },
    created(){
      getInfo()
      
    },
    methods:{
      //open overlay
      
      
      getInfo:function(){
          this.$http.get('http://localhost:3000/getInfo').then(data=>{
         this.Info = response.data.data.info
          })
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
