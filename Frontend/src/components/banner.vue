<template>
<div>
  <!-- Banner -->
  <section id="two" class="spotlight style1 three2 right">

    <div class="content">
      <header>
        <h2>Learn more about our Company</h2>
        <router-link to="/aboutUs"><button class="button special">About Us
        </button></router-link>
      </header>
    </div>

    <a href="#three" class="goto-next scrolly"></a>
  </section>

  <section id="three" class="spotlight style1 three1 left">

    <div class="content">
      <header>
        <h2>Fleets</h2>
        <router-link to="/fleetsPage"><button class="button special">Check Our Fleets
        </button></router-link>
      </header>
    </div>

    <a href="#four" class="goto-next scrolly"></a>
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
.three1:before {
  background-position: center;
  background-attachment: fixed;
  background-image: url(../../static/images/RazzoGee.jpg);
  background-size: cover;
  position: relative
}

.three2:before {
  background-position: center;
  background-attachment: fixed;
  background-image: url(../../static/images/Maha.jpg);
  background-size: cover;
  position: relative
}

.spotlight .content {
  -moz-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  transition: transform 1s ease, opacity 1s ease;
  background: rgba(23, 24, 32, 0.5);
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
  width: 200px;
  height: 175px;
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
