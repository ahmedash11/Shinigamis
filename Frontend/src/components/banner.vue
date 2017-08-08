<template>
<div>
  <!-- Banner -->
<section id="three" class="spotlight style1 right three2">

    <div class="content">
      <header>
  
        <h2>Learn more about our Company</h2>
               <router-link to="/aboutUs" ><button class="button special">About Us
        </button></router-link>
      </header>
      <!-- <span><img class="img-circle" src="../../static/images/rms.jpg"></span> -->
    </div>
   
  </section>

  <section id="three" class="spotlight style1 three1 left">
    <div class="content">
      <header>
      <div class="crop">
    <img src="../../static/images/OceanDrum.jpg" class="rounded" />
    </div>  
        <h2>Fleets</h2>
        <router-link to="/fleetsPage" ><button class="button special">Check Our Fleets
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
  beforeCreated(){
    let backgroundImage = new Image();
backgroundImage.src = "../../static/images/OceanDrum.jpg";
document.getElementById("two").style["background-image"]=`url(${backgroundImage.src})`;

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#banner{
  
  background-position:center 26.85px ;
  background-image:url(../../static/images/RapidoGee1.jpg);
  

}
.banner{
  background-position:center 26.85px ;
  background-image:url(../../static/images/RapidoGee1.jpg);
    background: rgba(23,24,32,0);
}
.three2:before{
  background-position: center; 
  background-image:url(../../static/images/Maha.jpg);
  background-size: cover;
position:relative 
  

}
.three1:before{
    background-position: center; 
  background-image:url(../../static/images/RazzoGee.jpg);
  background-size: cover;
position:relative 
}
.spotlight .content {
    -moz-transform: translate(0,0);
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
    transition: transform 1s ease,opacity 1s ease;
    background: rgba(23,24,32,0.5);
    }
#Welcome{
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
    margin:  auto;
    height: 100%;
    width: auto;
}

</style>
