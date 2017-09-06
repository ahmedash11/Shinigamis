webpackJsonp([25],[,function(t,e,n){"use strict";(function(t){var a=n(3),i=n(12),r=n(13),s=n(6),o=(n.n(s),n(7)),l=(n.n(o),n(2)),u=n(15),c=n.n(u),d=function(){return n.e(14).then(n.bind(null,40))},f=function(){return n.e(23).then(n.bind(null,41))},h=function(){return n.e(20).then(n.bind(null,42))},p=function(){return n.e(0).then(n.bind(null,32))},m=function(){return n.e(12).then(n.bind(null,43))},v=function(){return n.e(1).then(n.bind(null,36))},_=function(){return n.e(17).then(n.bind(null,44))},b=function(){return n.e(3).then(n.bind(null,33))},g=function(){return n.e(8).then(n.bind(null,9))},k=function(){return n.e(16).then(n.bind(null,45))},C=function(){return n.e(2).then(n.bind(null,34))},w=function(){return n.e(18).then(n.bind(null,46))},A=function(){return n.e(4).then(n.bind(null,35))},x=function(){return n.e(10).then(n.bind(null,47))},y=function(){return n.e(19).then(n.bind(null,48))},P=function(){return n.e(5).then(n.bind(null,8))},E=function(){return n.e(6).then(n.bind(null,38))},N=function(){return n.e(7).then(n.bind(null,37))},O=function(){return n.e(21).then(n.bind(null,49))},S=function(){return n.e(11).then(n.bind(null,50))},U=function(){return n.e(9).then(n.bind(null,51))},$=function(){return n.e(15).then(n.bind(null,52))},j=function(){return n.e(22).then(n.bind(null,53))};a.a.use(i.a),a.a.use(r.a),e.a=new i.a({mode:"history",base:t,routes:[{path:"/",name:"HomePage",component:c.a},{path:"/ApplicationsAdmin",name:"ApplicationsAdmin",component:N},{path:"/application/:applicationId",name:"ApplicationAdmin",component:O},{path:"/positions",name:"Positions",component:$},{path:"/apply/:position",name:"Application",component:S},{path:"/admin",name:"Admin",component:f},{path:"/services",name:"Services",component:d},{path:"/clients",name:"Clients",component:h},{path:"/admin/clients",name:"ClientsAdmin",component:p,beforeEnter:function(t,e,n){l.a.checkAuth(),l.a.user.authenticated?n():(swal("Oops...","You shall not pass!!","error"),n("/clients"))}},{path:"/projects",name:"Projects",component:_},{path:"/admin/projects",name:"ProjectAdmin",component:b,beforeEnter:function(t,e,n){l.a.checkAuth(),l.a.user.authenticated?n():(swal("Oops...","You shall not pass!!","error"),n("/projects"))}},{path:"/locations",name:"Locations",component:k},{path:"/admin/locations",name:"LocationsAdmin",component:C,beforeEnter:function(t,e,n){l.a.checkAuth(),l.a.user.authenticated?n():(swal("Oops...","You shall not pass!!","error"),n("/locations"))}},{path:"/awards",name:"Awards",component:m},{path:"/admin/awards",name:"AwardsAdmin",component:v,beforeEnter:function(t,e,n){l.a.checkAuth(),l.a.user.authenticated?n():(swal("Oops...","You shall not pass!!","error"),n("/awards"))}},{path:"/fleets",name:"Fleets",component:w},{path:"/admin/fleets",name:"FleetsAdmin",component:A,beforeEnter:function(t,e,n){l.a.checkAuth(),l.a.user.authenticated?n():(swal("Oops...","You shall not pass!!","error"),n("/fleets"))}},{path:"/fleet/:fleetId",name:"FleetProfilePage",component:y},{path:"/admin/fleet/:fleetId",name:"FleetProfileAdmin",component:x,beforeEnter:function(t,e,n){l.a.checkAuth(),l.a.user.authenticated?n():(swal("Oops...","You shall not pass!!","error"),n("/fleet/:fleetId"))}},{path:"/aboutUs",name:"AboutUsPage",component:g},{path:"/contactUs",name:"ContactUsPage",component:P},{path:"/admin/contactUs",name:"ContactUsAdmin",component:E,beforeEnter:function(t,e,n){l.a.checkAuth(),l.a.user.authenticated?n():(swal("Oops...","You shall not pass!!","error"),n("/contactUs"))}},{path:"/addFleet",name:"AddFleet",component:U},{path:"/announcements",name:"Announcements",component:j}]})}).call(e,"/")},function(t,e,n){"use strict";n(1);e.a={user:{authenticated:!1},login:function(t){localStorage.setItem("token",t.token),localStorage.setItem("admin",t.admin),this.user.authenticated=!0},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("admin"),this.user.authenticated=!1},checkAuth:function(){var t=localStorage.getItem("token");this.user.authenticated=!!t},getAuthHeader:function(){return{"jwt-token":localStorage.getItem("token")}},getAdmin:function(){return JSON.parse(localStorage.getItem("admin"))},getAdminType:function(){return JSON.parse(localStorage.getItem("admin")).isSuper}}},,function(t,e){t.exports={URL:""}},,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=n(1),r=n(20),s=n.n(r);n(29).install(),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},,,,function(t,e){},function(t,e,n){function a(t){n(16)}var i=n(0)(n(18),n(19),a,"data-v-ce7e3526",null);t.exports=i.exports},function(t,e){},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){return n.e(13).then(n.bind(null,39))},i=function(){return n.e(5).then(n.bind(null,8))},r=function(){return n.e(8).then(n.bind(null,9))};e.default={name:"homePage",data:function(){return{}},components:{Banner:a,ContactUs:i,AboutUs:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homePage"},[n("Banner"),t._v(" "),n("ContactUs")],1)},staticRenderFns:[]}},function(t,e,n){var a=n(0)(n(21),n(28),null,null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),i=n.n(a),r=function(){return n.e(24).then(n.bind(null,54))};e.default={name:"app",components:{AppNav:i.a,AppFooter:r},data:function(){return{}}}},function(t,e,n){function a(t){n(23)}var i=n(0)(n(24),n(27),a,"data-v-46a25268",null);t.exports=i.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(25),i=n.n(a),r=n(4),s=n.n(r),o=n(2);n(1);e.default={name:"AppNav",data:function(){return{email:"",password:"",user:o.a.user,home:!0}},methods:{openNav:function(){this.email="",this.password="",document.getElementById("myNav").style.width="100%"},closeNav:function(){document.getElementById("myNav").style.width="0%"},login:function(){var t=this;this.$http.post(s.a.URL+"/admin/authenticate",{email:this.email,password:this.password}).then(function(e){var n={token:e.body.data.token,admin:i()(e.body.data.admin)};o.a.login(n),t.closeNav(),t.$router.push({path:"/admin"+t.$route.fullPath})}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var e=0;e<t.body.msg.length;e++){var n=t.body.msg[e].msg;alertify.notify(n,"error",5)}})},logout:function(){o.a.logout(),this.$router.push({path:this.$route.fullPath.replace("/admin","")})}},created:function(){"/"===this.$route.path?this.home=!0:this.home=!1,o.a.checkAuth()},updated:function(){"/"===this.$route.path?this.home=!0:this.home=!1}}},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AppNav"},[this.home?n("section",{staticClass:"spotlight spot style1 left",staticStyle:{"background-size":"100%"},attrs:{id:"one"}},[n("header",{attrs:{id:"header"}},[n("img",{staticClass:"rounded",attrs:{src:"/static/images/logo1.png",align:"left"}}),t._v(" "),n("nav",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/aboutUs"}},[n("i",{staticClass:"fa fa-info fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[t._m(0),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/fleets"}},[t._v("Fleets")])],1)])]),t._v(" "),n("li",[t._m(1),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/clients"}},[t._v("Clients")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1)])]),t._v(" "),n("li",[n("router-link",{attrs:{to:"/awards"}},[n("i",{staticClass:"fa fa-trophy fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/positions"}},[n("i",{staticClass:"fa fa-briefcase fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/announcements"}},[n("i",{staticClass:"fa fa-newspaper-o fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[t._m(2),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/contactUs"}},[t._v("Overview")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/locations"}},[t._v("Locations")])],1)])]),t._v(" "),this.user.authenticated?n("li",[n("router-link",{attrs:{to:"/admin"}},[n("i",{staticClass:"fa fa-tachometer fa-2x",attrs:{"aria-hidden":"true"}})])],1):t._e(),t._v(" "),this.user.authenticated?n("li",[n("a",{on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out fa-2x",attrs:{"aria-hidden":"true"}})])]):n("li",[n("a",{on:{click:t.openNav}},[n("i",{staticClass:"fa fa-sign-in fa-2x",attrs:{"aria-hidden":"true"}})])])])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("center",[n("h2",{attrs:{id:"Welcome"}},[t._v("Welcome to Rashied Maritime!")])])],1),t._v(" "),n("a",{staticClass:"goto-next scrolly",attrs:{href:"#two"}})]):t._e(),t._v(" "),this.home?t._e():n("section",{staticClass:"spotlight style1 left",attrs:{id:"one"}},[n("header",{attrs:{id:"header"}},[n("img",{staticClass:"rounded",attrs:{src:"/static/images/logo1.png",align:"center"}}),t._v(" "),n("nav",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/aboutUs"}},[n("i",{staticClass:"fa fa-info fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[t._m(3),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/fleets"}},[t._v("Fleets")])],1)])]),t._v(" "),n("li",[t._m(4),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/clients"}},[t._v("Clients")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1)])]),t._v(" "),n("li",[n("router-link",{attrs:{to:"/awards"}},[n("i",{staticClass:"fa fa-trophy fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/positions"}},[n("i",{staticClass:"fa fa-briefcase fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/announcements"}},[n("i",{staticClass:"fa fa-newspaper-o fa-2x",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[t._m(5),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/contactUs"}},[t._v("Overview")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/locations"}},[t._v("Locations")])],1)])]),t._v(" "),this.user.authenticated?n("li",[n("router-link",{attrs:{to:"/admin"}},[n("i",{staticClass:"fa fa-tachometer fa-2x",attrs:{"aria-hidden":"true"}})])],1):t._e(),t._v(" "),this.user.authenticated?n("li",[n("a",{on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out fa-2x",attrs:{"aria-hidden":"true"}})])]):n("li",[n("a",{on:{click:t.openNav}},[n("i",{staticClass:"fa fa-sign-in fa-2x",attrs:{"aria-hidden":"true"}})])])])])])]),t._v(" "),n("div",{staticClass:"overlay",attrs:{id:"myNav"}},[n("a",{staticClass:"closebtn",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.closeNav()}}},[t._v("×")]),t._v(" "),n("div",{staticClass:"overlay-content"},[n("div",{staticClass:"container"},[n("form",{staticClass:"form-group",on:{submit:function(e){e.preventDefault(),t.login(e)}}},[n("label",{staticClass:"test"},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Enter Your Email..",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("label",{staticClass:"test"},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Enter Your Password..",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("input",{staticClass:"button special",attrs:{type:"submit"}})])])])]),t._v(" "),n("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("i",{staticClass:"fa fa-ship fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("i",{staticClass:"fa fa-anchor fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("i",{staticClass:"fa fa-phone fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{muted:""}},[n("i",{staticClass:"fa fa-ship fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("i",{staticClass:"fa fa-anchor fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("i",{staticClass:"fa fa-phone fa-2x",attrs:{"aria-hidden":"true"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppNav"),t._v(" "),n("AppFooter")],1)},staticRenderFns:[]}}],[10]);
//# sourceMappingURL=app.02ed3ddbc5b9347f55fa.js.map