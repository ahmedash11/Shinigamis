webpackJsonp([18,38],{126:function(t,e,n){var i=n(127);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(42)("388496f0",i,!0)},127:function(t,e,n){e=t.exports=n(41)(!0),e.push([t.i,".\\34 u img[data-v-d2fa1ac6]{max-height:100%;max-width:100%}#cv[data-v-d2fa1ac6]{padding-right:50px;cursor:pointer}#bin[data-v-d2fa1ac6]{cursor:pointer}#cv[data-v-d2fa1ac6]:hover{color:green}#bin[data-v-d2fa1ac6]:hover{color:red}","",{version:3,sources:["/Users/omarezzatel-etreby/Desktop/Shinigamis/Frontend/src/components/applicationsAdmin.vue"],names:[],mappings:"AACA,4BACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,qBACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,sBACE,cAAgB,CACjB,AACD,2BACE,WAAa,CACd,AACD,4BACE,SAAW,CACZ",file:"applicationsAdmin.vue",sourcesContent:["\n.\\34 u img[data-v-d2fa1ac6] {\n  max-height: 100%;\n  max-width: 100%;\n}\n#cv[data-v-d2fa1ac6] {\n  padding-right: 50px;\n  cursor: pointer;\n}\n#bin[data-v-d2fa1ac6] {\n  cursor: pointer;\n}\n#cv[data-v-d2fa1ac6]:hover {\n  color: green;\n}\n#bin[data-v-d2fa1ac6]:hover {\n  color: red;\n}\n"],sourceRoot:""}])},128:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(43),a=n.n(i),o=(n(0),n(3));e.default={name:"ApplicationsAdmin",data:function(){return{Applications:{}}},methods:{viewApplication:function(t){this.$router.push({name:"ApplicationAdmin",params:{applicationId:t._id}})},fetchApplications:function(){var t=this;this.$http.get(a.a.URL+"/admin/findApplications",{headers:o.a.getAuthHeader()}).then(function(e){console.log("response"+e),t.Applications=e.data.data.applications}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var e=0;e<t.body.msg.length;e++){var n=t.body.msg[e].msg;alertify.notify(n,"error",5)}})},deleteApplication:function(t){var e=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){e.$http.post(a.a.URL+"/admin/deleteApplication",{id:t},{headers:o.a.getAuthHeader()}).then(function(t){swal("Deleted!",t.body.msg,"success"),e.fetchApplications()}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var e=0;e<t.body.msg.length;e++){var n=t.body.msg[e].msg;alertify.notify(n,"error",5)}})},function(t){})},setSelectedApplication:function(t){this.selectedApplication=t,this.selectedApplication?(this.name=this.selectedApplication.name,this.description=this.selectedApplication.description):(this.name="",this.description="")}},created:function(){this.fetchApplications()},components:{}}},129:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ApplicationsAdmin"},[n("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"box alt"},[n("div",{staticClass:"row uniform"},t._l(t.Applications,function(e){return n("section",{staticClass:" 4u 6u(medium) 12u$(xsmall) "},[n("h3",{attrs:{id:"name","data-toggle":"modal","data-target":".my-modal"}},[t._v(t._s(e.firstName)+" "+t._s(e.lastName))]),t._v(" "),n("p",[t._v(t._s(e.position))]),t._v(" "),n("ul",{staticClass:"actions"},[n("li",[n("i",{staticClass:"fa fa-file",attrs:{id:"cv","aria-hidden":"true"},on:{click:function(n){t.viewApplication(e)}}}),t._v(" "),n("i",{staticClass:" glyphicon glyphicon-trash",attrs:{id:"bin"},on:{click:function(n){t.deleteApplication(e._id)}}})])])])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"major"},[n("h2",[t._v("Applications")])])}]}},22:function(t,e,n){function i(t){n(126)}var a=n(2)(n(128),n(129),i,"data-v-d2fa1ac6",null);t.exports=a.exports},41:function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=i(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(i[o]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},42:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=p[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(o(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(o(n.parts[a]));p[n.id]={id:n.id,refs:1,parts:r}}}}function a(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(h)return v;i.parentNode.removeChild(i)}if(m){var o=f++;i=u||(u=a()),e=r.bind(null,i,o,!1),n=r.bind(null,i,o,!0)}else i=a(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function r(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var o=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function s(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(45),p={},l=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var a=d(t,e);return i(a),function(e){for(var n=[],o=0;o<a.length;o++){var r=a[o],s=p[r.id];s.refs--,n.push(s)}e?(a=d(t,e),i(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete p[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},43:function(t,e){t.exports={URL:""}},45:function(t,e){t.exports=function(t,e){for(var n=[],i={},a=0;a<e.length;a++){var o=e[a],r=o[0],s=o[1],c=o[2],d=o[3],p={id:t+":"+a,css:s,media:c,sourceMap:d};i[r]?i[r].parts.push(p):n.push(i[r]={id:r,parts:[p]})}return n}}});
//# sourceMappingURL=18.ef0430974fe1890b31d6.js.map