webpackJsonp([17],{190:function(t,e,s){var n=s(191);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(25)("3956b6ef",n,!0)},191:function(t,e,s){e=t.exports=s(24)(!0),e.push([t.i,"article.special[data-v-01c63e64],section.special[data-v-01c63e64]{text-align:left}","",{version:3,sources:["/Users/omarezzatel-etreby/Documents/Projects/Shinigamis/Frontend/src/components/historyProjectsPage.vue"],names:[],mappings:"AACA,kEAEE,eAAiB,CAClB",file:"historyProjectsPage.vue",sourcesContent:["\narticle.special[data-v-01c63e64],\nsection.special[data-v-01c63e64] {\n  text-align: left;\n}\n"],sourceRoot:""}])},192:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),r=s.n(n);e.default={name:"historyProjectsPage",data:function(){return{projects:[]}},created:function(){this.fetchProjects()},methods:{fetchProjects:function(){var t=this;this.$http.get(r.a.URL+"/user/getAllProjects").then(function(e){t.projects=e.body.data.historyProjects}).catch(function(e){t.error=e})}},components:{}}},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"historyProjectsPage"},[s("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"table-wrapper"},[s("table",[t._m(1),t._v(" "),s("tbody",t._l(t.projects,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.unit))]),t._v(" "),s("td",[t._v(t._s(e.clientName))])])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"major"},[s("h2",[t._v("Projects")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Contracts Name")]),t._v(" "),s("th",[t._v("Marine Units")]),t._v(" "),s("th",[t._v("Client Name")])])])}]}},40:function(t,e,s){function n(t){s(190)}var r=s(1)(s(192),s(193),n,"data-v-01c63e64",null);t.exports=r.exports}});
//# sourceMappingURL=17.4916875f39aee500e4f4.js.map