/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.UserscriptEngineClient=function(){};IndieWebnReply_kango.UserscriptEngineClient.prototype={run:function(c,b,a){var d=this;IndieWebnReply_kango.invokeAsync("kango.userscript.getScripts",c.document.URL,b,a,function(a){for(var b in a)a.hasOwnProperty(b)&&d.executeScript(c,a[b].join("\n\n"))})},executeScript:function(c,b){try{var a=new IndieWebnReply_kango.UserscriptApi(c);a.kango=IndieWebnReply_kango;IndieWebnReply_kango.lang.evalInSandbox(c,a,b)}catch(d){IndieWebnReply_kango.console.log("US: "+d.message+"\n"+d.stack||"")}}};IndieWebnReply_kango.UserscriptApi=function(){};
IndieWebnReply_kango.UserscriptApi.prototype={};
