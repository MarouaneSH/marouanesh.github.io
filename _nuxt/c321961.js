(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(t,e,o){var content=o(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("709c528a",content,!0,{sourceMap:!1})},235:function(t,e,o){"use strict";o(224)},236:function(t,e,o){var n=o(26)(!1);n.push([t.i,'.about_container[data-v-70785fc0]{padding:0 20px;width:calc(100% - 240px);margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center}.about_container_content[data-v-70785fc0]{transform:translateY(-120px);text-align:center}.about_container_content_img[data-v-70785fc0]{margin:0 auto 80px;width:100px;height:100px;position:relative;border-radius:100%;background:url(/img/me.jpg);background-size:contain}.about_container_content_img .circle[data-v-70785fc0]{height:100%;width:100%;border:.7px solid;position:absolute;border-radius:100%;z-index:-1}.about_container_content_img .circle[data-v-70785fc0]:first-child{border-style:dashed}.about_container_content_img img[data-v-70785fc0]{border-radius:100%;max-width:100%}.about_container_content_desc_timeline[data-v-70785fc0]{display:flex}.about_container_content p[data-v-70785fc0]{text-align:center;margin-top:10px;font-weight:200;line-height:25px;text-align:justify}.about_container_content p a[data-v-70785fc0]{color:#78e8a7;font-weight:700;text-transform:uppercase}.about_container_content_desc_timeline_experiences[data-v-70785fc0]{align-self:flex-start;width:50%}.about_container_content_desc_timeline_experiences h5[data-v-70785fc0]{text-align:left;margin-top:50px;margin-bottom:21px;position:relative}.about_container_content_desc_timeline_experiences h5[data-v-70785fc0]:before{content:"";position:absolute;background:#ff0047;height:3px;bottom:1px;left:2px;width:20px;z-index:-1}.about_container_content_desc_timeline_about[data-v-70785fc0]{width:50%;padding-right:25px;text-align:left}.about_container_content_desc_timeline_about h5[data-v-70785fc0]{text-align:left;margin-top:50px;margin-bottom:21px;position:relative}.about_container_content_desc_timeline_about h5[data-v-70785fc0]:before{content:"";position:absolute;background:#ff0047;height:3px;bottom:1px;left:0;width:20px;z-index:-1}.about_container_content_desc_timeline_about p[data-v-70785fc0]{font-weight:700}.about_container_content .theme--light.v-timeline[data-v-70785fc0]:before,.about_container_content .v-timeline[data-v-70785fc0]:before{background:hsla(0,0%,100%,.32)}.about_container_content .subheading_location[data-v-70785fc0]{font-size:11px}.about_container_content .subheading_location svg[data-v-70785fc0]{margin-right:4px}.about_container_content .subheadline_occupation[data-v-70785fc0]{font-size:12px;margin-top:4px}.about_container_content .subheadline_occupation span[data-v-70785fc0]{font-size:10px}.lamp_svg svg[data-v-70785fc0]{width:200px;transform:translateY(-100px)}.lamp_svg svg polyline[data-v-70785fc0]{opacity:0}@media only screen and (max-width:990px){.about_container[data-v-70785fc0]{width:100%}.works_container[data-v-70785fc0]{margin-top:0}.lamp_svg[data-v-70785fc0]{z-index:-1}.about_container_content_desc_timeline[data-v-70785fc0]{flex-direction:column}.about_container_content_desc_timeline_about[data-v-70785fc0],.about_container_content_desc_timeline_experiences[data-v-70785fc0]{width:100%}}',""]),t.exports=n},260:function(t,e,o){"use strict";o.r(e);var n={layout:"secondary",mounted:function(){this.$anime.timeline().add({targets:".lamp_svg svg",translateY:["-400px","-100px"],easing:"linear"}).add({targets:".lamp_svg svg polyline",opacity:1,easing:"linear"}).add({targets:".about_container_content_img",easing:"linear",duration:500,opacity:[0,1]}).add({targets:".about_container_content_desc",easing:"easeInOutSine",opacity:[0,1],translateY:["50px",0]}),this.$anime({targets:".circle:nth-child(1)",easing:"easeInOutSine",scale:[1,1.6,.9],direction:"alternate",loop:!0,duration:3e3,delay:1e3,rotate:"100deg"}),this.$anime({targets:".circle:nth-child(2)",easing:"linear",scale:[1.2,1.9,.8],opacity:[1,.3,0],direction:"alternate",loop:!0,duration:3e3,rotate:"100deg",delay:2e3})}},r=(o(235),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about_container"},[o("div",{staticClass:"lamp_svg"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 385 560"}},[o("defs",[o("linearGradient",{attrs:{id:"a",x1:"237.35",y1:"25.6",x2:"130.65",y2:"210.4",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:"0","stop-color":"#26366a"}}),o("stop",{attrs:{offset:"0.29","stop-color":"#2a3c74"}}),o("stop",{attrs:{offset:"0.77","stop-color":"#364a8d"}}),o("stop",{attrs:{offset:"1","stop-color":"#3c539c"}})],1),o("linearGradient",{attrs:{id:"b",x1:"90",y1:"221.5",x2:"278",y2:"221.5",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:"0","stop-color":"#e6e6f1"}}),o("stop",{attrs:{offset:"0.48","stop-color":"#f0f0f6"}}),o("stop",{attrs:{offset:"1","stop-color":"#fff"}})],1),o("linearGradient",{attrs:{id:"c",x1:"192.5",y1:"282",x2:"192.5",y2:"560",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:"0","stop-color":"#fff","stop-opacity":"0.3"}}),o("stop",{attrs:{offset:"0.31","stop-color":"#fffafc","stop-opacity":"0.29"}}),o("stop",{attrs:{offset:"0.52","stop-color":"#ffebf3","stop-opacity":"0.26"}}),o("stop",{attrs:{offset:"0.69","stop-color":"#ffd1e2","stop-opacity":"0.2"}}),o("stop",{attrs:{offset:"0.85","stop-color":"#ffadcc","stop-opacity":"0.11"}}),o("stop",{attrs:{offset:"0.99","stop-color":"#ff7fae","stop-opacity":"0.01"}}),o("stop",{attrs:{offset:"1","stop-color":"#ff7bac","stop-opacity":"0"}})],1),o("linearGradient",{attrs:{id:"d",x1:"96",y1:"282",x2:"272",y2:"282","xlink:href":"#a"}}),o("linearGradient",{attrs:{id:"e",x1:"103.24",y1:"226.85",x2:"131.57",y2:"226.85",gradientTransform:"translate(-43.14 27.29) rotate(-11.3)","xlink:href":"#a"}}),o("linearGradient",{attrs:{id:"f",x1:"118.54",y1:"228.24",x2:"132.24",y2:"228.24",gradientTransform:"translate(-43.14 27.29) rotate(-11.3)","xlink:href":"#a"}}),o("linearGradient",{attrs:{id:"g",x1:"193",y1:"220.05",x2:"277.72",y2:"220.05","xlink:href":"#a"}})],1),o("title",[t._v("Fichier 15")]),o("rect",{attrs:{x:"175",width:"18",height:"236",fill:"url(#a)"}}),o("path",{attrs:{d:"M278,252a93.78,93.78,0,0,1-6,33h-3.27c-19.35-10.91-50.79-18-86.27-18s-66.92,7.09-86.27,18H96a94,94,0,1,1,182-33Z",fill:"url(#b)"}}),o("polyline",{attrs:{points:"96 282 0 560 385 560 272 282",fill:"url(#c)"}}),o("ellipse",{attrs:{cx:"184",cy:"282",rx:"88",ry:"32",fill:"url(#d)"}}),o("path",{attrs:{d:"M108.05,255.89a58.76,58.76,0,0,1,.42-34.94A57.87,57.87,0,0,1,122.9,198l2.8,2.86a53.74,53.74,0,0,0-13.43,21.36,54.57,54.57,0,0,0-.38,32.52Z",stroke:"#3977d1","stroke-miterlimit":"10",opacity:"0.2",fill:"url(#e)"}}),o("path",{attrs:{d:"M120.48,240.64a28.38,28.38,0,0,1,.2-16.9,28.09,28.09,0,0,1,7-11.1L129,214a26,26,0,0,0-6.49,10.32,26.4,26.4,0,0,0-.19,15.73Z",stroke:"#3977d1","stroke-miterlimit":"10",opacity:"0.2",fill:"url(#f)"}}),o("path",{attrs:{d:"M193,158l43.58,98.34c16.07,2.54,29.69,9.08,35.92,26.16C297.79,228.06,224.66,151.41,193,158Z",stroke:"#3977d1","stroke-miterlimit":"10",opacity:"0.2",fill:"url(#g)"}})])]),t._v(" "),o("div",{staticClass:"about_container_content"},[t._m(0),t._v(" "),o("div",{staticClass:"about_container_content_desc"},[o("div",{staticClass:"about_container_content_desc_timeline"},[o("div",{staticClass:"about_container_content_desc_timeline_about"},[o("h5",[t._v("ABOUT ME")]),t._v(" "),o("p",[o("strong",[t._v("Hi, I'm Marouane Souah.")]),t._v(" A full stack web developer & mobile app developer based in Essaouira, Morocco . "),o("br"),t._v("\n                        My skills are broad, from ux to design, front-end to back-end development. I enjoy each aspect, and love building web apps & mobile apps from start to finish, for clients all over the world.\n                        "),o("br"),t._v(" "),o("br"),t._v(" "),o("a",{attrs:{href:"/CV-v2019.pdf"}},[t._v("View my resume")]),t._v(" "),o("br"),o("br"),t._v("\n                        I'm available for remote work, if you would like to build something together, "),o("nuxt-link",{attrs:{to:"/contact"}},[t._v("get in touch")]),t._v(" ?\n                        "),o("br"),o("br"),t._v("\n                        EMAIL : marouanesouah@gmail.com "),o("br"),t._v("\n                        PHONE : +212 6 97 85 41 90\n                    ")],1)]),t._v(" "),o("div",{staticClass:"about_container_content_desc_timeline_experiences"},[o("h5",[t._v("EXPERIENCES")]),t._v(" "),o("v-timeline",{attrs:{"align-top":"",dense:"","px-4":""}},[o("v-timeline-item",{attrs:{color:"#00a48f",small:""}},[o("v-layout",[o("v-avatar",[o("v-img",{attrs:{src:"/img/companies/logo_impax.png"}})],1),t._v(" "),o("div",{staticClass:"pl-3 text-xs-left"},[o("div",[o("strong",[t._v("IMPAX-TOURS")]),t._v(" - "),o("span",{staticClass:"subheading_location"},[o("font-awesome-icon",{attrs:{icon:["fa","map-marker-alt"]}}),t._v("Aachen, Germany ")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[o("span",[o("font-awesome-icon",{attrs:{icon:["fa","home"]}}),t._v(" Remotely")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[t._v("Full stack developer - "),o("span",[t._v("DEC 2018 - MAR 2019")])])])],1)],1),t._v(" "),o("v-timeline-item",{attrs:{color:"#6f00ff",small:""}},[o("v-layout",[o("v-avatar",[o("v-img",{attrs:{src:"/img/companies/logo_stage.png"}})],1),t._v(" "),o("div",{staticClass:"pl-3 text-xs-left"},[o("div",[o("strong",[t._v("STAGEMAROC")]),t._v(" - "),o("span",{staticClass:"subheading_location"},[o("font-awesome-icon",{attrs:{icon:["fa","map-marker-alt"]}}),t._v("  Casablanca, Morocco ")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[o("span",[o("font-awesome-icon",{attrs:{icon:["fa","home"]}}),t._v(" Remotely")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[t._v("Full stack developer - "),o("span",[t._v("OCT 2018 - NOV 2018")])])])],1)],1),t._v(" "),o("v-timeline-item",{attrs:{color:"#e98a82",small:""}},[o("v-layout",[o("v-avatar",[o("v-img",{attrs:{src:"/img/companies/logo_wklni.png"}})],1),t._v(" "),o("div",{staticClass:"pl-3 text-xs-left"},[o("div",[o("strong",[t._v("WKLNI")]),t._v(" - "),o("span",{staticClass:"subheading_location"},[o("font-awesome-icon",{attrs:{icon:["fa","map-marker-alt"]}}),t._v("  Riyadh, Saudi Arabia ")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[o("span",[o("font-awesome-icon",{attrs:{icon:["fa","home"]}}),t._v(" Remotely")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[t._v("Full stack developer - "),o("span",[t._v("JUN  2018 - SEPT 2018")])])])],1)],1),t._v(" "),o("v-timeline-item",{attrs:{color:"red",small:""}},[o("v-layout",[o("v-avatar",[o("v-img",{attrs:{src:"/img/companies/logo_grafimage.jpg"}})],1),t._v(" "),o("div",{staticClass:"pl-3 text-xs-left"},[o("div",[o("strong",[t._v("Grafimage")]),t._v(" - "),o("span",{staticClass:"subheading_location"},[o("font-awesome-icon",{attrs:{icon:["fa","map-marker-alt"]}}),t._v("  Agadir, Morocco ")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[o("span",[o("font-awesome-icon",{attrs:{icon:["fa","building"]}}),t._v(" In office")],1)]),t._v(" "),o("div",{staticClass:"subheadline_occupation"},[t._v("Internship Frontend Developer - "),o("span",[t._v("MAR  2018 - MAY 2018")])])])],1)],1)],1)],1)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about_container_content_img pulse"},[o("div",{staticClass:"circle "}),t._v(" "),o("div",{staticClass:"circle "})])}],!1,null,"70785fc0",null);e.default=component.exports}}]);