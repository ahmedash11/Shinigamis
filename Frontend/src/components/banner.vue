<template>
<div class="banner">
  <!-- Banner -->
  <section id="banner" style="background-position: center 26.85px; background-image:url(../../static/images/rms.jpg) " >
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
    margin:  auto;
    height: 100%;
    width: auto;
}

</style>
