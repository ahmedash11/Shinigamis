webpackJsonp([0],Array(36).concat([function(t,e,n){function r(t){n(213)}var o=n(2)(n(215),n(216),r,"data-v-acbbc1a8",null);t.exports=o.exports},,,,,function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(m)return v;r.parentNode.removeChild(r)}if(g){var a=d++;r=f||(f=o()),e=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(45),l={},p=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,m=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){m=n;var o=c(t,e);return r(o),function(e){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=l[i.id];s.refs--,n.push(s)}e?(o=c(t,e),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports={URL:""}},function(t,e,n){var r=n(66)("wks"),o=n(67),a=n(46).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],s=a[1],u=a[2],c=a[3],l={id:t+":"+o,css:s,media:u,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(60)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(50),o=n(72),a=n(73),i=Object.defineProperty;e.f=n(47)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(48),o=n(54);t.exports=n(47)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(53);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports={}},function(t,e,n){var r=n(66)("keys"),o=n(67);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(46),o=n(52),a=n(61),i=n(49),s=function(t,e,n){var u,c,l,p=t&s.F,f=t&s.G,d=t&s.S,m=t&s.P,v=t&s.B,g=t&s.W,h=f?o:o[e]||(o[e]={}),y=h.prototype,x=f?r:d?r[e]:(r[e]||{}).prototype;f&&(n=e);for(u in n)(c=!p&&x&&void 0!==x[u])&&u in h||(l=c?x[u]:n[u],h[u]=f&&"function"!=typeof x[u]?n[u]:v&&c?a(l,r):g&&x[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):m&&"function"==typeof l?a(Function.call,l):l,m&&((h.virtual||(h.virtual={}))[u]=l,t&s.R&&y&&!y[u]&&i(y,u,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(71);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(53),o=n(46).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var r=n(86),o=n(56);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(55),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(46),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(48).f,o=n(51),a=n(44)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},function(t,e,n){var r=n(56);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(47)&&!n(60)(function(){return 7!=Object.defineProperty(n(62)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(53);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){n(76),n(91),t.exports=n(52).Array.from},function(t,e,n){"use strict";var r=n(77)(!0);n(78)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(55),o=n(56);t.exports=function(t){return function(e,n){var a,i,s=String(o(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(a=s.charCodeAt(u),a<55296||a>56319||u+1===c||(i=s.charCodeAt(u+1))<56320||i>57343?t?s.charAt(u):a:t?s.slice(u,u+2):i-56320+(a-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(79),o=n(59),a=n(80),i=n(49),s=n(51),u=n(57),c=n(81),l=n(69),p=n(90),f=n(44)("iterator"),d=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,v,g,h,y){c(n,e,v);var x,b,_,w=function(t){if(!d&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",N="values"==g,S=!1,k=t.prototype,I=k[f]||k["@@iterator"]||g&&k[g],P=I||w(g),O=g?N?w("entries"):P:void 0,j="Array"==e?k.entries||I:I;if(j&&(_=p(j.call(new t)))!==Object.prototype&&(l(_,C,!0),r||s(_,f)||i(_,f,m)),N&&I&&"values"!==I.name&&(S=!0,P=function(){return I.call(this)}),r&&!y||!d&&!S&&k[f]||i(k,f,P),u[e]=P,u[C]=m,g)if(x={values:N?P:w("values"),keys:h?P:w("keys"),entries:O},y)for(b in x)b in k||a(k,b,x[b]);else o(o.P+o.F*(d||S),e,x);return x}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(49)},function(t,e,n){"use strict";var r=n(82),o=n(54),a=n(69),i={};n(49)(i,n(44)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),a(t,e+" Iterator")}},function(t,e,n){var r=n(50),o=n(83),a=n(68),i=n(58)("IE_PROTO"),s=function(){},u=function(){var t,e=n(62)("iframe"),r=a.length;for(e.style.display="none",n(89).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[a[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[i]=t):n=u(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(48),o=n(50),a=n(84);t.exports=n(47)?Object.defineProperties:function(t,e){o(t);for(var n,i=a(e),s=i.length,u=0;s>u;)r.f(t,n=i[u++],e[n]);return t}},function(t,e,n){var r=n(85),o=n(68);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(51),o=n(63),a=n(87)(!1),i=n(58)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,c=[];for(n in s)n!=i&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~a(c,n)||c.push(n));return c}},function(t,e,n){var r=n(64);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(63),o=n(65),a=n(88);t.exports=function(t){return function(e,n,i){var s,u=r(e),c=o(u.length),l=a(i,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(55),o=Math.max,a=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):a(t,e)}},function(t,e,n){t.exports=n(46).document&&document.documentElement},function(t,e,n){var r=n(51),o=n(70),a=n(58)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){"use strict";var r=n(61),o=n(59),a=n(70),i=n(92),s=n(93),u=n(65),c=n(94),l=n(95);o(o.S+o.F*!n(97)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,p,f=a(t),d="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,g=void 0!==v,h=0,y=l(f);if(g&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==y||d==Array&&s(y))for(e=u(f.length),n=new d(e);e>h;h++)c(n,h,g?v(f[h],h):f[h]);else for(p=y.call(f),n=new d;!(o=p.next()).done;h++)c(n,h,g?i(p,v,[o.value,h],!0):o.value);return n.length=h,n}})},function(t,e,n){var r=n(50);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},function(t,e,n){var r=n(57),o=n(44)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[o]===t)}},function(t,e,n){"use strict";var r=n(48),o=n(54);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(96),o=n(44)("iterator"),a=n(57);t.exports=n(52).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||a[r(t)]}},function(t,e,n){var r=n(64),o=n(44)("toStringTag"),a="Arguments"==r(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),o))?n:a?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(44)("iterator"),o=!1;try{var a=[7][r]();a.return=function(){o=!0},Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var a=[7],i=a[r]();i.next=function(){return{done:n=!0}},a[r]=function(){return i},t(a)}catch(t){}return n}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";e.__esModule=!0;var r=n(135),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports={default:n(136),__esModule:!0}},function(t,e,n){n(137);var r=n(52).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(59);r(r.S+r.F*!n(47),"Object",{defineProperty:n(48).f})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(214);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(42)("cd287f50",r,!0)},function(t,e,n){e=t.exports=n(41)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"AddFleet.vue",sourceRoot:""}])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(74),o=n.n(r),a=n(134),i=n.n(a),s=n(43),u=n.n(s),c=n(3);n(0);e.default={name:"addFleet",data:function(){return{name:"",type:"",design:"",fleetclass:"",built:"",tonnage:"",draft:"",horsepower:"",deckSpace:"",deckStrength:"",deckDimensions:"",crane:"",accomadation:"",flag:"",bollardPull:"",fireFighting:"",mooringSystem:"",helideck:"",fleet_id:"",formData:[],images:[],loading:!1}},methods:{AddFleet:function(){var t,e=this;this.loading=!0,this.$http.post(u.a.URL+"/admin/addFleet",(t={name:this.name,type:this.type,design:this.design,class:this.class,built:this.built,tonnage:this.tonnage,draft:this.draft,deckSpace:this.deckSpace},i()(t,"deckSpace",this.deckSpace),i()(t,"deckStrength",this.deckStrength),i()(t,"deckDimensions",this.deckDimensions),i()(t,"crane",this.crane),i()(t,"accomadation",this.accomadation),i()(t,"flag",this.flag),i()(t,"bollardPull",this.bollardPull),i()(t,"fireFighting",this.fireFighting),i()(t,"helideck",this.helideck),t),{headers:c.a.getAuthHeader()}).then(function(t){0!=e.formData.length?(e.formData.append("fleet_id",t.data.data.fleet._id),e.$http.post(u.a.URL+"/admin/upload",e.formData,{headers:{"jwt-token":localStorage.getItem("id_token")}}).then(function(n){e.loading=!1,alertify.notify(t.body.msg,"success",5),e.$router.go(-1)}).catch(function(t){if(e.loading=!1,t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var n=0;n<t.body.msg.length;n++){var r=t.body.msg[n].msg;alertify.notify(r,"error",5),e.$router.go(-1)}})):(e.loading=!1,alertify.notify(t.body.msg,"success",5),e.$router.go(-1))}).catch(function(t){if(e.loading=!1,t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var n=0;n<t.body.msg.length;n++){var r=t.body.msg[n].msg;alertify.notify(r,"error",5)}})},upload:function(t,e){var n=new FormData;o()(Array(e.length).keys()).map(function(r){n.append(t,e[r],e[r].name)}),this.formData=n}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addFleet"},[n("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 col-md-offset-2"},[n("form",{staticClass:"form-horizontal",attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),t.AddFleet()}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Type")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Type"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Design")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.design,expression:"design"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Design"},domProps:{value:t.design},on:{input:function(e){e.target.composing||(t.design=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Class")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fleetclass,expression:"fleetclass"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Class"},domProps:{value:t.fleetclass},on:{input:function(e){e.target.composing||(t.fleetclass=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputEmail2"}},[t._v("Built")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.built,expression:"built"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail2",placeholder:"Built"},domProps:{value:t.built},on:{input:function(e){e.target.composing||(t.built=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Tonnage")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tonnage,expression:"tonnage"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Tonnage"},domProps:{value:t.tonnage},on:{input:function(e){e.target.composing||(t.tonnage=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Draft")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.draft,expression:"draft"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Draft"},domProps:{value:t.draft},on:{input:function(e){e.target.composing||(t.draft=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Horsepower")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.horsepower,expression:"horsepower"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Horsepower"},domProps:{value:t.horsepower},on:{input:function(e){e.target.composing||(t.horsepower=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Deck Space")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.deckSpace,expression:"deckSpace"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Deck Space"},domProps:{value:t.deckSpace},on:{input:function(e){e.target.composing||(t.deckSpace=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Deck Strength")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.deckStrength,expression:"deckStrength"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Deck Strength"},domProps:{value:t.deckStrength},on:{input:function(e){e.target.composing||(t.deckStrength=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Deck Dimensions")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.deckDimensions,expression:"deckDimensions"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Deck Dimensions"},domProps:{value:t.deckDimensions},on:{input:function(e){e.target.composing||(t.deckDimensions=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Crane")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.crane,expression:"crane"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Crane"},domProps:{value:t.crane},on:{input:function(e){e.target.composing||(t.crane=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Accomodation")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accomadation,expression:"accomadation"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Accomodation"},domProps:{value:t.accomadation},on:{input:function(e){e.target.composing||(t.accomadation=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Flag")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.flag,expression:"flag"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Flag"},domProps:{value:t.flag},on:{input:function(e){e.target.composing||(t.flag=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Bollard Pull")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bollardPull,expression:"bollardPull"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Bollard Pull"},domProps:{value:t.bollardPull},on:{input:function(e){e.target.composing||(t.bollardPull=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Fire Fighting")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fireFighting,expression:"fireFighting"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Fire Fighting"},domProps:{value:t.fireFighting},on:{input:function(e){e.target.composing||(t.fireFighting=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Mooring System")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mooringSystem,expression:"mooringSystem"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Mooring System"},domProps:{value:t.mooringSystem},on:{input:function(e){e.target.composing||(t.mooringSystem=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Helideck")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.helideck,expression:"helideck"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName2",placeholder:"Helideck"},domProps:{value:t.helideck},on:{input:function(e){e.target.composing||(t.helideck=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName2"}},[t._v("Upload Images")]),t._v(" "),n("input",{ref:"avatar",staticClass:"button special",attrs:{type:"file",name:"avatar",id:"avatar",multiple:"multiple"},on:{change:function(e){t.upload(e.target.name,e.target.files)}}})]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t.loading?n("button",{staticClass:"button special",attrs:{type:"submit"}},[n("i",{staticClass:"fa fa-circle-o-notch fa-spin fa-fw"})]):n("button",{staticClass:"button special",attrs:{type:"submit"}},[t._v("Add Fleet")])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"major"},[n("h2",[t._v("Add Fleet")])])}]}}]));
//# sourceMappingURL=0.6a9838c3a9d16dd41f59.js.map