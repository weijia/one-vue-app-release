(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ba404b"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function a(t,e,n){var a=l(),s=t-a,r=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=r;var l=Math.easeInOutQuad(c,a,s,e);o(l),c<e?i(t):n&&"function"===typeof n&&n()};u()}},"23ab":function(t,e,n){},4675:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{stripe:"",data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Actions",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/notebook/edit/"+e.row._id}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit",circle:""}})],1),n("el-button",{attrs:{icon:"el-icon-delete",circle:""},on:{click:function(n){e.row.removed=!0,t.$pouch.put(e.row,{},"articleList")}}})]}}])}),n("el-table-column",{attrs:{"min-width":"300px",label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("router-link",{staticClass:"link-type",attrs:{to:"/notebook/display/"+i._id}},[n("span",[t._v(t._s(i.title))])])]}}])}),n("el-table-column",{attrs:{width:"180px",align:"center",label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},o=[],l=(n("fb6a"),n("333d")),a=n("79e2"),s={name:"ArticleList",components:{Pagination:l["a"]},pouch:{articleList:function(){return{selector:{type:"article",removed:{$exists:!1}},sort:[{timestamp:"desc"}]}}},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10}}},created:function(){var t=this;Object(a["b"])(t,"articleList","article").on("change",(function(t){console.log("handle change")})).on("paused",(function(e){console.log("handle paused"),console.log(t.articleList),t.getList()})).on("active",(function(){console.log("handle active")})).on("denied",(function(t){console.log("handle denied")})).on("complete",(function(t){console.log("handle completed")})).on("error",(function(t){console.log("handle error"+t)}))},methods:{getList:function(){this.articleList&&(this.list=this.articleList.slice((this.listQuery.page-1)*this.listQuery.limit,this.listQuery.page*this.listQuery.limit),this.listLoading=!1,this.total=this.articleList.length)}}},r=s,c=(n("7030"),n("2877")),u=Object(c["a"])(r,i,o,!1,null,"4c449c04",null);e["default"]=u.exports},7030:function(t,e,n){"use strict";n("23ab")}}]);