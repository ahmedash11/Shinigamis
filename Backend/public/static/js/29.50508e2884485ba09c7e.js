webpackJsonp([29],{172:function(s,e,o){function t(s){o(173)}var a=o(1)(o(175),o(176),t,"data-v-fc45d5b8",null);s.exports=a.exports},173:function(s,e,o){var t=o(174);"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);o(25)("5283f3fc",t,!0)},174:function(s,e,o){e=s.exports=o(24)(!0),e.push([s.i,".modal-content[data-v-fc45d5b8]{position:relative;background-color:#1c1d26;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.\\34 u img[data-v-fc45d5b8]{max-height:100%;max-width:100%}","",{version:3,sources:["/Users/omarezzatel-etreby/Desktop/Shinigamis/Frontend/src/components/editPassword.vue"],names:[],mappings:"AACA,gCACE,kBAAmB,AACnB,yBAA0B,AAC1B,sBAAuB,AACvB,gCAAqC,AACrC,kBAAmB,AACnB,oCAAyC,AACzC,4BAA6B,AAC7B,SAAW,CACZ,AACD,4BACE,gBAAiB,AACjB,cAAgB,CACjB",file:"editPassword.vue",sourcesContent:["\n.modal-content[data-v-fc45d5b8] {\n  position: relative;\n  background-color: #1c1d26;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.\\34 u img[data-v-fc45d5b8] {\n  max-height: 100%;\n  max-width: 100%;\n}\n"],sourceRoot:""}])},175:function(s,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(4),a=o.n(t),r=o(2);e.default={name:"editPassword",data:function(){return{oldPassword:"",newPassword:"",confirmNewPassword:""}},methods:{editPassword:function(){var s=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, change it!"}).then(function(){var e={oldPassword:s.oldPassword,newPassword:s.newPassword,confirmNewPassword:s.confirmNewPassword,email:r.a.getAdmin().email};s.$http.post(a.a.URL+"/admin/editPassword",e,{headers:r.a.getAuthHeader()}).then(function(e){swal("Password Changed!",e.body.msg,"success"),s.confirmNewPassword="",s.oldPassword="",s.newPassword=""}).catch(function(s){if(s.body.msg instanceof String||"string"==typeof s.body.msg)swal("Oops...",s.body.msg,"error");else if(1==s.body.msg.length)swal("Oops...",s.body.msg[0].msg,"error");else for(var e=0;e<s.body.msg.length;e++){var o=s.body.msg[e].msg;alertify.notify(o,"error",5)}})})}},components:{}}},176:function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("div",{staticClass:"editPassword"},[o("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"editPassword"}},[o("div",{staticClass:"container"},[s._m(0),s._v(" "),o("form",{attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),s.editPassword()}}},[o("center",[o("div",{staticClass:"6u 12u$(xsmall)"},[o("label",{staticClass:"test"},[s._v("Current Password:")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.oldPassword,expression:"oldPassword"}],attrs:{type:"password",name:"name",required:""},domProps:{value:s.oldPassword},on:{input:function(e){e.target.composing||(s.oldPassword=e.target.value)}}})]),s._v(" "),o("div",{staticClass:"6u 12u$(xsmall)"},[o("label",{staticClass:"test"},[s._v("Password:")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.newPassword,expression:"newPassword"}],attrs:{type:"password",name:"name",required:""},domProps:{value:s.newPassword},on:{input:function(e){e.target.composing||(s.newPassword=e.target.value)}}})]),s._v(" "),o("div",{staticClass:"6u 12u$(xsmall)"},[o("label",{staticClass:"test"},[s._v("Confirm Password:")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.confirmNewPassword,expression:"confirmNewPassword"}],attrs:{type:"password",name:"name",required:""},domProps:{value:s.confirmNewPassword},on:{input:function(e){e.target.composing||(s.confirmNewPassword=e.target.value)}}})])]),s._v(" "),o("br"),s._v(" "),o("button",{staticClass:"button special",staticStyle:{"margin-bottom":"20px"}},[s._v("Update Password")])],1)])])])},staticRenderFns:[function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("header",{staticClass:"major"},[o("h2",[s._v("Edit Password")])])}]}}});
//# sourceMappingURL=29.50508e2884485ba09c7e.js.map