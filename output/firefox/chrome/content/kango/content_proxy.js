﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
var __proxyContext=this;(function(){if("undefined"==typeof __proxyContext.__xhrInjected){__proxyContext.__xhrInjected=!0;var c=kango.xhr.send;kango.xhr.send=function(b,f){var d=b.contentType||"text";"xml"==d&&(b.contentType="text");c.call(this,b,function(a){if(""!=a.response&&null!=a.response&&"xml"==d){try{var e=null,e="undefined"!=typeof DOMParser?DOMParser:window.DOMParser,c=new e;a.response=c.parseFromString(a.response,"text/xml")}catch(g){a.response=null}b.contentType=d}f(a)})}}})();
