webpackJsonp([16,37],{130:function(t,e,n){var a=n(131);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(42)("a2de77f0",a,!0)},131:function(t,e,n){e=t.exports=n(41)(!0),e.push([t.i,".modal-content[data-v-6306bdb0]{position:relative;background-color:#1c1d26;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}article.special[data-v-6306bdb0],section.special[data-v-6306bdb0]{text-align:left;padding-left:2.55em}h3[data-v-6306bdb0]{text-align:center}","",{version:3,sources:["/Users/omarezzatel-etreby/Desktop/Shinigamis/Frontend/src/components/contactUsAdmin.vue"],names:[],mappings:"AACA,gCACE,kBAAmB,AACnB,yBAA0B,AAC1B,sBAAuB,AACvB,gCAAqC,AACrC,kBAAmB,AACnB,oCAAyC,AACzC,4BAA6B,AAC7B,SAAW,CACZ,AACD,kEACI,gBAAiB,AACjB,mBAAqB,CACxB,AACD,oBACA,iBAAmB,CAClB",file:"contactUsAdmin.vue",sourcesContent:["\n.modal-content[data-v-6306bdb0] {\n  position: relative;\n  background-color: #1c1d26;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\narticle.special[data-v-6306bdb0], section.special[data-v-6306bdb0] {\n    text-align: left; \n    padding-left: 2.55em;\n}\nh3[data-v-6306bdb0]{\ntext-align: center;\n}\n"],sourceRoot:""}])},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(43),o=n.n(a),i=n(3);e.default={name:"contactUsAdmin",data:function(){return{info:{},phone:"",mobile:"",fax:"",contactPerson:""}},created:function(){this.fetchInfo()},methods:{fetchInfo:function(){var t=this;this.$http.get(o.a.URL+"/user/getInfo").then(function(e){t.info=e.data.data.info})},updateContactUs:function(){var t=this;this.$http.post(o.a.URL+"/admin/updateContactUs",this.info,{headers:i.a.getAuthHeader()}).then(function(e){alertify.notify(e.body.msg,"success",5),t.fetchInfo()}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var e=0;e<t.body.msg.length;e++){var n=t.body.msg[e].msg;alertify.notify(n,"error",5)}})},addPhone:function(){-1==this.info.phone.indexOf(this.phone)?(this.info.phone.push(this.phone),this.phone="",this.updateContactUs()):alertify.notify("Duplicate number","error",5)},deletePhone:function(t){var e=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var n=e.info.phone,a=n.indexOf(t);e.info.phone.splice(a,1),e.updateContactUs()},function(t){})},addMobile:function(){-1==this.info.mobile.indexOf(this.mobile)?(this.info.mobile.push(this.mobile),this.mobile="",this.updateContactUs()):alertify.notify("Duplicate number","error",5)},deleteMobile:function(t){var e=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var n=e.info.mobile,a=n.indexOf(t);e.info.mobile.splice(a,1),e.updateContactUs()},function(t){})},addFax:function(){-1==this.info.fax.indexOf(this.fax)?(this.info.fax.push(this.fax),this.fax="",this.updateContactUs()):alertify.notify("Duplicate number","error",5)},deleteFax:function(t){var e=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var n=e.info.fax,a=n.indexOf(t);e.info.fax.splice(a,1),e.updateContactUs()},function(t){})},addContactPerson:function(){-1==this.info.contactsPersons.indexOf(this.contactPerson)?(this.info.contactsPersons.push(this.contactPerson),this.contactPerson="",this.updateContactUs()):alertify.notify("Duplicate name","error",5)},deleteContactPerson:function(t){var e=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var n=e.info.contactsPersons,a=n.indexOf(t);e.info.contactsPersons.splice(a,1),e.updateContactUs()},function(t){})}}}},133:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contactUsAdmin"},[n("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"table-wrapper"},[n("table",[n("tbody",[n("tr",[t._m(1),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.info.address,expression:"info.address"}],attrs:{type:"text",name:"address"},domProps:{value:t.info.address},on:{input:function(e){e.target.composing||(t.info.address=e.target.value)}}})]),t._v(" "),n("td",[n("a",{staticClass:"button special",on:{click:function(e){t.updateContactUs()}}},[t._v("Update")])])]),t._v(" "),n("tr",[t._m(2),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.info.email,expression:"info.email"}],attrs:{type:"text",name:"address"},domProps:{value:t.info.email},on:{input:function(e){e.target.composing||(t.info.email=e.target.value)}}})]),t._v(" "),n("td",[n("a",{staticClass:"button special",on:{click:function(e){t.updateContactUs()}}},[t._v("Update")])])]),t._v(" "),n("tr",[t._m(3),n("td",t._l(t.info.phone,function(e){return n("div",[t._v("\n                    "+t._s(e)+"\n                    "),n("br")])})),t._v(" "),t._m(4)]),t._v(" "),n("tr",[t._m(5),n("td",t._l(t.info.mobile,function(e){return n("div",[t._v("\n                    "+t._s(e)+"\n                  ")])})),t._v(" "),t._m(6)]),t._v(" "),n("tr",[t._m(7),n("td",t._l(t.info.fax,function(e){return n("div",[t._v("\n                    "+t._s(e)+"\n                    "),n("br")])})),t._v(" "),t._m(8)]),t._v(" "),n("tr",[t._m(9),t._v(" "),n("td",t._l(t.info.contactsPersons,function(e){return n("div",[t._v("\n                  "+t._s(e)+"\n                  "),n("br")])})),t._v(" "),t._m(10)])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"editPhone",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t._m(11),t._v(" "),n("h4",[n("CENTER",[t._v("Edit Phone")])],1)]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"row",staticStyle:{border:"none"}},[n("div",{staticClass:"col-md-12"},[n("form",{staticStyle:{display:"block"},attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),t.addPhone()}}},[n("table",[t._m(12),t._v(" "),n("tbody",[t._l(t.info.phone,function(e){return n("tr",[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[n("a",{staticClass:"button special",on:{click:function(n){t.deletePhone(e)}}},[t._v("Delete")])])])}),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",name:"phone",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),t._m(13)],2)])])])])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"editMobile",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t._m(14),t._v(" "),n("h4",[n("CENTER",[t._v("Edit Mobile")])],1)]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"row",staticStyle:{border:"none"}},[n("div",{staticClass:"col-md-12"},[n("form",{staticStyle:{display:"block"},attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),t.addMobile()}}},[n("table",[t._m(15),t._v(" "),n("tbody",[t._l(t.info.mobile,function(e){return n("tr",[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[n("a",{staticClass:"button special",on:{click:function(n){t.deleteMobile(e)}}},[t._v("Delete")])])])}),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",name:"mobile",required:""},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),t._v(" "),t._m(16)],2)])])])])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"editFax",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t._m(17),t._v(" "),n("h4",[n("CENTER",[t._v("Edit Fax")])],1)]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"row",staticStyle:{border:"none"}},[n("div",{staticClass:"col-md-12"},[n("form",{staticStyle:{display:"block"},attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),t.addFax()}}},[n("table",[t._m(18),t._v(" "),n("tbody",[t._l(t.info.fax,function(e){return n("tr",[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[n("a",{staticClass:"button special",on:{click:function(n){t.deleteFax(e)}}},[t._v("Delete")])])])}),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fax,expression:"fax"}],attrs:{type:"text",name:"fax",required:""},domProps:{value:t.fax},on:{input:function(e){e.target.composing||(t.fax=e.target.value)}}})]),t._v(" "),t._m(19)],2)])])])])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"editContactPerson",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t._m(20),t._v(" "),n("h4",[n("CENTER",[t._v("Edit Contact Persons")])],1)]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"row",staticStyle:{border:"none"}},[n("div",{staticClass:"col-md-12"},[n("form",{staticStyle:{display:"block"},attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),t.addContactPerson()}}},[n("table",[t._m(21),t._v(" "),n("tbody",[t._l(t.info.contactsPersons,function(e){return n("tr",[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[n("a",{staticClass:"button special",on:{click:function(n){t.deleteContactPerson(e)}}},[t._v("Delete")])])])}),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactPerson,expression:"contactPerson"}],attrs:{type:"text",name:"contactPerson",required:""},domProps:{value:t.contactPerson},on:{input:function(e){e.target.composing||(t.contactPerson=e.target.value)}}})]),t._v(" "),t._m(22)],2)])])])])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"major"},[n("h2",[t._v("Contact Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("h3",[n("i",{staticClass:"glyphicon glyphicon-home",attrs:{"aria-hidden":"true"}}),t._v(" Headquarter Address")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("h3",[n("i",{staticClass:"glyphicon glyphicon-envelope",attrs:{"aria-hidden":"true"}}),t._v(" Email")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("h3",[n("i",{staticClass:"glyphicon glyphicon-phone-alt",attrs:{"aria-hidden":"true"}}),t._v(" Phone")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special",attrs:{"data-toggle":"modal","data-target":"#editPhone"}},[t._v("Edit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("h3",[n("i",{staticClass:"fa fa-mobile fa-2x",attrs:{"aria-hidden":"true"}}),t._v(" Mobile")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special",attrs:{"data-toggle":"modal","data-target":"#editMobile"}},[t._v("Edit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("h3",[n("i",{staticClass:"fa fa-fax ",attrs:{"aria-hidden":"true"}}),t._v(" Fax")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special",attrs:{"data-toggle":"modal","data-target":"#editFax"}},[t._v("Edit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("h3",[n("i",{staticClass:"glyphicon glyphicon-user",attrs:{"aria-hidden":"true"}}),t._v(" Contact Persons")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special",attrs:{"data-toggle":"modal","data-target":"#editContactPerson"}},[t._v("Edit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Phone")]),t._v(" "),n("th",[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special"},[t._v("+")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Mobile")]),t._v(" "),n("th",[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special"},[t._v("+")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Fax")]),t._v(" "),n("th",[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special"},[t._v("+")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Contact Person")]),t._v(" "),n("th",[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("button",{staticClass:"button special"},[t._v("+")])])}]}},23:function(t,e,n){function a(t){n(130)}var o=n(2)(n(132),n(133),a,"data-v-6306bdb0",null);t.exports=o.exports},41:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=a(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function a(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=n(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(a[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},42:function(t,e,n){function a(t){for(var e=0;e<t.length;e++){var n=t[e],a=d[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(i(n.parts[o]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function i(t){var e,n,a=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(a){if(m)return p;a.parentNode.removeChild(a)}if(h){var i=v++;a=f||(f=o()),e=s.bind(null,a,i,!1),n=s.bind(null,a,i,!0)}else a=o(),e=r.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function s(t,e,n,a){var o=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function r(t,e){var n=e.css,a=e.media,o=e.sourceMap;if(a&&t.setAttribute("media",a),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(45),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,v=0,m=!1,p=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){m=n;var o=c(t,e);return a(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i],r=d[s.id];r.refs--,n.push(r)}e?(o=c(t,e),a(o)):o=[];for(var i=0;i<n.length;i++){var r=n[i];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete d[r.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},43:function(t,e){t.exports={URL:""}},45:function(t,e){t.exports=function(t,e){for(var n=[],a={},o=0;o<e.length;o++){var i=e[o],s=i[0],r=i[1],l=i[2],c=i[3],d={id:t+":"+o,css:r,media:l,sourceMap:c};a[s]?a[s].parts.push(d):n.push(a[s]={id:s,parts:[d]})}return n}}});
//# sourceMappingURL=16.0638cedf09d9c054d0a5.js.map