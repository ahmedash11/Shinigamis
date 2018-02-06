<template>

    <div class="container">

    <div class="tab_container" align="left">


      <input id="tab1" type="radio" name="tabs" checked>
      <label for="tab1"><span>Founder Message</span></label>

      <input id="tab2" type="radio" name="tabs">
      <label for="tab2"><span>Our Organization Chart</span></label>

      <input id="tab3" type="radio" name="tabs">
      <label for="tab3"><span>Our Personnel</span></label>

      <!-- One -->
      <section class="tab-content style1" id="content1">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="4u 12u$(medium)">
                <header>
                  <h2>Founder Message</h2>

                </header>
                <img src="/static/images/signature-pic.jpg">
              </div>

              <div>
                <br>
                <br>
                <p align="left">In the past two decades, RMS has evolved from an average fleet company to a dynamic offshore services corporation offering its support to a large prominent national and multinational client base in the Oil and Gas industry. In doing so,
                  we have put our clients'absolute satisfaction as an ultimate goal and an embedded value that carries forward our operations. RMS has become a one-stop shop encompassing all of our customers' possible needs.</p>
              </div>
              <div>
                <p align="left">Meanwhile, we kept an eagle eye on the industry and adopted the latest technologies in the field that enhanced our fleet capacity and performance. Finally, I personally take pride in our loyal and truly professional team whom, with
                  their specialized expertise and their accumulated experience in a vibrant yet sensitive field as the Oil and Gas, has made my vision for the company to become a reality. - Mahmoud Rashid</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id="content2" class="tab-content">
        <div class="content">
          <div class="container">
            <div class="row">
              <header>
                <h2>Organization Chart</h2>
              </header>
              <img src="/static/images/Diagram.png">
            </div>
          </div>
        </div>


      </section>


      <section id="content3" class="tab-content">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="4u 12u$(medium)">
                <header>
                  <h2>Personnel</h2>

                </header>

              </div>
              <div>
                <p align="left">All shipboard personnel of RASHIED MARITIME SERVICES CO. are medically fit, competent and qualified in accordance with national and international legislation. Company specifies the total manning requirements for each ship taking into consideration
                  the minimum requirements of the national law. It also specifies the qualifications and experience requirements for each position in which respective persons are going to be involved. Selection and recruitment of shipboard personnel is
                  based upon the above requirements, so that every ship is manned with capable crew to undertake the safety tasks they are expected to perform during normal and emergency operations. Shore based personnel has the appropriate qualifications
                  and experience required to provide technical assistance and support to on-board management. Records of qualifications for every specific position are available. Company continuously identifies training requirements for sea going personnel
                  in order to ensure that all ships are manned with personnel meeting the Company's requirements concerning qualification, ability and experience. In order to motivate all personnel in implementing and maintaining the Safety Management
                  System, the Company is always taking specific measures to satisfy personnel requirements, to reward personnel efforts and to solve personnel problems. Ail ships are certified with the Safe Manning Certificate.</p>
                <br>
                <br>

                <br>

                <br>
                <br>
                <br>
              </div>




            </div>
          </div>
        </div>

      </section>
    </div>
    </section>
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



.container {
  margin-left: 0;
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
  width: 33%;
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

.\34 u,
.\34 u\24 {
  width: 100%%;
}
</style>
