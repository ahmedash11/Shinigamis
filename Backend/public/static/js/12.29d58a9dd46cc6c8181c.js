webpackJsonp([12],{103:function(t,n,e){"use strict";n.__esModule=!0;var r=e(104),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(t,n,e){return n in t?(0,o.default)(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},104:function(t,n,e){t.exports={default:e(105),__esModule:!0}},105:function(t,n,e){e(106);var r=e(5).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},106:function(t,n,e){var r=e(64);r(r.S+r.F*!e(53),"Object",{defineProperty:e(54).f})},186:function(t,n,e){var r=e(187);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(25)("8182fa8a",r,!0)},187:function(t,n,e){n=t.exports=e(24)(!0),n.push([t.i,".imgcarousel[data-v-bf48b4f8]{display:inline;margin:auto;height:75%;width:75%}","",{version:3,sources:["/Users/omarezzatel-etreby/Documents/Projects/Shinigamis/Frontend/src/components/awardsPage.vue"],names:[],mappings:"AACA,8BACE,eAAgB,AAChB,YAAa,AACb,WAAY,AACZ,SAAW,CACZ",file:"awardsPage.vue",sourcesContent:["\n.imgcarousel[data-v-bf48b4f8] {\n  display: inline;\n  margin: auto;\n  height: 75%;\n  width: 75%;\n}\n"],sourceRoot:""}])},188:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=e(103),i=e.n(o),a=e(4),u=e.n(a),c=e(6);e.n(c);n.default=(r={name:"awardsPage",data:function(){return{Awards:[],url:""}},components:{Carousel:c.Carousel,Slide:c.Slide},created:function(){this.fetchAwards(),this.url=u.a.URL},updated:function(){$(".VueCarousel-navigation-button").css("border-bottom","none")}},i()(r,"components",{Carousel:c.Carousel,Slide:c.Slide}),i()(r,"methods",{fetchAwards:function(){var t=this;this.$http.get(u.a.URL+"/user/getAllAwards").then(function(n){t.Awards=n.data.data.awards}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var n=0;n<t.body.msg.length;n++){var e=t.body.msg[n].msg;alertify.notify(e,"error",5)}})}}),r)},189:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"awardsPage"},[e("section",{attrs:{id:"awards"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("carousel",{attrs:{paginationActiveColor:"#ffffff",paginationColor:"#333333",autoplay:!0,autoplayTimeout:2400,easing:"linear",speed:1e3,loop:!0,navigationEnabled:!0}},t._l(t.Awards,function(n){return e("slide",[e("img",{staticClass:"imgcarousel",attrs:{src:t.url+n.profileimg.path.replace("public","")}}),t._v(" "),e("h3",[t._v(t._s(n.title))])])}))],1)])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"major"},[e("h2",[t._v("Awards")])])}]}},39:function(t,n,e){function r(t){e(186)}var o=e(1)(e(188),e(189),r,"data-v-bf48b4f8",null);t.exports=o.exports},52:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},53:function(t,n,e){t.exports=!e(65)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},54:function(t,n,e){var r=e(56),o=e(77),i=e(78),a=Object.defineProperty;n.f=e(53)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},55:function(t,n,e){var r=e(54),o=e(59);t.exports=e(53)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},56:function(t,n,e){var r=e(58);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},58:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},59:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},64:function(t,n,e){var r=e(52),o=e(5),i=e(66),a=e(55),u=function(t,n,e){var c,s,f,l=t&u.F,p=t&u.G,d=t&u.S,v=t&u.P,y=t&u.B,g=t&u.W,h=p?o:o[n]||(o[n]={}),b=h.prototype,m=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(c in e)(s=!l&&m&&void 0!==m[c])&&c in h||(f=s?m[c]:e[c],h[c]=p&&"function"!=typeof m[c]?e[c]:y&&s?i(f,r):g&&m[c]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((h.virtual||(h.virtual={}))[c]=f,t&u.R&&b&&!b[c]&&a(b,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},65:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},66:function(t,n,e){var r=e(76);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},67:function(t,n,e){var r=e(58),o=e(52).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},76:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},77:function(t,n,e){t.exports=!e(53)&&!e(65)(function(){return 7!=Object.defineProperty(e(67)("div"),"a",{get:function(){return 7}}).a})},78:function(t,n,e){var r=e(58);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}}});
//# sourceMappingURL=12.29d58a9dd46cc6c8181c.js.map