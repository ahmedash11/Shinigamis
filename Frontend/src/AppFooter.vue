<template>
<div class="AppFooter">
  <!-- Footer -->
  <section id="footer1" class="spotlight">
    <footer id="footer">
      <ul class="icons">
        <li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
        <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="#" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
      </ul>
      <ul class="copyright">
        <li>© 2017 Rashied Maritime Services. All Rights Reserved</li>
      </ul>
    </footer>
  </section>
</div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer1:before {
  background-position: center;
  background-image: url(/static/images/RapidoGee.jpg);
  background-size: cover;
  background-attachment: fixed;
}

.spotlight {
  background-attachment: fixed;
  background-size: cover;
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, .25);
  height: 30vh;
  position: relative;
}
</style>
