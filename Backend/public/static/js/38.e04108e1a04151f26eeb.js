webpackJsonp([38],{126:function(t,i,a){var n=a(127);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(42)("388496f0",n,!0)},127:function(t,i,a){i=t.exports=a(41)(!0),i.push([t.i,".\\34 u img[data-v-d2fa1ac6]{max-height:100%;max-width:100%}#cv[data-v-d2fa1ac6]{padding-right:50px;cursor:pointer}#bin[data-v-d2fa1ac6]{cursor:pointer}#cv[data-v-d2fa1ac6]:hover{color:green}#bin[data-v-d2fa1ac6]:hover{color:red}","",{version:3,sources:["/Users/omarezzatel-etreby/Desktop/Shinigamis/Frontend/src/components/applicationsAdmin.vue"],names:[],mappings:"AACA,4BACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,qBACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,sBACE,cAAgB,CACjB,AACD,2BACE,WAAa,CACd,AACD,4BACE,SAAW,CACZ",file:"applicationsAdmin.vue",sourcesContent:["\n.\\34 u img[data-v-d2fa1ac6] {\n  max-height: 100%;\n  max-width: 100%;\n}\n#cv[data-v-d2fa1ac6] {\n  padding-right: 50px;\n  cursor: pointer;\n}\n#bin[data-v-d2fa1ac6] {\n  cursor: pointer;\n}\n#cv[data-v-d2fa1ac6]:hover {\n  color: green;\n}\n#bin[data-v-d2fa1ac6]:hover {\n  color: red;\n}\n"],sourceRoot:""}])},128:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a(43),e=a.n(n),o=(a(0),a(3));i.default={name:"ApplicationsAdmin",data:function(){return{Applications:{}}},methods:{viewApplication:function(t){this.$router.push({name:"ApplicationAdmin",params:{applicationId:t._id}})},fetchApplications:function(){var t=this;this.$http.get(e.a.URL+"/admin/findApplications",{headers:o.a.getAuthHeader()}).then(function(i){console.log("response"+i),t.Applications=i.data.data.applications}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var i=0;i<t.body.msg.length;i++){var a=t.body.msg[i].msg;alertify.notify(a,"error",5)}})},deleteApplication:function(t){var i=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){i.$http.post(e.a.URL+"/admin/deleteApplication",{id:t},{headers:o.a.getAuthHeader()}).then(function(t){swal("Deleted!",t.body.msg,"success"),i.fetchApplications()}).catch(function(t){if(t.body.msg instanceof String||"string"==typeof t.body.msg)swal("Oops...",t.body.msg,"error");else for(var i=0;i<t.body.msg.length;i++){var a=t.body.msg[i].msg;alertify.notify(a,"error",5)}})},function(t){})},setSelectedApplication:function(t){this.selectedApplication=t,this.selectedApplication?(this.name=this.selectedApplication.name,this.description=this.selectedApplication.description):(this.name="",this.description="")}},created:function(){this.fetchApplications()},components:{}}},129:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ApplicationsAdmin"},[a("section",{staticClass:"wrapper style1 special fade-up",attrs:{id:"four"}},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"box alt"},[a("div",{staticClass:"row uniform"},t._l(t.Applications,function(i){return a("section",{staticClass:" 4u 6u(medium) 12u$(xsmall) "},[a("h3",{attrs:{id:"name","data-toggle":"modal","data-target":".my-modal"}},[t._v(t._s(i.firstName)+" "+t._s(i.lastName))]),t._v(" "),a("p",[t._v(t._s(i.position))]),t._v(" "),a("ul",{staticClass:"actions"},[a("li",[a("i",{staticClass:"fa fa-file",attrs:{id:"cv","aria-hidden":"true"},on:{click:function(a){t.viewApplication(i)}}}),t._v(" "),a("i",{staticClass:" glyphicon glyphicon-trash",attrs:{id:"bin"},on:{click:function(a){t.deleteApplication(i._id)}}})])])])}))])])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("header",{staticClass:"major"},[a("h2",[t._v("Applications")])])}]}},22:function(t,i,a){function n(t){a(126)}var e=a(2)(a(128),a(129),n,"data-v-d2fa1ac6",null);t.exports=e.exports}});
//# sourceMappingURL=38.e04108e1a04151f26eeb.js.map