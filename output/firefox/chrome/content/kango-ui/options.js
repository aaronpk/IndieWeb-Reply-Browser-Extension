/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
IndieWebnReply_kango.ui.OptionsPage=function(){var a=IndieWebnReply_kango.getExtensionInfo();if("undefined"!=typeof a.options_page){var b=this._optionsUrl=IndieWebnReply_kango.io.getExtensionFileUrl(a.options_page).toLowerCase();IndieWebnReply_kango.browser.addEventListener("DOMContentLoaded",function(a){0==a.url.toLowerCase().indexOf(b)&&(a.window.kango=IndieWebnReply_kango)})}};
IndieWebnReply_kango.ui.OptionsPage.prototype=IndieWebnReply_kango.oop.extend(IndieWebnReply_kango.ui.IOptionsPage,{_optionsUrl:"",open:function(a){if(""!=this._optionsUrl){var b=this._optionsUrl;"undefined"!=typeof a&&(b+="#"+a);IndieWebnReply_kango.browser.tabs.create({url:b,focused:!0,reuse:!0});return!0}return!1}});IndieWebnReply_kango.ui.optionsPage=new IndieWebnReply_kango.ui.OptionsPage;
