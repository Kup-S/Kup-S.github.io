(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4171c53e"],{"1a3f":function(t,e,n){},"1e4b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index",style:{height:t.scrollerHeight}},[n("el-scrollbar",{staticStyle:{height:"100%"}},[n("a",{attrs:{title:"开始学习",href:"https://rs7.top/blog"}},[n("button",{staticClass:"custom-btn btn-3"},[n("span",[t._v("进入")])])]),n("Xue"),n("Top"),n("div",{staticClass:"index_bottom_a",attrs:{align:"center"}},[n("a",{attrs:{target:"_blank",title:"联系我",href:"http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=S3l7enx9ent_cnsLOjplKCQm"}},[t._v("\n        ©2021 Kups的技术分享站\n      ")]),t._v("|\n      "),n("a",{attrs:{href:"http://beian.miit.gov.cn/",target:"_blank"}},[t._v("冀ICP备2021005651号")])])],1)],1)},a=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xue"},[n("canvas",{attrs:{id:"canvas_snow"}})])}];n("6c7b");function o(){var t=[],e=document.getElementById("canvas_snow"),n=e.getContext("2d"),i=200,a=-100,s=-100;function r(){n.clearRect(0,0,e.width,e.height);for(var l=0;l<i;l++){var c=t[l],d=a,h=s,u=150,m=c.x,v=c.y,f=Math.sqrt((m-d)*(m-d)+(v-h)*(v-h));if(f<u){var p=u/(f*f),g=(d-m)/f,w=(h-v)/f,b=p/2;c.velX-=b*g,c.velY-=b*w}else c.velX*=.98,c.velY<=c.speed&&(c.velY=c.speed),c.velX+=Math.cos(c.step+=.05)*c.stepSize;n.fillStyle="rgba(255,255,255,"+c.opacity+")",c.y+=c.velY,c.x+=c.velX,(c.y>=e.height||c.y<=0)&&o(c),(c.x>=e.width||c.x<=0)&&o(c),n.beginPath(),n.arc(c.x,c.y,c.size,0,2*Math.PI),n.fill()}requestAnimationFrame(r)}function o(t){t.x=Math.floor(Math.random()*e.width),t.y=0,t.size=3*Math.random()+2,t.speed=1*Math.random()+.5,t.velY=t.speed,t.velX=0,t.opacity=.5*Math.random()+.3}function l(){var n=new Date;n.getMonth();document.getElementById("canvas_snow").style.cssText="width: 100%; height: 100%";for(var a=0;a<i;a++){var s=Math.floor(Math.random()*e.width),o=Math.floor(Math.random()*e.height),l=3*Math.random()+2,c=1*Math.random()+.5,d=.5*Math.random()+.3;t.push({speed:c,velY:c,velX:0,x:s,y:o,size:l,stepSize:Math.random()/30*1,step:0,angle:180,opacity:d})}r()}e.width=window.innerWidth,e.height=window.innerHeight,document.addEventListener("mousemove",function(t){a=t.clientX,s=t.clientY}),window.addEventListener("resize",function(){e.width=window.innerWidth,e.height=window.innerHeight}),l()}var l={startSnow:o},c={name:"Xue",data:function(){return{}},mounted:function(){l.startSnow()}},d=c,h=(n("48bb"),n("2877")),u=Object(h["a"])(d,s,r,!1,null,null,null),m=u.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"bizhidiv"},[t.nowImage?n("div",{staticClass:"backGroundImageDiv headertop filter-dot",style:{height:t.scrollerHeight}},[n("div",{staticClass:"main-header2",style:{backgroundImage:"url("+t.nowImage.url+")"}})]):t._e()])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("div",{staticClass:"div"},[n("span",{attrs:{id:"login"}},[t._v("rs7.top")])])])}],p={name:"Top",data:function(){return{nowImage:"",imageList:[],index:0,path:"https://cdn.jsdelivr.net/gh/kup-s/pictureLibrary@master/api/imgList.json",mobilePath:"https://cdn.jsdelivr.net/gh/kup-s/pictureLibrary@master/api/mobileList.json"}},created:function(){this.assemble()},computed:{scrollerHeight:function(){return window.innerHeight+"px"}},methods:{assemble:function(){var t=this,e="";e=window.screen.width>1e3?this.path:this.mobilePath,this.$http.get(e).then(function(e){t.imageList=e.data,t.index=Math.floor(Math.random()*(t.imageList.length-1-0+1))+0,t.nowImage=t.imageList[t.index]})}}},g=p,w=(n("599a"),Object(h["a"])(g,v,f,!1,null,null,null)),b=w.exports,_={name:"Index",components:{Top:b,Xue:m},data:function(){return{}},mounted:function(){this.print()},methods:{print:function(){console.log("%c 祝你越来越好趟过难关便生长.",'color:#276ace;padding:10px 10px;font: normal 500 20px "黑体";')},show:function(){this.isShow=!this.isShow}},computed:{scrollerHeight:function(){return window.innerHeight+"px"}}},x=_,y=(n("d44d"),Object(h["a"])(x,i,a,!1,null,null,null));e["default"]=y.exports},"36bd":function(t,e,n){"use strict";var i=n("4bf8"),a=n("77f1"),s=n("9def");t.exports=function(t){var e=i(this),n=s(e.length),r=arguments.length,o=a(r>1?arguments[1]:void 0,n),l=r>2?arguments[2]:void 0,c=void 0===l?n:a(l,n);while(c>o)e[o++]=t;return e}},"48bb":function(t,e,n){"use strict";var i=n("d7f2"),a=n.n(i);a.a},"599a":function(t,e,n){"use strict";var i=n("1a3f"),a=n.n(i);a.a},"6c7b":function(t,e,n){var i=n("5ca1");i(i.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},beda:function(t,e,n){},d44d:function(t,e,n){"use strict";var i=n("beda"),a=n.n(i);a.a},d7f2:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4171c53e.e7966b45.js.map