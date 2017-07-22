<template>
<div class="admin">

  </br>
  </br>


  <div class="tab_container" align="right">

    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1"><span>Client</span></label>

    <input id="tab2" type="radio" name="tabs">
    <label for="tab2"><span>Projects</span></label>

    <input id="tab3" type="radio" name="tabs">
    <label for="tab3"><span>Locations</span></label>

    <input id="tab4" type="radio" name="tabs">
    <label for="tab4"><span>Fleets</span></label>

    <input id="tab5" type="radio" name="tabs">
    <label for="tab5"><span>Awards</span></label>



    <input id="tab6" type="radio" name="tabs">
    <label for="tab6"><span>Admins</span></label>

    <input id="tab7" type="radio" name="tabs">
    <label for="tab7"><span>Applications</span></label>


    <input id="tab8" type="radio" name="tabs">
    <label for="tab8"><span>Positions</span></label>

    <input id="tab9" type="radio" name="tabs">
    <label for="tab9"><span>Announcements   </span></label>

    <input id="tab10" type="radio" name="tabs">
    <label for="tab10"><span>Contact Us</span></label>


    <section id="content1" class="tab-content">
      <Clients></Clients>
    </section>
    <section id="content2" class="tab-content">

      <Projects></Projects>

    </section>

    <section id="content3" class="tab-content">

      <Locations></Locations>
    </section>

    <section id="content4" class="tab-content">
      <Fleets></Fleets>
    </section>

    <section id="content5" class="tab-content">

      <Awards></Awards>

    </section>
    <section id="content6" class="tab-content">

      <Admins></Admins>

    </section>
    <section id="content7" class="tab-content">

      <Application></Application>

    </section>
    <section id="content8" class="tab-content">

      <Position></Position>

    </section>

    <section id="content9" class="tab-content">

      <Announcements></Announcements>

    </section>
    <section id="content10" class="tab-content">

      <ContactUs></ContactUs>

    </section>
  </div>
</div>
</template>

<script>
import env from '../env'
import Clients from './clientsAdmin'
import Projects from './historyProjectsAdmin'
import Locations from './locationsAdmin'
import Fleets from './fleetsAdmin'
import Awards from './awardsAdmin'
import Admins from './admins'
import Position from './positionsAdmin'
import Application from '@/components/applicationsAdmin'
import Announcements from './announcementsAdmin.vue'
import editPassword from './editPassword.vue'
import ContactUs from '@/components/ContactUsAdmin'
export default {
  name: 'admin',
  data() {
    return {}
  },
  methods: {},
  created() {},
  components: {
    Clients,
    Projects,
    Locations,
    Fleets,
    Awards,
    Admins,
    Application,
    Position,
    Announcements,
    editPassword,ContactUs

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tab1:checked~#content1,
#tab2:checked~#content2,
#tab3:checked~#content3,
#tab4:checked~#content4,
#tab5:checked~#content5,
#tab6:checked~#content6,
#tab7:checked~#content7,
#tab8:checked~#content8,
#tab9:checked~#content9,
#tab10:checked~#content10 {
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
  font-size: 13px;
  display: block;
  float: left;
  width: 9.5%;
  cursor: pointer;
  text-decoration: none;
  text-align: let;
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
</style>
