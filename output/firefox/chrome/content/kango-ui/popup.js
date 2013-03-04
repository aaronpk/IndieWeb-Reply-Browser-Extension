/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.ui.PopupOpenParams={url:"",width:0,height:0};IndieWebnReply_kango.ui.Popup=function(){IndieWebnReply_kango.oop.mixin(this,IndieWebnReply_kango.EventTarget.prototype);IndieWebnReply_kango.oop.mixin(this,new IndieWebnReply_kango.EventTarget)};
IndieWebnReply_kango.ui.Popup.prototype={_popupWnd:null,open:function(a){0!=a.url.indexOf("http")&&(a.url=IndieWebnReply_kango.io.getExtensionFileUrl(a.url));this.close();a.kango=IndieWebnReply_kango;this._popupWnd=window.openDialog("chrome://IndieWebnReply_kango/content/kango-ui/popup_window.xul","","chrome=yes,dependent=yes,width="+a.width+",height="+a.height,{wrappedJSObject:a});var c=this,b=function(){window.removeEventListener("focus",b,!0);window.removeEventListener("unload",b,!0);c.close()};window.addEventListener("focus",b,!0);window.addEventListener("unload",
b,!0);this._popupWnd.addEventListener("load",function(a){a.target.getElementById("frame").addEventListener("DOMContentLoaded",function(a){c.fireEvent("PopupDocumentComplete",{window:a.target.defaultView.wrappedJSObject})},!0)},!0)},close:function(){null!=this._popupWnd&&(this._popupWnd.close(),this._popupWnd=null)}};
