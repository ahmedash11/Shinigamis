webpackJsonp([20],{182:function(t,e,s){var a=s(183);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(25)("3948f306",a,!0)},183:function(t,e,s){e=t.exports=s(24)(!0),e.push([t.i,".\\34 u img[data-v-67e548a8]{max-height:100%;max-width:100%}img[data-v-67e548a8]{height:auto;max-width:100%;border:none}@media (min-width:768px) .col-sm-12{width:100%}","",{version:3,sources:["/Users/omarezzatel-etreby/Documents/Projects/Shinigamis/Frontend/src/components/clientsPage.vue"],names:[],mappings:"AACA,4BACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,qBACE,YAAa,AAGb,eAAgB,AAChB,WAAa,CAHd,AAKD,oCACE,UAAY,CACb",file:"clientsPage.vue",sourcesContent:["\n.\\34 u img[data-v-67e548a8] {\n  max-height: 100%;\n  max-width: 100%;\n}\nimg[data-v-67e548a8] {\n  height: auto;\n}\nimg[data-v-67e548a8] {\n  max-width: 100%;\n  border: none;\n}\n@media (min-width: 768px) .col-sm-12 {\n  width: 100%;\n}\n"],sourceRoot:""}])},184:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4),i=s.n(a);e.default={name:"clientsPage",data:function(){return{clients:[],url:""}},methods:{fetchClients:function(){var t=this;this.$http.get(i.a.URL+"/user/getAllClients").then(function(e){e.body.success?t.clients=e.body.data.clients:t.error=e.body.msg})}},components:{},created:function(){this.fetchClients(),this.url=i.a.URL}}},185:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clientsPage"},[s("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("section",{staticClass:"col-lg-12 col-md-12 col-sm-12 small-padding"},t._l(t.clients,function(e){return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-4 col-sm-12"},[s("div",{staticClass:"team-member",attrs:{"data-animation":""}},[e.profileimg.path?s("img",{attrs:{src:t.url+e.profileimg.path.replace("public","")}}):s("img",{attrs:{src:"/static/images/pic07.jpg"}})])]),t._v(" "),s("div",{staticClass:"col-lg-8 col-md-6 col-sm-12"},[s("h3",[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v(t._s(e.description))]),t._v(" "),s("br")])])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"major"},[s("h2",[t._v("Clients")])])}]}},38:function(t,e,s){function a(t){s(182)}var i=s(1)(s(184),s(185),a,"data-v-67e548a8",null);t.exports=i.exports}});
//# sourceMappingURL=20.908fd8db0a64dadd517a.js.map