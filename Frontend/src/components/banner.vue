<template>
<div class="Banner">
  <!-- Banner -->
  <section id="banner">
    <a href="#one" class="goto-next scrolly">Next</a>
  </section>

  <!-- One -->
  <section id="one" class="spotlight style1 left">
    <div class="content">
      <header>
        <div class="crop">
          <img src="/static/images/1.jpg" class="rounded">
        </div>
        <h2 id="Welcome">Welcome to Rashied Maritime!</h2>
      </header>
    </div>
    <a href="#two" class="goto-next scrolly">Next</a>
  </section>

  <!-- Two -->
  <section id="two" class="spotlight style1 right">
    <div class="content">
      <header>
        <h2>Learn more about our Company</h2>
        <router-link to="/aboutUs"><button class="button special">About Us
        </button></router-link>
      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>
    <a href="#three" class="goto-next scrolly">Next</a>

  </section>

  <section id="three" class="spotlight style1 left">
    <div class="content">
      <header>
        <div class="crop">
          <img src="../../static/images/OceanDrum.jpg" class="rounded" />
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
#banner {
  background-position: center;
  background-image: url(/static/images/RapidoGee.jpg);
  background-size: cover;
  background-attachment: fixed;
}

#banner::after {
  display: block;
  height: 100%;
  position: absolute;
}

#one {
  background-position: center;
  background-image: url(/static/images/BannerOne.jpg);
  background-size: cover;
  background-attachment: fixed;
}

#two {
  background-position: center;
  background-image: url(/static/images/BannerTwo.jpg);
  background-size: cover;
  background-attachment: fixed;
}

#three {
  background-position: center;
  background-image: url(/static/images/RazzoGee.jpg);
  background-size: cover;
  background-attachment: fixed;
}

.spotlight .content {
  -moz-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  transition: transform 1s ease, opacity 1s ease;
  background: rgba(23, 24, 32, .5);
}

#Welcome {
  font-family: didot;
  font-size: 45px;
  color: #fff;
  font-weight: 600;
}

.image-cropper {
  width: 130;
  height: 130;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.crop {
  width: 500px;
  height: 450px;
  overflow: hidden;
}

.crop img {
  width: 300px;
  height: 250px;
  border-radius: 30%;
}

img {
  display: inline;
  margin: auto;
  height: 100%;
  width: auto;
}
</style>
