(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{225:function(t,e,o){var content=o(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("6daaa788",content,!0,{sourceMap:!1})},226:function(t,e,o){var content=o(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("07b02241",content,!0,{sourceMap:!1})},237:function(t,e,o){"use strict";o(225)},238:function(t,e,o){var r=o(26)(!1);r.push([t.i,'.contact_container[data-v-27a9fb22]{width:calc(100% - 240px);margin:0 auto;text-align:center;display:flex;padding:30px;flex-direction:column;align-items:center}.contact_container_content[data-v-27a9fb22]{width:100%;transform:translateY(-120px);text-align:center}.contact_container_content_img[data-v-27a9fb22]{margin:0 auto 80px;width:100px;height:100px;position:relative;border-radius:100%;background:url(/img/me.jpg);background-size:contain}.contact_container_content_img .circle[data-v-27a9fb22]{height:100%;width:100%;border:.7px solid;position:absolute;border-radius:100%;z-index:-1}.contact_container_content_img .circle[data-v-27a9fb22]:first-child{border-style:dashed}.contact_container_content_img img[data-v-27a9fb22]{border-radius:100%;max-width:100%}.contact_container_content p[data-v-27a9fb22]{text-align:center;margin-top:30px;font-weight:200;line-height:25px}.contact_container_content_desc[data-v-27a9fb22]{background:rgba(1,84,215,.58824);padding:20px 50px;border-radius:10px;width:100%;margin-top:70px}.lamp_svg svg[data-v-27a9fb22]{width:200px;transform:translateY(-100px)}.lamp_svg svg polyline[data-v-27a9fb22]{opacity:0}.contact_status[data-v-27a9fb22]{display:flex;align-items:center;justify-content:center;margin:20px 0}.green_pulse[data-v-27a9fb22]{width:10px;height:10px;border-radius:100%;background:red;margin-right:12px;background:#78e8a7}.form_buttom[data-v-27a9fb22]{width:100%}.form_buttom span[data-v-27a9fb22]{margin-top:15px;margin-bottom:30px;display:block;font-size:10px}.form_buttom span a[data-v-27a9fb22]{color:#78e8a7;font-size:10px}.message_action_wrapper[data-v-27a9fb22]{width:100%;text-align:center;margin-bottom:60px}.message_action_wrapper p[data-v-27a9fb22]{margin:0!important}.message_action_wrapper a[data-v-27a9fb22]{color:#78e8a7;font-weight:700}.message_action_wrapper .explore_works[data-v-27a9fb22]{position:relative;color:#fff;font-weight:700;font-size:16px}.message_action_wrapper .explore_works[data-v-27a9fb22]:before{content:"";background:linear-gradient(0deg,#f33a68,#ff174e);width:50%;height:12px;position:absolute;right:0;bottom:3px;z-index:-1}@media only screen and (max-width:990px){.contact_container[data-v-27a9fb22]{width:100%}.lamp_svg[data-v-27a9fb22]{z-index:-1}.contact_container_content_desc[data-v-27a9fb22]{padding:10px 20px}}',""]),t.exports=r},239:function(t,e,o){"use strict";o(226)},240:function(t,e,o){var r=o(26)(!1);r.push([t.i,".v-messages__message{color:#ff7b9a}",""]),t.exports=r},261:function(t,e,o){"use strict";o.r(e);var r={layout:"secondary",mounted:function(){this.$anime.timeline().add({targets:".lamp_svg svg",translateY:["-400px","-100px"],easing:"linear"}).add({targets:".lamp_svg svg polyline",opacity:1,easing:"linear"}).add({targets:".contact_container_content_img",easing:"linear",duration:500,opacity:[0,1]}).add({targets:".contact_container_content_desc",easing:"easeInOutSine",opacity:[0,1],translateY:["50px",0]}),this.$anime({targets:".circle:nth-child(1)",easing:"easeInOutSine",scale:[1,1.6,.9],direction:"alternate",loop:!0,duration:3e3,delay:1e3,rotate:"100deg"}),this.$anime({targets:".circle:nth-child(2)",easing:"linear",scale:[1.2,1.9,.8],opacity:[1,.3,0],direction:"alternate",loop:!0,duration:3e3,rotate:"100deg",delay:2e3})},data:function(){return{loading:!1,success:!1,error:!1,form:{name:null,email:null,message:null},emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],messageRules:[function(t){return!!t||"Description is required"},function(t){return t&&t.length<=3500||"Description must be less than 3500 characters"}]}},methods:{submit:function(){var t=this;this.$refs.form.validate()&&(this.loading=!0,this.error=!1,this.false=!0,this.$axios.post("/v1/api/sendmail",this.form).then((function(){t.success=!0})).catch((function(e){t.error=!0})).then((function(){t.loading=!1})))},resetForm:function(){this.loading=!1,this.error=!1,this.success=!1}}},n=(o(237),o(239),o(16)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact_container"},[o("div",{staticClass:"lamp_svg"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 385 560"}},[o("defs",[o("linearGradient",{attrs:{id:"a",x1:"237.35",y1:"25.6",x2:"130.65",y2:"210.4",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:"0","stop-color":"#26366a"}}),o("stop",{attrs:{offset:"0.29","stop-color":"#2a3c74"}}),o("stop",{attrs:{offset:"0.77","stop-color":"#364a8d"}}),o("stop",{attrs:{offset:"1","stop-color":"#3c539c"}})],1),o("linearGradient",{attrs:{id:"b",x1:"90",y1:"221.5",x2:"278",y2:"221.5",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:"0","stop-color":"#e6e6f1"}}),o("stop",{attrs:{offset:"0.48","stop-color":"#f0f0f6"}}),o("stop",{attrs:{offset:"1","stop-color":"#fff"}})],1),o("linearGradient",{attrs:{id:"c",x1:"192.5",y1:"282",x2:"192.5",y2:"560",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:"0","stop-color":"#fff","stop-opacity":"0.3"}}),o("stop",{attrs:{offset:"0.31","stop-color":"#fffafc","stop-opacity":"0.29"}}),o("stop",{attrs:{offset:"0.52","stop-color":"#ffebf3","stop-opacity":"0.26"}}),o("stop",{attrs:{offset:"0.69","stop-color":"#ffd1e2","stop-opacity":"0.2"}}),o("stop",{attrs:{offset:"0.85","stop-color":"#ffadcc","stop-opacity":"0.11"}}),o("stop",{attrs:{offset:"0.99","stop-color":"#ff7fae","stop-opacity":"0.01"}}),o("stop",{attrs:{offset:"1","stop-color":"#ff7bac","stop-opacity":"0"}})],1),o("linearGradient",{attrs:{id:"d",x1:"96",y1:"282",x2:"272",y2:"282","xlink:href":"#a"}}),o("linearGradient",{attrs:{id:"e",x1:"103.24",y1:"226.85",x2:"131.57",y2:"226.85",gradientTransform:"translate(-43.14 27.29) rotate(-11.3)","xlink:href":"#a"}}),o("linearGradient",{attrs:{id:"f",x1:"118.54",y1:"228.24",x2:"132.24",y2:"228.24",gradientTransform:"translate(-43.14 27.29) rotate(-11.3)","xlink:href":"#a"}}),o("linearGradient",{attrs:{id:"g",x1:"193",y1:"220.05",x2:"277.72",y2:"220.05","xlink:href":"#a"}})],1),o("title",[t._v("Fichier 15")]),o("rect",{attrs:{x:"175",width:"18",height:"236",fill:"url(#a)"}}),o("path",{attrs:{d:"M278,252a93.78,93.78,0,0,1-6,33h-3.27c-19.35-10.91-50.79-18-86.27-18s-66.92,7.09-86.27,18H96a94,94,0,1,1,182-33Z",fill:"url(#b)"}}),o("polyline",{attrs:{points:"96 282 0 560 385 560 272 282",fill:"url(#c)"}}),o("ellipse",{attrs:{cx:"184",cy:"282",rx:"88",ry:"32",fill:"url(#d)"}}),o("path",{attrs:{d:"M108.05,255.89a58.76,58.76,0,0,1,.42-34.94A57.87,57.87,0,0,1,122.9,198l2.8,2.86a53.74,53.74,0,0,0-13.43,21.36,54.57,54.57,0,0,0-.38,32.52Z",stroke:"#3977d1","stroke-miterlimit":"10",opacity:"0.2",fill:"url(#e)"}}),o("path",{attrs:{d:"M120.48,240.64a28.38,28.38,0,0,1,.2-16.9,28.09,28.09,0,0,1,7-11.1L129,214a26,26,0,0,0-6.49,10.32,26.4,26.4,0,0,0-.19,15.73Z",stroke:"#3977d1","stroke-miterlimit":"10",opacity:"0.2",fill:"url(#f)"}}),o("path",{attrs:{d:"M193,158l43.58,98.34c16.07,2.54,29.69,9.08,35.92,26.16C297.79,228.06,224.66,151.41,193,158Z",stroke:"#3977d1","stroke-miterlimit":"10",opacity:"0.2",fill:"url(#g)"}})])]),t._v(" "),o("div",{staticClass:"contact_container_content"},[t._m(0),t._v(" "),o("v-form",{ref:"form",staticClass:"contact_container_content_desc"},[o("h2",[t._v("GET IN TOUCH")]),t._v(" "),o("div",{staticClass:"contact_status"},[o("div",{staticClass:"green_pulse pulse"}),t._v(" Available for full-time job")]),t._v(" "),o("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[t.success?[o("div",{staticClass:"message_action_wrapper"},[o("h3",[t._v("Thanks  for being awesome!")]),t._v(" "),o("p",[t._v("Your message has been successfully sent. I'll get back to you as soon as i can.")]),t._v(" "),o("nuxt-link",{staticClass:"explore_works",attrs:{to:"/works"}},[t._v("Explore my works")])],1)]:t.error?[o("div",{staticClass:"message_action_wrapper"},[o("h3",[t._v("Oops! something went wrong.")]),t._v(" "),o("p",[t._v("Please try to "),o("a",{attrs:{href:"#"},on:{click:function(e){return t.resetForm()}}},[t._v("re-submit the form.")]),t._v(" "),o("br"),t._v(" If you'd rather get in touch with me via email "),o("a",{attrs:{href:"mailto:marouanesouah@gmail.com"}},[t._v("marouanesouah@gmail.com")]),t._v(" or phone "),o("a",[t._v(" +212 6 97 85 41 90")])])])]:[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{staticClass:"primary_input",attrs:{dark:"",label:"Full name",rules:[function(t){return!!t||"Name is required!"}],outline:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),o("v-text-field",{staticClass:"primary_input",attrs:{dark:"",label:"Email",rules:t.emailRules,outline:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),o("v-textarea",{staticClass:"primary_input",attrs:{dark:"",label:"Message",rules:t.messageRules,outline:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),t._v(" "),o("div",{staticClass:"ml-auto mr-auto"},[t.loading?[o("v-progress-circular",{attrs:{size:30,color:"white",indeterminate:""}})]:o("v-btn",{attrs:{round:"",color:"primary",id:"btn_secondary"},on:{click:function(e){return t.submit()}}},[t._v("\n                            SEND MESSAGE\n                        ")])],2),t._v(" "),o("div",{staticClass:"form_buttom"},[o("span",[t._v(" If you'd rather get in touch with me by email "),o("a",{attrs:{href:"mailto:marouanesouah@gmail.col"}},[t._v("marouanesouah@gmail.com")]),t._v(" or phone "),o("a",{attrs:{href:"#"}},[t._v("+212 6 97 85 41 90")]),t._v(" I'll happy to hear from you.")])])]],2)],1)],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact_container_content_img pulse"},[o("div",{staticClass:"circle "}),t._v(" "),o("div",{staticClass:"circle "})])}],!1,null,"27a9fb22",null);e.default=component.exports}}]);