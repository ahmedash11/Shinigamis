webpackJsonp([1],Array(32).concat([function(t,n,r){function e(t){r(149)}var o=r(1)(r(151),r(152),e,"data-v-3a58022a",null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,function(t,n,r){var e=r(71)("wks"),o=r(72),i=r(52).Symbol,a="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=e},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){t.exports=!r(65)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(56),o=r(77),i=r(78),a=Object.defineProperty;n.f=r(53)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(54),o=r(59);t.exports=r(53)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(58);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports={}},function(t,n,r){var e=r(71)("keys"),o=r(72);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n,r){var e=r(52),o=r(5),i=r(66),a=r(55),s=function(t,n,r){var c,u,f,l=t&s.F,d=t&s.G,p=t&s.S,v=t&s.P,m=t&s.B,h=t&s.W,g=d?o:o[n]||(o[n]={}),y=g.prototype,b=d?e:p?e[n]:(e[n]||{}).prototype;d&&(r=n);for(c in r)(u=!l&&b&&void 0!==b[c])&&c in g||(f=u?b[c]:r[c],g[c]=d&&"function"!=typeof b[c]?r[c]:m&&u?i(f,e):h&&b[c]==f?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[c]=f,t&s.R&&y&&!y[c]&&a(y,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(76);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(58),o=r(52).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(91),o=r(61);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(60),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(52),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(54).f,o=r(57),i=r(51)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(61);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){t.exports=!r(53)&&!r(65)(function(){return 7!=Object.defineProperty(r(67)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(58);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){t.exports={default:r(80),__esModule:!0}},function(t,n,r){r(81),r(96),t.exports=r(5).Array.from},function(t,n,r){"use strict";var e=r(82)(!0);r(83)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){var e=r(60),o=r(61);t.exports=function(t){return function(n,r){var i,a,s=String(o(n)),c=e(r),u=s.length;return c<0||c>=u?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},function(t,n,r){"use strict";var e=r(84),o=r(64),i=r(85),a=r(55),s=r(57),c=r(62),u=r(86),f=r(74),l=r(95),d=r(51)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,m,h,g,y){u(r,n,m);var b,A,w,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},C=n+" Iterator",_="values"==h,O=!1,j=t.prototype,B=j[d]||j["@@iterator"]||h&&j[h],S=B||x(h),E=h?_?x("entries"):S:void 0,k="Array"==n?j.entries||B:B;if(k&&(w=l(k.call(new t)))!==Object.prototype&&(f(w,C,!0),e||s(w,d)||a(w,d,v)),_&&B&&"values"!==B.name&&(O=!0,S=function(){return B.call(this)}),e&&!y||!p&&!O&&j[d]||a(j,d,S),c[n]=S,c[C]=v,h)if(b={values:_?S:x("values"),keys:g?S:x("keys"),entries:E},y)for(A in b)A in j||i(j,A,b[A]);else o(o.P+o.F*(p||O),n,b);return b}},function(t,n){t.exports=!0},function(t,n,r){t.exports=r(55)},function(t,n,r){"use strict";var e=r(87),o=r(59),i=r(74),a={};r(55)(a,r(51)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(a,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n,r){var e=r(56),o=r(88),i=r(73),a=r(63)("IE_PROTO"),s=function(){},c=function(){var t,n=r(67)("iframe"),e=i.length;for(n.style.display="none",r(94).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;e--;)delete c.prototype[i[e]];return c()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[a]=t):r=c(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(54),o=r(56),i=r(89);t.exports=r(53)?Object.defineProperties:function(t,n){o(t);for(var r,a=i(n),s=a.length,c=0;s>c;)e.f(t,r=a[c++],n[r]);return t}},function(t,n,r){var e=r(90),o=r(73);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(57),o=r(68),i=r(92)(!1),a=r(63)("IE_PROTO");t.exports=function(t,n){var r,s=o(t),c=0,u=[];for(r in s)r!=a&&e(s,r)&&u.push(r);for(;n.length>c;)e(s,r=n[c++])&&(~i(u,r)||u.push(r));return u}},function(t,n,r){var e=r(69);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(68),o=r(70),i=r(93);t.exports=function(t){return function(n,r,a){var s,c=e(n),u=o(c.length),f=i(a,u);if(t&&r!=r){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,n,r){var e=r(60),o=Math.max,i=Math.min;t.exports=function(t,n){return t=e(t),t<0?o(t+n,0):i(t,n)}},function(t,n,r){t.exports=r(52).document&&document.documentElement},function(t,n,r){var e=r(57),o=r(75),i=r(63)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){"use strict";var e=r(66),o=r(64),i=r(75),a=r(97),s=r(98),c=r(70),u=r(99),f=r(100);o(o.S+o.F*!r(102)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,l,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,h=void 0!==m,g=0,y=f(d);if(h&&(m=e(m,v>2?arguments[2]:void 0,2)),void 0==y||p==Array&&s(y))for(n=c(d.length),r=new p(n);n>g;g++)u(r,g,h?m(d[g],g):d[g]);else for(l=y.call(d),r=new p;!(o=l.next()).done;g++)u(r,g,h?a(l,m,[o.value,g],!0):o.value);return r.length=g,r}})},function(t,n,r){var e=r(56);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(62),o=r(51)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){"use strict";var e=r(54),o=r(59);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},function(t,n,r){var e=r(101),o=r(51)("iterator"),i=r(62);t.exports=r(5).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n,r){var e=r(69),o=r(51)("toStringTag"),i="Arguments"==e(function(){return arguments}()),a=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=a(n=Object(t),o))?r:i?e(n):"Object"==(s=e(n))&&"function"==typeof n.callee?"Arguments":s}},function(t,n,r){var e=r(51)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],a=i[e]();a.next=function(){return{done:r=!0}},i[e]=function(){return a},t(i)}catch(t){}return r}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){var e=r(150);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r(25)("23abd61e",e,!0)},function(t,n,r){n=t.exports=r(24)(!0),n.push([t.i,".modal-content[data-v-3a58022a]{position:relative;background-color:#1c1d26;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.\\34 u img[data-v-3a58022a]{max-height:100%;max-width:100%;min-height:100%}","",{version:3,sources:["/Users/omarezzatel-etreby/Desktop/Shinigamis/Frontend/src/components/awardsAdmin.vue"],names:[],mappings:"AACA,gCACE,kBAAmB,AACnB,yBAA0B,AAC1B,sBAAuB,AACvB,gCAAqC,AACrC,kBAAmB,AACnB,oCAAyC,AACzC,4BAA6B,AAC7B,SAAW,CACZ,AACD,4BACE,gBAAiB,AACjB,eAAgB,AAChB,eAAgB,CACjB",file:"awardsAdmin.vue",sourcesContent:["\n.modal-content[data-v-3a58022a] {\n  position: relative;\n  background-color: #1c1d26;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.\\34 u img[data-v-3a58022a] {\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 100%\n}\n"],sourceRoot:""}])},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(79),o=r.n(e),i=r(4),a=r.n(i),s=r(2);n.default={name:"awardsAdmin",data:function(){return{Awards:[],title:"",image:"",selectedAward:"",formData:{},url:""}},methods:{fetchAwards:function(){var t=this;this.$http.get(a.a.URL+"/user/getAllAwards").then(function(n){t.Awards=n.data.data.awards,console.log(t.Awards)}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var n=0;n<t.body.msg.length;n++){var r=t.body.msg[n].msg;alertify.notify(r,"error",5)}})},addAward:function(){var t=this,n={title:this.title};this.$http.post(a.a.URL+"/admin/addAward",n,{headers:s.a.getAuthHeader()}).then(function(n){$("#addAward").modal("hide"),alertify.notify(n.body.msg,"success",5),t.formData.append("award_id",n.data.data.award._id),t.$http.post(a.a.URL+"/admin/AwardImage",t.formData,{headers:{"jwt-token":localStorage.getItem("id_token")}}).then(function(n){t.fetchAwards()}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var n=0;n<t.body.msg.length;n++){var r=t.body.msg[n].msg;alertify.notify(r,"error",5)}})}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var n=0;n<t.body.msg.length;n++){var r=t.body.msg[n].msg;alertify.notify(r,"error",5)}})},deleteAward:function(t){var n=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){n.$http.post(a.a.URL+"/admin/deleteAward",{id:t},{headers:s.a.getAuthHeader()}).then(function(t){swal("Deleted!",t.body.msg,"success"),n.fetchAwards()}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error").then(function(){n.fetchAwards()});else for(var r=0;r<t.body.msg.length;r++){var e=t.body.msg[r].msg;alertify.notify(e,"error",5)}})},function(t){})},upload:function(t,n){var r=new FormData;o()(Array(n.length).keys()).map(function(e){r.append(t,n[e],n[e].name)}),this.formData=r},resetModal:function(){this.title="",this.formData={};var t=$("#awardPicture");t.wrap("<form>").closest("form").get(0).reset(),t.unwrap()}},created:function(){this.fetchAwards(),this.url=a.a.URL},components:{}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"awardsAdmin"},[r("section",{staticClass:"wrapper style1 special fade-up"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"box alt"},[r("div",{staticClass:"row uniform"},[t._l(t.Awards,function(n){return r("section",{staticClass:" 4u 6u(medium) 12u$(xsmall) "},[n.profileimg.path?r("img",{attrs:{src:t.url+n.profileimg.path.replace("public","")}}):r("img",{attrs:{src:"/static/images/rms.jpg"}}),t._v(" "),r("h3",[t._v(t._s(n.title))]),t._v(" "),r("ul",{staticClass:"actions"},[r("li",[r("a",{staticClass:"button special",on:{click:function(r){t.deleteAward(n._id)}}},[t._v("Delete")])])])])}),t._v(" "),r("section",{staticClass:" 4u 6u(medium) 12u$(xsmall) "},[r("CENTER",[r("button",{staticClass:"button special big",attrs:{"data-toggle":"modal","data-target":"#addAward"},on:{click:function(n){t.resetModal()}}},[t._v("Add a new Award")])])],1)],2)])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"addAward",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[t._m(1),t._v(" "),r("h4",[r("CENTER",[t._v("Add Award")])],1)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"row",staticStyle:{border:"none"}},[r("div",{staticClass:"col-md-12"},[r("form",{staticClass:"form-group",staticStyle:{display:"block"},attrs:{role:"form"},on:{submit:function(n){n.preventDefault(),t.addAward()}}},[r("label",{staticClass:"test"},[t._v("Title")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Title",required:""},domProps:{value:t.title},on:{input:function(n){n.target.composing||(t.title=n.target.value)}}}),t._v(" "),r("label",{staticClass:"test"},[t._v("Upload Images")]),t._v(" "),r("input",{ref:"avatar",staticClass:"button special",attrs:{type:"file",name:"avatar",id:"awardPicture",required:""},on:{change:function(n){t.upload(n.target.name,n.target.files)}}}),t._v(" "),r("div",[r("br"),t._v(" "),r("CENTER",[r("input",{staticClass:"button special",attrs:{type:"submit",value:"Submit"}})])],1)])])])])])])])])])},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("header",{staticClass:"major"},[r("h2",[t._v("Awards")])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}]}}]));
//# sourceMappingURL=1.c6bb272a37d1d91c51f5.js.map