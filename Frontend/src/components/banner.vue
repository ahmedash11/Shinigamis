<template>
<div class="banner">
  <!-- Banner -->
  <section id="one" class="spotlight style1 left">
    <div class="content">
      <header>
        <div class="crop">
          <img src="../../static/images/1.jpg" class="rounded">
        </div>
        <h2 id="Welcome">Welcome to Rashied Maritime!</h2>

      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>

  </section>
  <section id="two" class="spotlight style1 right">

    <div class="content">
      <header>

        <h2>Learn more about our Company</h2>
        <router-link to="/aboutUs"><button class="button special">About Us
        </button></router-link>
      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>

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
  },
  beforeCreated() {
    let backgroundImage = new Image();
    backgroundImage.src = "../../static/images/OceanDrum.jpg";
    document.getElementById("two").style["background-image"] = `url(${backgroundImage.src})`;

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#two:before {
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(../../static/images/Maha.jpg);
}

#one:before {
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(../../static/images/OceanDrum.jpg);
}

#three:before {

  background-attachment: fixed;
  background-position: center 3.9px;
  background-size: cover;
  background-image: url(../../static/images/RazzoGee.jpg);
}








/*#three{
  background-position: center 26.85px;
  background-image:url(../../static/images/OceanDrum.jpg);

}*/

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
