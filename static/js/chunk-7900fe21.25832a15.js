(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7900fe21"],{1543:function(t,e,i){},4103:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"createPost-container"},[i("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[i("sticky",{attrs:{"z-index":10,"sticky-top":80,"class-name":"sub-navbar "+t.postForm.status}},[i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v(" Publish ")]),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v(" Draft ")])],1),i("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v(" Title ")]),i("div",{staticClass:"createPost-main-container"},[i("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[i("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)],1)],1)],1)},a=[],o=(i("d81d"),i("b0c0"),i("8256")),r=i("1aba"),n=i("b804"),c=i("61f7"),l=i("828d"),u=i("79e2"),m={status:"draft",title:"",content:"",content_short:"",source_uri:"",image_uri:"",display_time:void 0,id:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0},d={name:"ArticleDetail",components:{Tinymce:o["a"],MDinput:r["a"],Sticky:n["a"]},pouch:{articleDetail:function(){return{database:"articleList",selector:{_id:this.id},first:!0}}},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,i,s){""===i?(t.$message({message:e.field+"为必传项",type:"error"}),s(new Error(e.field+"为必传项"))):s()},i=function(e,i,s){i?Object(c["d"])(i)?s():(t.$message({message:"外链url填写不正确",type:"error"}),s(new Error("外链url填写不正确"))):s()};return{id:null,postForm:Object.assign({},m),loading:!1,userListOptions:[],rules:{image_uri:[{validator:e}],title:[{validator:e}],content:[{validator:e}],source_uri:[{validator:i,trigger:"blur"}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.content_short.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.id=t,this.fetchData()}this.tempRoute=Object.assign({},this.$route);var e=this;Object(u["b"])(this,"articleList","article").on("paused",(function(t){console.log("handle paused in article"),e.isEdit&&(e.postForm=e.articleDetail,void 0!==e.$refs["editor"]&&(e.$refs["editor"].hasChange=!1)),e.setTagsViewTitle(),e.setPageTitle()}))},methods:{fetchData:function(){console.log("my article",this.articleDetail),this.articleDetail&&(this.postForm=this.articleDetail),this.setTagsViewTitle(),this.setPageTitle()},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.title)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.postForm.title)},submitForm:function(){if(this.isEdit)this.articleDetail.timestamp=Date.now(),this.postForm.status="published",this.$pouch.put(this.articleDetail,{},"articleList");else{var t={type:"article",title:this.postForm.title,content:this.postForm.content," author":"Richard",comment_disabled:!0,content_short:this.postForm.content_short,forecast:0,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",importance:2,pageviews:1516,platforms:[],reviewer:"Richard",status:"published",timestamp:Date.now(),created:Date.now()};this.$pouch.post(t,{},"articleList"),this.articleDetail=this.postForm,this.isEdit=!0}this.$notify({title:"成功",message:"发布文章成功",type:"success",duration:2e3})},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?(this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}),this.postForm.status="draft"):this.$message({message:"请填写必要的标题和内容",type:"warning"})},getRemoteUserList:function(t){var e=this;Object(l["a"])(t).then((function(t){t.data.items&&(e.userListOptions=t.data.items.map((function(t){return t.name})))}))}}},p=d,h=(i("7083"),i("2877")),f=Object(h["a"])(p,s,a,!1,null,"77205ddc",null);e["a"]=f.exports},7083:function(t,e,i){"use strict";i("1543")},"828d":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var s=i("b775");function a(t){return Object(s["a"])({url:"/vue-element-admin/search/user",method:"get",params:{name:t}})}function o(t){return Object(s["a"])({url:"/vue-element-admin/transaction/list",method:"get",params:t})}},"887f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article-detail",{attrs:{"is-edit":!1}})},a=[],o=i("4103"),r={name:"CreateArticle",components:{ArticleDetail:o["a"]}},n=r,c=i("2877"),l=Object(c["a"])(n,s,a,!1,null,null,null);e["default"]=l.exports}}]);