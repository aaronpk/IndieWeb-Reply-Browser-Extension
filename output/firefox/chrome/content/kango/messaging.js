/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.MessageRouter=function(){};IndieWebnReply_kango.MessageRouter.prototype={_onMessage:function(a){this.onmessage(a)},onmessage:function(){},dispatchMessage:function(a,b){var c={name:a,data:b,origin:"background",target:IndieWebnReply_kango,source:IndieWebnReply_kango},d=this;window.setTimeout(function(){d.onmessage(c)},1);return!0}};
