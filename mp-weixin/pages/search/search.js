(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"07eb":function(t,e,n){"use strict";var a=n("fa6c"),s=n.n(a);s.a},2557:function(t,e,n){"use strict";n.r(e);var a=n("9dac"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=s.a},"9dac":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){n.e("components/search/search").then(function(){return resolve(n("d561"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/goods/item").then(function(){return resolve(n("6112"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("components/share/share").then(function(){return resolve(n("26c9"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{searchValue:"",isShow:0,hidden:0,lists:[],classid:0,searchType:"input",start:0}},components:{searchView:a,goodsItemView:s,shareView:i},onLoad:function(t){t.classid?(this.classid=t.classid,this.onReachBottomData()):t.value?(this.searchValue=t.value,this.getData(t.value)):(this.isShow=!0,this.hidden=!0)},onReachBottom:function(t){""!=this.classid&&(this.start+=20,this.onReachBottomData())},methods:{onReachBottomData:function(e){t.showLoading({title:"加载中"});var n=this;t.request({url:n.$serverUrl+"/byclass",data:{appkey:n.$appkey,classid:n.classid,start:n.start,num:20},success:function(e){t.hideLoading(),n.hidden=1;var a=e.data.result;""!==a&&a.list.length>0?n.lists=n.lists.concat(a.list):""!==a&&0==n.lists.length&&(n.isShow=!0)}})},getData:function(e){t.showLoading({title:"加载中"});var n=this;n.classid="",t.request({url:n.$serverUrl+"/search",data:{appkey:n.$appkey,keyword:e,num:60},success:function(e){var a=e.data.result;if(t.hideLoading(),n.hidden=1,""!==a&&0==a.list.length)return n.isShow=!0;n.isShow=!1,n.lists=a.list}})}},onShareAppMessage:function(t){return t.from,{title:"美食秘籍",desc:"美食推荐 · 精选美食做法",success:function(t){},fail:function(t){}}}};e.default=c}).call(this,n("543d")["default"])},aeab:function(t,e,n){"use strict";(function(t){n("fbae"),n("921b");a(n("66fd"));var e=a(n("b99c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b99c:function(t,e,n){"use strict";n.r(e);var a=n("d630"),s=n("2557");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);n("07eb");var c,o=n("f0c5"),r=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"7342150e",null,!1,a["a"],c);e["default"]=r.exports},d630:function(t,e,n){"use strict";var a,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},fa6c:function(t,e,n){}},[["aeab","common/runtime","common/vendor"]]]);