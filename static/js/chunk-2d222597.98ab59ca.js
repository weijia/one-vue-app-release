(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222597"],{cddd:function(n,t,c){"use strict";c.r(t),c.d(t,"export_txt_to_zip",(function(){return i}));c("4160"),c("d3b7"),c("25f0"),c("159b");var o=c("21a6"),e=c("7c39"),a=c.n(e);function i(n,t,c,e){var i=new a.a,r=c||"file",f=e||"file",u=t,p="".concat(n,"\r\n");u.forEach((function(n){var t="";t=n.toString(),p+="".concat(t,"\r\n")})),i.file("".concat(r,".txt"),p),i.generateAsync({type:"blob"}).then((function(n){Object(o["saveAs"])(n,"".concat(f,".zip"))}),(function(n){alert("导出失败")}))}}}]);