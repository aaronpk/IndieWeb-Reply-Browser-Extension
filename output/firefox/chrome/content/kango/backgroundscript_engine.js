/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.BackgroundScriptEngine=function(){};
IndieWebnReply_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(a){var b=this;this._sandbox=IndieWebnReply_kango.lang.createHTMLSandbox("background.html",function(c){b._initScripts(c,a)})},getContext:function(){return this._window},_initScripts:function(a,b){this._window=a;a.kango=b;var c=a.document,d=IndieWebnReply_kango.getExtensionInfo().background_scripts;if("undefined"!=typeof d){var e=0,f=function(){var a=c.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",IndieWebnReply_kango.io.getExtensionFileUrl(d[e]));
var b=function(){e++;e<d.length&&f()};"undefined"!=typeof a.onreadystatechange?a.onreadystatechange=function(){"complete"==a.readyState&&b()}:a.onload=b;c.body.appendChild(a)};f()}}};IndieWebnReply_kango.BackgroundScriptModule=function(){};IndieWebnReply_kango.BackgroundScriptModule.prototype.init=function(a){IndieWebnReply_kango.backgroundScript=new IndieWebnReply_kango.BackgroundScriptEngine;IndieWebnReply_kango.addEventListener(IndieWebnReply_kango.event.READY,function(){IndieWebnReply_kango.backgroundScript.init(a)})};IndieWebnReply_kango.registerModule(IndieWebnReply_kango.BackgroundScriptModule);
