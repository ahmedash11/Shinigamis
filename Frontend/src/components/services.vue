<template>
<div class="Services">


  <div class="container">
    <div class="tab_container" align="left">

      <input id="tab1" type="radio" name="tabs" checked>
      <label for="tab1"><span>Services</span></label>

      <input id="tab2" type="radio" name="tabs">
      <label for="tab2"><span>HSE Policy</span></label>

      <input id="tab3" type="radio" name="tabs">
      <label for="tab3"><span>Risk Assesment</span></label>

      <!-- One -->
      <section id="content1">


        <div class="content">
          <div class="container">
            <div class="row">
              <div class="4u 12u$(medium)">
                <header>
                  <h2 class="h2">Services</h2>

                </header>
                
              </div>
              <div class="4u 12u$(medium)">
                <h3> We Provide The Following Services: </h3>
                <p>

                  <ul>
                    <li>
                      <p>Performing ocean and costal towage operations.</p>
                    </li>
                    <li>
                      <p>Maintenance of offshore platforms, Boat landings and riser guards.etc</p>
                    </li>
                    <li>
                      <p>Fabrication and installation of offshore light steel structure.</p>
                    </li>
                    <li>
                      <p>Anti-Pollution - Oil recovery operations.</p>
                    </li>
                    <li>
                      <p>Fire-Fighting operations.</p>
                    </li>
                    <li>
                      <p>Salvage operations and Safety stand-by boats.</p>
                    </li>

                  </ul>
                </p>

              </div>
              <div class="4u$ 12u$(medium)">
                <h3>We provide the following chartering services:</h3>
                <p>
                  <ul>

                    <li>
                      <p>Anchor handling, Tug and supply boats.</p>
                    </li>
                    <li>
                      <p>Crane, Work and accommodation barges.</p>
                    </li>
                    <li>
                      <p>Pontoons up to 15000 tons capacity.</p>
                    </li>
                    <li>
                      <p>Diving support vessels.</p>
                    </li>
                    <li>
                      <p>Mooring and service boats.</p>
                    </li>
                    <li>
                      <p>Crew utility boats.</p>
                    </li>
                     <li>
                      <p>Fast crew boats.</p>
                    </li>

                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>
      <section id="content2">
        <div class="content">
          <div class="container">
            <div class="row">
              <div>
                <header>
                  <h2 class="h2">HSE Policy</h2>

                </header>
                <div>

                  <p>
                    <ul>
                      <li>
                        <p>Health, Safety and Environment comes at the top of RMS priorities. The company keeps a strategic HSE policy which aims at ensuring the safety of the ships and the crew, in addition to the prevention of pollution and any health
                          hazards related to the ongoing operations and services..</p>
                      </li>
                      <li>
                        <p>Continuous efforts are exerted and are focused at ensuring healthy and safe work conditions and environmental protection through developing and enforcing appropriate safety procedures.</p>
                      </li>
                      <li>
                        <p>A Safety Management System, that is based on the A741 (18) IMO resolution and complies with all national and International, safety related regulations, has been established and is enforced both ashore and on board the marine units.
                          The system includes continuous training of personnel to increase their safety awareness.</p>
                      </li>
                      <li>
                        <p>RMS to implement successful work methods while providing its services to meet the client satisfaction and maintain high records for HSE.</p>
                      </li>

                    </ul>
                  </p>
                  <h3>
          Objectives:
  </h3>
                  <p>
                    To ensure in every case healthy and safe working conditions and protection of the environment by developing and enforcing appropriate procedures. The approach of the Company, to environmental management is to seek continuous improvement in performance
                    by taking into account scientific progress and community expectations. The Company has identified as priorities the education of employees on environmental matters and the implementation of effective systems and programs to manage
                    risks and protect the environment. In turn all employees are expected to comply with safety and pollution prevention regulations and operating procedures at all times and to take all necessary precautions to protect themselves, their
                    colleagues, the ship, its cargo and the environment.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      </section>


      <section id="content3">
 
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="4u 12u$(medium)">
                <header>
                  <h2 class="h2">Risk Assessment</h2>

                </header>

              </div>
              <div>
                <p>In the past two decades, RMS has evolved from an average fleet company to a dynamic offshore services corporation offering its support to a large prominent national and multinational client base in the Oil and Gas industry. In doing so,
                  we have put our clients'absolute satisfaction as an ultimate goal and an embedded value that carries forward our operations. RMS has become a one-stop shop encompassing all of our customers' possible needs.</p>
              </div>
              <div>
                <p>Meanwhile, we kept an eagle eye on the industry and adopted the latest technologies in the field that enhanced our fleet capacity and performance. Finally, I personally take pride in our loyal and truly professional team whom, with
                  their specialized expertise and their accumulated experience in a vibrant yet sensitive field as the Oil and Gas, has made my vision for the company to become a reality. - Mahmoud Rashid</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'services',
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
  background: inherit;
  box-shadow: inset 0 3px #e44c65;
}

.tab_container [id^="tab"]:checked+label .fa {
  color: inherit;
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

p {
  text-align: left;
}

.h2 {
  text-align: left;
}

.spotlight.style1 .content {
  border-color: #191a22;
}
</style>
