webpackJsonp([10],{185:function(e,t,n){var r=n(186);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(42)("3956b6ef",r,!0)},186:function(e,t,n){t=e.exports=n(41)(!0),t.push([e.i,"article.special[data-v-01c63e64],section.special[data-v-01c63e64]{text-align:left}","",{version:3,sources:["/Users/omarezzatel-etreby/Desktop/Shinigamis/Frontend/src/components/historyProjectsPage.vue"],names:[],mappings:"AACA,kEACI,eAAiB,CACpB",file:"historyProjectsPage.vue",sourcesContent:["\narticle.special[data-v-01c63e64], section.special[data-v-01c63e64] {\n    text-align: left;\n}\n"],sourceRoot:""}])},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),s=n.n(r);t.default={name:"historyProjectsPage",data:function(){return{projects:[]}},created:function(){this.fetchProjects()},methods:{fetchProjects:function(){var e=this;this.$http.get(s.a.URL+"/user/getAllProjects").then(function(t){e.projects=t.body.data.historyProjects}).catch(function(t){e.error=t})}},components:{}}},188:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"historyProjectsPage"},[n("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[n("div",{staticClass:"container"},[e._m(0),e._v(" "),n("div",{staticClass:"table-wrapper"},[n("table",[e._m(1),e._v(" "),n("tbody",e._l(e.projects,function(t){return n("tr",[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.unit))]),e._v(" "),n("td",[e._v(e._s(t.clientName))])])}))])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"major"},[n("h2",[e._v("History Projects")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Contracts Name & No.")]),e._v(" "),n("th",[e._v("Marine Units")]),e._v(" "),n("th",[e._v("Title of the Client")])])])}]}},29:function(e,t,n){function r(e){n(185)}var s=n(2)(n(187),n(188),r,"data-v-01c63e64",null);e.exports=s.exports},41:function(e,t){function n(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var o=r(s);return[n].concat(s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(r[o]=!0)}for(s=0;s<e.length;s++){var a=e[s];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},42:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(o(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],s=0;s<n.parts.length;s++)a.push(o(n.parts[s]));f[n.id]={id:n.id,refs:1,parts:a}}}}function s(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var o=d++;r=p||(p=s()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=s(),t=i.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,s);else{var o=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function i(e,t){var n=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(45),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var s=u(e,t);return r(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o],i=f[a.id];i.refs--,n.push(i)}t?(s=u(e,t),r(s)):s=[];for(var o=0;o<n.length;o++){var i=n[o];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete f[i.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},43:function(e,t){e.exports={URL:""}},45:function(e,t){e.exports=function(e,t){for(var n=[],r={},s=0;s<t.length;s++){var o=t[s],a=o[0],i=o[1],c=o[2],u=o[3],f={id:e+":"+s,css:i,media:c,sourceMap:u};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}}});
//# sourceMappingURL=10.82bee7f9ee66e4d4c393.js.map