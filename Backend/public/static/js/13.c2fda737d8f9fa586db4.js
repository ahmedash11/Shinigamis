webpackJsonp([13,35],{118:function(e,t,n){var r=n(119);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(42)("0171c63b",r,!0)},119:function(e,t,n){t=e.exports=n(41)(!0),t.push([e.i,".modal-content[data-v-2929684a]{position:relative;background-color:#1c1d26;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.\\34 u img[data-v-2929684a]{max-height:100%;max-width:100%}","",{version:3,sources:["/Users/omarezzatel-etreby/Desktop/Shinigamis/Frontend/src/components/fleetsAdmin.vue"],names:[],mappings:"AACA,gCACE,kBAAmB,AACnB,yBAA0B,AAC1B,sBAAuB,AACvB,gCAAqC,AACrC,kBAAmB,AACnB,oCAAyC,AACzC,4BAA6B,AAC7B,SAAW,CACZ,AACD,4BACE,gBAAiB,AACjB,cAAgB,CACjB",file:"fleetsAdmin.vue",sourcesContent:["\n.modal-content[data-v-2929684a] {\n  position: relative;\n  background-color: #1c1d26;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.\\34 u img[data-v-2929684a] {\n  max-height: 100%;\n  max-width: 100%;\n}\n"],sourceRoot:""}])},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),o=n.n(r),s=n(3);t.default={name:"fleetsAdmin",data:function(){return{fleets:[]}},created:function(){this.fetchFleets()},methods:{fetchFleets:function(){var e=this;this.$http.get(o.a.URL+"/user/getAllFleets").then(function(t){e.fleets=t.data.data.fleets})},deleteFleet:function(e){var t=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d53",confirmButtonText:"Yes, delete it!"}).then(function(){t.$http.post(o.a.URL+"/admin/deleteFleet",{id:e},{headers:s.a.getAuthHeader()}).then(function(e){swal("Deleted!",e.body.msg,"success"),t.fetchFleets()}).catch(function(e){if(e.body.msg instanceof String||"string"==typeof e.body.msg)swal("Oops...",e.body.msg,"error");else for(var t=0;t<e.body.msg.length;t++){var n=e.body.msg[t].msg;alertify.notify(n,"error",5)}})},function(e){})}}}},121:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fleetsAdmin"},[n("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[n("div",{staticClass:"container"},[e._m(0),e._v(" "),n("div",{staticClass:"box alt"},[n("div",{staticClass:"row uniform"},[e._l(e.fleets,function(t){return n("section",{staticClass:" 4u 6u(medium) 12u$(xsmall) "},[n("img",{attrs:{src:"/static/images/OceanDrum.jpg"}}),e._v(" "),n("router-link",{attrs:{to:{name:"FleetProfileAdmin",params:{fleetId:t._id}}}},[n("h3",[e._v(e._s(t.name))])]),e._v(" "),n("a",{staticClass:"button special",on:{click:function(n){e.deleteFleet(t._id)}}},[e._v("Delete")])],1)}),e._v(" "),n("section",{staticClass:" 4u 6u(medium) 12u$(xsmall) "},[n("CENTER",[n("router-link",{attrs:{to:{name:"AddFleet"}}},[n("button",{staticClass:"button special big",attrs:{id:"btn"}},[e._v("Add a new fleet")])])],1)],1)],2)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"major"},[n("h2",[e._v("Fleets")])])}]}},20:function(e,t,n){function r(e){n(118)}var o=n(2)(n(120),n(121),r,"data-v-2929684a",null);e.exports=o.exports},41:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var s=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},42:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(s(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(v){var s=p++;r=f||(f=o()),t=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=o(),t=i.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function i(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(45),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,m=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var o=c(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var a=o[s],i=l[a.id];i.refs--,n.push(i)}t?(o=c(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var i=n[s];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete l[i.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},43:function(e,t){e.exports={URL:""}},45:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=s[0],i=s[1],u=s[2],c=s[3],l={id:e+":"+o,css:i,media:u,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}}});
//# sourceMappingURL=13.c2fda737d8f9fa586db4.js.map