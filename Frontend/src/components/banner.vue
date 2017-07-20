<template>
<div class="banner">
  <!-- Banner -->
  <section id="banner" style="background-position: center 26.85px; background-image:url(../../static/images/OceanDrum.jpg) ">
    <div class="content">
      <header>
        <div class="image-cropper">
          <img src="../../static/images/rms.jpg" class="rounded" />
        </div>
        <h2>Welcome to Rashied Maritime</h2>

      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>

  </section>
  <section id="one" class="spotlight style1 bottom" style="background-position: center 3.9px; background-image:url(../../static/images/OceanDrum.jpg)">
    <span class="image fit main">
  <img src="../../static/images/rms.jpg">
</span>
    <div class="content">
      <header>
        <div class="image-cropper">
          <img src="../../static/images/rms.jpg" class="rounded" />
        </div>
        <h2>Welcome to Rashied Maritime</h2>
        <p>And there are no hoverboards or flying cars.<br /> Just apps. Lots of mother flipping apps.</p>
      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>

  </section>

  <section id="three" class="spotlight style1 left" style="background-position: center 26.85px; background-image:url(../../static/images/rms.jpg) ">
    <div class="content">
      <header>
        <div class="image-cropper">
          <img src="../../static/images/rms.jpg" class="rounded" />
        </div>
        <h2>Fleets</h2>
        <router-link to="/fleetsPage"><button class="button special">Check Our Fleets
        </button></router-link>
      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>

  </section>
</div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-cropper {
  width: 130;
  height: 130;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

img {
  display: inline;
  margin: auto;
  height: 100%;
  width: auto;
}
</style>
