webpackJsonp([0],{"/TYz":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("StHj"),n=e("rGQh"),s=!1;var i=function(t){s||e("Nk3Y")},o=e("VU/8")(r.a,n.a,!1,i,"data-v-2a183b29",null);o.options.__file="pages/index.vue",a.default=o.exports},Nk3Y:function(t,a,e){var r=e("e5mA");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("494bb655",r,!1,{sourceMap:!1})},StHj:function(t,a,e){"use strict";var r=e("Xxa5"),n=e.n(r),s=e("exGp"),i=e.n(s);a.a={name:"Normal",data:function(){return{posts:[],loaded:!1}},created:function(){var t=i()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("https://www.reddit.com/r/hyperloot.json");case 2:a=t.sent,this.posts=a.data.data.children,this.loaded=!0;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},e5mA:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".list a[data-v-2a183b29]{display:block}",""])},rGQh:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[this.loaded?t._e():e("span",[t._v("Loading...")]),e("div",{staticClass:"list"},t._l(t.posts,function(a){return e("a",{key:a.data.permalink,attrs:{href:a.data.url}},[t._v(t._s(a.data.title))])}))])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};a.a=n}});