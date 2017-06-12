<template>
  <div class="homePage">
    <NavBar></NavBar>
    <Banner></Banner>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </div>
</template>

<script>
  import NavBar from './NavBar'
  import Banner from './Banner'
  import Footer from './Footer'
  import AboutUs from './AboutUs'
  import ContactUs from './ContactUs'
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
