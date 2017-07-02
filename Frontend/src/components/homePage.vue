<template>
<div class="homePage">
  <Banner></Banner>
  <ContactUs></ContactUs>
</div>
</template>

<script>
import Banner from './banner'
import AboutUs from './aboutUs'
import ContactUs from './contactUs'
export default {
  name: 'homePage',
  data() {
    return {}
  },
  components: {
    Banner,
    AboutUs,
    ContactUs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
