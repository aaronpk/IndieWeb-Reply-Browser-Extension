/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.Console=function(){this._consoleService=Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService)};IndieWebnReply_kango.Console.prototype=IndieWebnReply_kango.oop.extend(IndieWebnReply_kango.IConsole,{_consoleService:null,log:function(a){1<arguments.length&&(a=IndieWebnReply_kango.string.format.apply(IndieWebnReply_kango.string,arguments));this._consoleService.logStringMessage(a)}});IndieWebnReply_kango.console=new IndieWebnReply_kango.Console;
