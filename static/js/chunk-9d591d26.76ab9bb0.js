(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d591d26"],{19:function(t,e){},20:function(t,e){},21:function(t,e){},22:function(t,e){},23:function(t,e){},24:function(t,e){},25:function(t,e){},"587b":function(t,e,n){},"59ea":function(t,e,n){},"7a8a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-editor-container"},[n("fav-search",{on:{encryptSwitchClicked:function(e){return t.encryptSwitchClicked()},tagFiles:t.tagFiles},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[10,50,100,400],"current-page":t.currentPage,layout:"total, sizes, prev, pager, next, jumper",total:t.rows,"page-size":t.perPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:total":function(e){t.rows=e},"update:pageSize":function(e){t.perPage=e},"update:page-size":function(e){t.perPage=e}}})],1),n("Favorites",{staticClass:"favorites",attrs:{favorites:t.pagedFav,tags:t.tags}})],1)},a=[],r=n("b85c"),s=(n("4de4"),n("d3b7"),n("4d63"),n("ac1f"),n("2c3e"),n("25f0"),n("00b4"),n("a4d3"),n("e01a"),n("fb6a"),n("d81d"),n("b64b"),n("4e82"),n("79e2")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isFavLoaded?n("div",{staticClass:"favorites",attrs:{id:"#favorites"}},t._l(t.existingFav,(function(t){return n("div",{key:t.id},[n("FavoriteItem",{attrs:{favorite:t}})],1)})),0):t._e()},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.favorite.removed?t._e():n("div",{class:{encrypted:t.favorite.encrypted}},[n("span",{staticClass:"floating-tool-bar"},[n("button",{staticClass:"btn",on:{click:function(e){return t.removeUrl()}}},[n("i",{staticClass:"el-icon-delete"})]),t.isDecryptableFav()?n("button",{staticClass:"btn",on:{click:function(e){return t.decrypt()}}},[n("i",{staticClass:"el-icon-key"})]):t._e(),t.favorite.encrypted?t._e():n("button",{staticClass:"btn",on:{click:function(e){return t.encrypt()}}},[n("i",{staticClass:"el-icon-key"})])]),t.favorite.description?n("a",{attrs:{href:t.url}},[t._v(t._s(t.favorite.description))]):n("a",{attrs:{href:t.url}},[t._v(t._s(t.url))]),t.tags?n("input-tag",{model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}):t._e()],1)},u=[],f=n("1c46");function d(t,e){try{var n=f.createCipher("aes192",e),i=n.update(t,"utf8","hex");return i+=n.final("hex"),i}catch(a){return"Can not decrypt"}}function p(t,e){var n=f.createDecipher("aes192",e),i=n.update(t,"hex","utf8");return i+=n.final("utf8"),i}function h(t,e){try{return p(t,e)}catch(n){return"Can not decrypt"}}function g(t,e){try{return p(t,e),!0}catch(n){return!1}}function v(t,e){var n,i=[],a=Object(r["a"])(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;i.push(h(s,e))}}catch(o){a.e(o)}finally{a.f()}return i}function y(t,e){var n,i=[],a=Object(r["a"])(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;i.push(d(s,e))}}catch(o){a.e(o)}finally{a.f()}return i}var m={name:"FavoriteItem",props:{favorite:{type:Object,required:!0}},computed:{url:function(){return this.favorite.encrypted?h(this.favorite.url,this.$store.state.settings.encryptingKey):this.favorite.url},tags:{get:function(){var t=this.favorite.tags;return this.favorite.encrypted&&(t=v(this.favorite.tags,this.$store.state.settings.encryptingKey)),"string"===typeof t&&(t=[t]),t},set:function(t){this.favorite.encrypted?this.favorite.tags=y(t,this.$store.state.settings.encryptingKey):this.favorite.tags=t,this.favorite.timestamp=Date.now()/1e3,this.$pouch.put(this.favorite,{},"favorites")}}},methods:{removeUrl:function(){this.favorite.removed&&(this.favorite.deleted=!0),this.favorite.removed=!0,this.$pouch.put(this.favorite,{},"favorites")},decrypt:function(){this.isDecryptableFav(this.favorite)&&(this.favorite.url=h(this.favorite.url,this.$store.state.settings.encryptingKey),this.favorite.tags=v(this.favorite.tags,this.$store.state.settings.encryptingKey),delete this.favorite.encrypted,this.$pouch.put(this.favorite,{},"favorites"))},encrypt:function(t){this.favorite.encrypted||(this.favorite.url=d(this.favorite.url,this.$store.state.settings.encryptingKey),this.favorite.tags=y(this.favorite.tags,this.$store.state.settings.encryptingKey),this.favorite.encrypted=!0,this.$pouch.put(this.favorite,{},"favorites"))},isDecryptableFav:function(){if(this.favorite.encrypted&&g(this.favorite.url,this.$store.state.settings.encryptingKey))return!0}}},b=m,w=(n("f99d"),n("2877")),k=Object(w["a"])(b,l,u,!1,null,null,null),_=k.exports,F={name:"Favorites",components:{FavoriteItem:_},props:{favorites:{},tags:{type:Array,required:!0}},data:function(){return{url:""}},computed:{existingFav:function(){return this.favorites?this.favorites.filter((function(t){return!t.removed})):[]}},methods:{addUrl:function(t,e){var n=document.getElementById("machineId").textContent;this.$pouch.post({url:t,type:"favorites",machine:n,tags:e,removed:!1},{},"favorites"),this.$emit("url-added")},removeUrl:function(t){t.removed=!0,this.$pouch.put(t,{},"favorites")},clearRemoved:function(t){t.deleted&&this.$pouch.remove(t,{},"favorites")},isFavLoaded:function(t){return console.log(t),t}}},S=F,$=Object(w["a"])(S,o,c,!1,null,null,null),C=$.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{autocomplete:"off"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:18}},[n("el-input",{attrs:{id:"search",placeholder:"Serach keyword"},on:{input:function(e){return t.$emit("input",t.keyword)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("el-col",{attrs:{span:2}},[n("el-button",{on:{click:function(e){t.isShowAdvanced=!t.isShowAdvanced}}},[t._v(" Show Advanced ")])],1),n("el-col",{attrs:{span:2}},[n("label")]),"state-machine-id"!==t.$store.state.machineId?n("el-col",{attrs:{span:2}},[0==t.taggingFiles.length?n("label",{staticClass:"col",attrs:{id:"drag-file"}},[t._v(" Drag your files here ")]):n("label",{staticClass:"col"},[t._v(t._s(t.taggingFiles))])]):t._e()],1)],1),t.isShowAdvanced?n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:2}},[n("label",{staticClass:"password-label"},[t._v("Password:")])]),n("el-col",{attrs:{span:10}},[n("el-input",{attrs:{id:"password",placeholder:"Password","show-password":""},on:{input:function(e){return t.savePass()}},model:{value:t.encryptingKey,callback:function(e){t.encryptingKey=e},expression:"encryptingKey"}})],1),n("el-button",{on:{click:function(e){t.encryptingKey=""}}},[t._v(" Clear Password ")]),n("el-button",{on:{click:function(e){return t.encryptSwitchClicked()}}},[t.isOnlyShowNotEncrypted?n("label",[t._v("Show Encrypted")]):t._e(),t.isOnlyShowNotEncrypted?t._e():n("label",[t._v("Hide Encrypted")])]),n("span",{staticClass:"debug-info col-sm-2"},[t._v(t._s(t.serverUrl))]),n("span",{staticClass:"debug-inf",attrs:{id:"machineId"}},[t._v(t._s(t.defaultMachineIdText))]),n("span",[t._v(t._s(t.$store.state.machineId))]),n("el-button",{staticClass:"btn",attrs:{id:"sync_m_id"},on:{click:function(e){return t.syncMachineId()}}},[t._v(" Sync machine ID ")]),n("span",{staticClass:"debug-info col"},[t._v(' Encrypting Key: "'+t._s(t.encryptingKey)+'" ')])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{placeholder:"New Favorite"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),n("el-col",{attrs:{span:6}},[n("input-tag",{model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),n("el-button",{on:{click:function(e){t.tagFiles(),t.url=""}}},[t._v(" Tag It ")])],1)],1):t._e()])},x=[],O=(n("99af"),{name:"FavSearch",data:function(){return{serverUrl:Object(s["a"])(),tags:[],taggingFiles:[],url:"",keyword:"",isOnlyShowNotEncrypted:!0,perPage:10,currentPage:1,rows:0,defaultMachineIdText:"original machine id",isShowAdvanced:!1}},computed:{encryptingKey:{get:function(){return this.$store.state.settings.encryptingKey},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"encryptingKey",value:t})}}},mounted:function(){var t=document.getElementById("drag-file");t.ondragover=function(){return!1},t.ondragleave=function(){return!1},t.ondragend=function(){return!1};var e=this;t.ondrop=function(t){t.preventDefault();var n,i=Object(r["a"])(t.dataTransfer.files);try{for(i.s();!(n=i.n()).done;){var a=n.value;console.log("File(s) you dragged here: ",a.path),e.taggingFiles=e.taggingFiles.concat(a.path),console.log(e.taggingFiles)}}catch(s){i.e(s)}finally{i.f()}return!1},this.encryptingKey=localStorage.getItem("p"),this.keyword=localStorage.getItem("k")},methods:{savePass:function(){localStorage.setItem("p",this.encryptingKey)},encryptSwitchClicked:function(){this.isOnlyShowNotEncrypted=!this.isOnlyShowNotEncrypted,this.$emit("encryptSwitchClicked"),console.log(this.isOnlyShowNotEncrypted)},tagFiles:function(){""!==this.url&&this.taggingFiles.push(this.url),this.$emit("tagFiles",this.taggingFiles,this.tags,document.getElementById("machineId").textContent),this.taggingFiles=[]}}}),E=O,P=(n("81bc"),Object(w["a"])(E,I,x,!1,null,null,null)),K=P.exports,D=n("16b2"),T=n("5d16"),j=n("4833"),L=n.n(j),N=n("6f40");D["a"].plugin(T["a"]),D["a"].plugin(L.a),D["a"].plugin(N["a"]);var A="favorites",M={components:{FavSearch:K,Favorites:C},data:function(){return{serverUrl:Object(s["a"])(),tags:[],taggingFiles:[],url:"",keyword:"",isOnlyShowNotEncrypted:!0,perPage:10,currentPage:1,defaultMachineIdTex:"original machine id",fullTagList:{},baseData:[]}},computed:{rows:{get:function(){return this.filteredFav?this.filteredFav.length:0}},filteredFav:{get:function(){var t=this.baseData;if(t||(t=[]),this.isOnlyShowNotEncrypted&&(t=t.filter((function(t){return!Object.prototype.hasOwnProperty.call(t,"encrypted")}))),""!==this.keyword){var e=new RegExp(this.keyword);t=t.filter((function(t){return e.test(t.url)||e.test(t.tags)||e.test(t.description)}))}return t}},pagedFav:{get:function(){return this.filteredFav.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)}},machineId:{get:function(){return this.$store.state.settings.machineId},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"machineId",value:t})}},tagList:{get:function(){var t={};for(var e in this.fullTagList){console.log(this.fullTagList[e]);var n=this.fullTagList[e].key,i=this.fullTagList[e].value[0],a=this.fullTagList[e].value[1];if(a){if(this.isOnlyShowNotEncrypted||!g(n))continue;n=h(n)}t[n]?t[n]+=i:t[n]=i}var r=Object.keys(t).map((function(e){return[e,t[e]]}));return r.sort((function(t,e){return e[1]-t[1]})),console.log(r),r}}},pouch:{favorites:function(){},configs:{}},created:function(){var t=this;Object(s["b"])(this,A,A).on("update",(function(t){})).on("paused",(function(e){t.$databases["favorites"].allDocs({include_docs:!0}).then((function(e){t.baseData=t.parseAllDocRes(e)}))})),this.$databases["favorites"].createIndex({index:{fields:["timestamp"]}}).then((function(t){})).catch((function(t){console.log("create index error: ",t)}))},mounted:function(){this.updateTagList()},methods:{parseAllDocRes:function(t){var e=t.rows.reduce((function(t,e){return t.push(e.doc),t}),[]);return e.sort((function(t,e){var n=Date.now()/1e3;return t.timestamp>n&&(t.timestamp=t.timestamp/1e3),e.timestamp>n&&(e.timestamp=e.timestamp/1e3),e.timestamp-t.timestamp})),e},updateTagList:function(){var t=this,e={map:function(t){if(t.tags)if("string"===typeof t.tags)emit(t.tags,t.encrypted);else for(var e in t.tags)emit(t.tags[e],t.encrypted)},reduce:function(t,e){return[e.length,e[0]]}};this.$pouch.query(e,{group:!0},"favorites").then((function(e){t.fullTagList=e.rows}))},saveToLocalStorage:function(t,e){localStorage.setItem(t,e)},encryptSwitchClicked:function(){this.isOnlyShowNotEncrypted=!this.isOnlyShowNotEncrypted},tagFiles:function(t,e,n){var i=this.$store.state.settings.encryptingKey;if(0!==t.length){var a=e;i&&(a=y(e,i));var s,o=Object(r["a"])(t);try{for(o.s();!(s=o.n()).done;){var c=s.value,l={url:c,type:"favorites",tags:a,timestamp:Math.round(+new Date)};n!==this.defaultMachineIdTex&&(l.machine=n),i&&(l.url=d(c,i),l.encrypted=!0),console.log(l),this.$pouch.post(l,{},"favorites")}}catch(u){o.e(u)}finally{o.f()}}},syncMachineId:function(){this.$store.state.machineId=document.getElementById("machineId").textContent}}},U=M,z=(n("fd5b"),Object(w["a"])(U,i,a,!1,null,null,null));e["default"]=z.exports},"81bc":function(t,e,n){"use strict";n("bc61")},bc61:function(t,e,n){},f99d:function(t,e,n){"use strict";n("59ea")},fd5b:function(t,e,n){"use strict";n("587b")}}]);