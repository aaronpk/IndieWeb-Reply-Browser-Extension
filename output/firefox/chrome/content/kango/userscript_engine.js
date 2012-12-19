﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.UserscriptEngine=function(){this._scripts=[];this._requiredFiles={}};
IndieWebnReply_kango.UserscriptEngine.prototype={_scripts:[],_requiredFiles:{},addScript:function(a,b){for(var c=0;c<this._scripts.length;c++)if(this._scripts[c].id==a)return!1;c=new IndieWebnReply_kango.Userscript(b);this._loadRequiredFiles(c);this._scripts.push({id:a,script:c});return!0},removeScript:function(a){for(var b=0;b<this._scripts.length;b++)if(this._scripts[b].id==a)return this._scripts.splice(b,1),!0;return!1},clear:function(){this._scripts=[]},getScripts:function(a,b,c){for(var d={},e=0;e<this._scripts.length;e++){var f=
this._scripts[e].script,h=f.headers.namespace||"default",g=f.headers["run-at"]||"document-end",i=f.headers["all-frames"]||!1;if((c||!0==i)&&g==b&&this._isIncludedUrl(f,a)&&!this._isExcludedUrl(f,a)){d[h]=d[h]||[];if("undefined"!=typeof f.headers.require)for(g=0;g<f.headers.require.length;g++)i=f.headers.require[g],"undefined"!=typeof this._requiredFiles[i]&&d[h].push(this._requiredFiles[i]);d[h].push(f.text)}}return d},_loadRequiredFiles:function(a){if("undefined"!=typeof a.headers.require)for(var a=
a.headers.require,b=0;b<a.length;b++){var c=a[b];if("undefined"==typeof this._requiredFiles[c]){var d=IndieWebnReply_kango.io.getExtensionFileContents(c);null!=d&&""!=d&&(this._requiredFiles[c]=d)}}},_checkPatternArray:function(a,b){if("undefined"!=typeof a){a instanceof Array||(a=Array(a));for(var c=0;c<a.length;c++){var d=a[c].replace(/\*/g,"(.*)"),d=d.replace(/tld/g,"(.*)");if(RegExp(d).test(b))return!0}}return!1},_isIncludedUrl:function(a,b){return null==a.headers.include?!0:this._checkPatternArray(a.headers.include,
b)},_isExcludedUrl:function(a,b){return null==a.headers.exclude?!1:this._checkPatternArray(a.headers.exclude,b)}};IndieWebnReply_kango.Userscript=function(a){this.text=a;this.headers={};this._parseHeaders()};
IndieWebnReply_kango.Userscript.prototype={headers:{},text:"",_parseHeaders:function(){this.headers=this._parseHeadersToHashTable(this.text);"undefined"!=typeof this.headers.match&&("undefined"==typeof this.headers.include?this.headers.include=this.headers.match:this.headers.include.concat(this.headers.match))},_parseHeadersToHashTable:function(a){for(var b={},a=a.split(/\n/),c=0;c<a.length;c++){var d=a[c];if(0==d.indexOf("// ==/UserScript=="))break;var e=d.match(/\/\/ @(\S+)\s*(.*)/);if(null!=e)switch(d=e[1],e=
e[2].replace(/\n|\r/g,""),d){case "include":case "exclude":case "match":case "require":b[d]=b[d]||[];b[d].push(e);break;case "all-frames":b[d]=/^true/i.test(e);break;default:b[d]=e}}return b}};IndieWebnReply_kango.registerModule(function(){this.init=function(){IndieWebnReply_kango.userscript=new IndieWebnReply_kango.UserscriptEngine;var a=IndieWebnReply_kango.getExtensionInfo().content_scripts;if("undefined"!=typeof a)for(var b=0;b<a.length;b++){var c=IndieWebnReply_kango.io.getExtensionFileContents(a[b]);null!=c&&""!=c&&IndieWebnReply_kango.userscript.addScript(a[b],c)}}});


// Merged from /Users/barnabywalters/Documents/Programming/kango-framework-latest/src/js/ie firefox/IndieWebnReply_kango/userscript_engine.part.js

IndieWebnReply_kango.addEventListener(IndieWebnReply_kango.event.READY,function(){IndieWebnReply_kango.browser.addEventListener("DOMContentLoaded",function(a){var b=new IndieWebnReply_kango.UserscriptEngineClient,c=a.window==a.window.top;b.run(a.window,"document-start",c);b.run(a.window,"document-end",c)})});
