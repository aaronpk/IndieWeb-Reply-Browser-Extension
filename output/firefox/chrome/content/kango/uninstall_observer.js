/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.UninstallObserver={init:function(){this.register()},observe:function(a,c,b){a=a.QueryInterface(Components.interfaces.nsIUpdateItem);"item-uninstalled"==b&&a.id==IndieWebnReply_kango.getExtensionInfo().id&&IndieWebnReply_kango.fireEvent(IndieWebnReply_kango.event.UNINSTALL)},register:function(){Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService).addObserver(this,"em-action-requested",!1)},unregister:function(){Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService).removeObserver(this,
"em-action-requested")}};IndieWebnReply_kango.addEventListener(IndieWebnReply_kango.event.READY,function(){"undefined"!=typeof AddonManager?AddonManager.addAddonListener({onUninstalling:function(a){a.id==IndieWebnReply_kango.getExtensionInfo().id&&IndieWebnReply_kango.fireEvent(IndieWebnReply_kango.event.UNINSTALL)}}):IndieWebnReply_kango.UninstallObserver.init()});
