webpackJsonp([1],{"3daJ":function(t,n){},ChCr:function(t,n,a){"use strict";n.a={name:"Main",data:function(){return{}}}},DnnT:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("canvas",{attrs:{id:"canvas"}})},o=[],r={render:e,staticRenderFns:o};n.a=r},DyiH:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"v-main-container"},[a("router-view")],1)},o=[],r={render:e,staticRenderFns:o};n.a=r},F9SB:function(t,n,a){"use strict";n.a={data:function(){return{}}}},IcnI:function(t,n,a){"use strict";var e=a("1P6t"),o=a("9rMa"),r=a("mUbh"),i=(a.n(r),a("UjVw")),s=(a.n(i),a("SYKq"));e.default.use(o.a);n.a=new o.a.Store({actions:r,getters:i,modules:{defaultModule:s.a},strict:!1})},Idf3:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view"),t._v(" "),e("div",{staticClass:"main"},[e("img",{attrs:{src:a("oKXd")}}),t._v(" "),e("h1",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"animated fadeInUp"},[t._v("1995-01-07")]),t._v(" "),e("h1",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"animated fadeInUp"},[t._v("HeFei"),e("i",{staticClass:"rhombus"}),t._v("China")]),t._v(" "),e("main-canvas",{attrs:{dotsNum:t.dotsNum}})],1)],1)},o=[],r={render:e,staticRenderFns:o};n.a=r},LIIa:function(t,n){},M93x:function(t,n,a){"use strict";function e(t){a("nDrK")}var o=a("NZSx"),r=a("Idf3"),i=a("/Xao"),s=e,c=i(o.a,r.a,!1,s,null,null);n.a=c.exports},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("1P6t"),o=a("M93x"),r=a("YaEn"),i=a("IcnI"),s=a("3daJ"),c=a.n(s),u=a("z5U/"),l=a.n(u),f=a("rK6t");a.n(f);e.default.use(l.a),e.default.use(c.a),e.default.config.productionTip=!1,new e.default({el:"#app",store:i.a,router:r.a,template:"<App/>",components:{App:o.a}})},NZSx:function(t,n,a){"use strict";var e=a("ejkJ");n.a={name:"app",components:{mainCanvas:e.a},mounted:function(){this.show=!0},data:function(){return{dotsNum:60,roundColor:"#999",lineColor:"",isColor:!0,show:!1}}}},Ry9X:function(t,n,a){"use strict";function e(t){a("m5vC")}var o=a("F9SB"),r=a("jXgX"),i=a("/Xao"),s=e,c=i(o.a,r.a,!1,s,"data-v-b95edd4a",null);n.a=c.exports},SRml:function(t,n,a){"use strict";n.a={mounted:function(){var t=this,n=document.getElementById("canvas"),a=n.getContext("2d"),e=function(){return Math.floor(225*Math.random())},o=window.innerWidth,r=window.innerHeight,i=[];n.width=o,n.height=r;var s=function(n,e){var o=n.x,r=n.y,i=n.r,s=n.color;a.beginPath(),a.arc(o,r,i,0,2*Math.PI),t.isColor?a.fillStyle=s:a.fillStyle=t.roundColor,a.fill(),a.closePath()},c=function(t){return t.x>=o-t.r?t.controlX="left":t.x<=parseInt(t.r/2)&&(t.controlX="right"),t.y>=r-t.r?t.controlY="bottom":t.y<=parseInt(t.r/2)&&(t.controlY="top"),t},u=function(n){n.map(function(n,e){a.beginPath(),a.moveTo(n.x1,n.y1),a.lineTo(n.x2,n.y2),a.LineWeight=1,t.isColor?a.strokeStyle=n.color:a.strokeStyle=t.lineColor,a.stroke(),a.closePath()})},l=function(t){var n=[],a=[];t.map(function(t,a){var e=c(t),o=d(e);n.push(o)}),n.map(function(t,e){n.map(function(n,e){if(t!==n){var o=t.x-n.x,r=t.y-n.y;if(Math.abs(o)<150&&Math.abs(r)<150){var i={x1:t.x,y1:t.y,x2:n.x,y2:n.y,color:t.color};a.push(i)}}})}),u(a),n.map(function(t,n){s(t)}),i=n,setTimeout(function(){f()},50)},f=function(){a.clearRect(0,0,o,r),l(i)},d=function(t){switch(t.controlX){case"right":t.x++;break;case"left":t.x--}switch(t.controlY){case"top":t.y++;break;case"bottom":t.y--}return t};l(function(){for(var n=[],a=0;a<t.dotsNum;a++){var i={};i.x=parseInt(Math.random()*o),i.y=parseInt(Math.random()*r),i.r=parseInt(10*Math.random()),i.controlX=parseInt(10*Math.random())>5?"left":"right",i.controlY=parseInt(10*Math.random())>5?"bottom":"top",i.color="rgba("+e()+","+e()+","+e()+",.3)",n.push(i)}return n}());var p=function(t){var n={};n.x=t.clientX,n.y=t.clientY,n.r=0,i[0]=n,i[0].r=1},m=function(t){var n={};n.x=t.clientX,n.y=t.clientY,n.r=parseInt(10*Math.random()),n.color="rgba("+e()+","+e()+","+e()+",.3)",n.controlX=parseInt(10*Math.random())>5?"left":"right",n.controlY=parseInt(10*Math.random())>5?"bottom":"top",i.push(n)};window.addEventListener("mousemove",p),window.addEventListener("click",m)},data:function(){return{}},props:{dotsNum:{type:Number,default:50},isColor:{type:Boolean,default:!0},roundColor:{type:String,default:"#999"},lineColor:{type:String,default:"#ccc"}}}},SYKq:function(t,n,a){"use strict";var e={},o={},r={},i={};n.a={state:e,getters:o,actions:r,mutations:i}},UjVw:function(t,n){},YaEn:function(t,n,a){"use strict";var e=a("1P6t"),o=a("zO6J"),r=a("s6+2"),i=a("Ry9X");e.default.use(o.a),n.a=new o.a({routes:[{path:"/",name:"Main",component:r.a,children:[{path:"app",name:"app",component:i.a}]}]})},a8Lf:function(t,n){},ejkJ:function(t,n,a){"use strict";function e(t){a("LIIa")}var o=a("SRml"),r=a("DnnT"),i=a("/Xao"),s=e,c=i(o.a,r.a,!1,s,null,null);n.a=c.exports},jXgX:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"v-app-container"},[t._v("\n  My App\n")])},o=[],r={render:e,staticRenderFns:o};n.a=r},m5vC:function(t,n){},mUbh:function(t,n){},nDrK:function(t,n){},oKXd:function(t,n,a){t.exports=a.p+"static/img/logoko.caf4873.png"},rK6t:function(t,n){},"s6+2":function(t,n,a){"use strict";function e(t){a("a8Lf")}var o=a("ChCr"),r=a("DyiH"),i=a("/Xao"),s=e,c=i(o.a,r.a,!1,s,"data-v-123a8f79",null);n.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.7fb05cc4b6b0f130c623.js.map