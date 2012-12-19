/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.ui.ContextMenuItem=function(a){this.superclass.apply(this,arguments);this.init(a)};
IndieWebnReply_kango.ui.ContextMenuItem.prototype=IndieWebnReply_kango.oop.extend(IndieWebnReply_kango.ui.ContextMenuItemBase,{init:function(a){this.addItem("kango-item1",a.caption,a.context||"all")},addItem:function(a,d,e){var c=document.getElementById("contentAreaContextMenu"),b=document.createElement("menuitem");b.setAttribute("id",a);b.setAttribute("label",d);b.addEventListener("command",IndieWebnReply_kango.lang.bind(function(a){var b=document.popupNode;this.fireEvent(this.event.CLICK,{srcUrl:b.src,linkUrl:b.href});a.preventDefault()},this),!1);c.appendChild(b);
c.addEventListener("popupshowing",function(){var b=document.getElementById(a);null!=b&&"image"==e&&(b.hidden=!gContextMenu.onImage)},!1)}});IndieWebnReply_kango.ContextMenuModule=function(){};IndieWebnReply_kango.ContextMenuModule.prototype.init=function(){var a=IndieWebnReply_kango.getExtensionInfo();"undefined"!=typeof a.context_menu_item&&(IndieWebnReply_kango.ui.contextMenuItem=new IndieWebnReply_kango.ui.ContextMenuItem(a.context_menu_item))};IndieWebnReply_kango.registerModule(IndieWebnReply_kango.ContextMenuModule);
