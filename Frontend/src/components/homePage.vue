9==<template>
<div class="homePage">
  <NavBar></NavBar>
  <Banner></Banner>
  <ContactUs></ContactUs>
  <Footer></Footer>
</div>
</template>

<script>
import NavBar from './navBar'
import Banner from './banner'
import Footer from './footer'
import AboutUs from './aboutUs'
import ContactUs from './contactUs'
export default {
  name: 'homePage',
  data() {
    return {}
  },
  components: {
    NavBar,
    Banner,
    Footer,
    AboutUs,
    ContactUs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
