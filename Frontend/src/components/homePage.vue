<template>
<div class="homePage">
  <Banner></Banner>
  <ContactUs></ContactUs>
  <AboutUs></AboutUs>
</div>
</template>

<script>
import Banner from './banner'
import ContactUs from './contactUs'
import AboutUs from './aboutUsPage'
export default {
  name: 'homePage',
  data() {
    return {}
  },
  components: {
    Banner,
    ContactUs,
    AboutUs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
