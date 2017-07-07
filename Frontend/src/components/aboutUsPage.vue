<template>
<div class="aboutUsPage">

  <div class="tab_container" align="center">

    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1"><span>Chairman Message</span></label>

    <input id="tab2" type="radio" name="tabs">
    <label for="tab2"><span>Our Organization Chart</span></label>

    <input id="tab3" type="radio" name="tabs">
    <label for="tab3"><span>Our Personnel</span></label>

    <!-- One -->
    <section class="spotlight style1 bottom tab-content" id="content1">
      <span class="image fit main"><img src="images/pic02.jpg" alt="" /></span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="4u 12u$(medium)">
              <header>
                <h2>About Us</h2>

              </header>
              <img src="../../static/images/signature-pic.jpg">
            </div>
            <div class="4u 12u$(medium)">
              <p>In the past two decades, RMS has evolved from an average fleet company to a dynamic offshore services corporation offering its support to a large prominent national and multinational client base in the Oil and Gas industry. In doing so,
                we have put our clients'absolute satisfaction as an ultimate goal and an embedded value that carries forward our operations. RMS has become a one-stop shop encompassing all of our customers' possible</p>
            </div>
            <div class="4u$ 12u$(medium)">
              <p>needs. Meanwhile, we kept an eagle eye on the industry and adopted the latest technologies in the field that enhanced our fleet capacity and performance. Finally, I personally take pride in our loyal and truly professional team whom, with
                their specialized expertise and their accumulated experience in a vibrant yet sensitive field as the Oil and Gas, has made my vision for the company to become a reality. - Mahmoud Rashid</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section id="content2" class="spotlight style1 bottom tab-content">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="4u 12u$(medium)">
              <header>
                <h2>Organization Chart</h2>

              </header>

              <div id="slider">


                <slider width="800px" animation="fade" :interval="1000" :speed="1000">

                  <slider-item> <img src="../assets/logo.png"> </slider-item>


                </slider>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>


    <section id="content3" class="spotlight style1 bottom tab-content">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="4u 12u$(medium)">
              <header>
                <h2>Personnel</h2>

              </header>

            </div>
            <div class="4u 12u$(medium)">
              <p>In the past two decades, RMS has evolved from an average fleet company to a dynamic offshore services corporation offering its support to a large prominent national and multinational client base in the Oil and Gas industry. In doing so,
                we have put our clients'absolute satisfaction as an ultimate goal and an embedded value that carries forward our operations. RMS has become a one-stop shop encompassing all of our customers' possible</p>
            </div>
            <div class="4u$ 12u$(medium)">
              <p>needs. Meanwhile, we kept an eagle eye on the industry and adopted the latest technologies in the field that enhanced our fleet capacity and performance. Finally, I personally take pride in our loyal and truly professional team whom, with
                their specialized expertise and their accumulated experience in a vibrant yet sensitive field as the Oil and Gas, has made my vision for the company to become a reality. - Mahmoud Rashid</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'aboutUsPage',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tab1:checked~#content1,
#tab2:checked~#content2,
#tab3:checked~#content3,
#tab4:checked~#content4,
#tab5:checked~#content5 {
  display: block;
}

.tab_container .tab-content p,
.tab_container .tab-content h3 {
  -webkit-animation: fadeInScale 0.7s ease-in-out;
  -moz-animation: fadeInScale 0.7s ease-in-out;
  animation: fadeInScale 0.7s ease-in-out;
}

.tab_container .tab-content h3 {
  text-align: center;
}

.tab_container [id^="tab"]:checked+label {
  background: #1c1d26;
  box-shadow: inset 0 3px #e44c65;
}

.tab_container [id^="tab"]:checked+label .fa {
  color: #1c1d26;
}

label .fa {
  font-size: 1.3em;
  margin: 0 0.4em 0 0;
}


label {
  font-weight: 700;
  font-size: 18px;
  display: block;
  float: left;
  width: 20%;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}


input,
section {
  clear: both;
  padding-top: 10px;
  display: none;
}




input[type=checkbox]+label:before,
input[type=radio]+label:before {
  border: 1px solid rgba(255, 255, 255, .3);
  content: '';
  display: none;
  height: 1.8em;
  left: 0;
  line-height: 1.725em;
  position: absolute;
  text-align: center;
  top: 0;
  width: 1.8em;
}


.spotlight.style1 .content {
  border-color: #191a22;
}
</style>
