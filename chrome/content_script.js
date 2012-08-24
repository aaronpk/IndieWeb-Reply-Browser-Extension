/*
 * Copyright (c) 2012 by Aaron Parecki. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

$("a.js-action-reply").each(function(i,e){
  $(e).click(function(evt){
    var tweet = $(evt.target).parents(".tweet");
    var url = "https://twitter.com/" + $(tweet).data('screen-name') + "/status/" + $(tweet).attr('data-item-id');

    // TODO: THIS IS A HACK! see below.
    var postURL = "http://pk2.dev/admin/?reply_to=" + encodeURI(url);
    window.open(postURL);

    // TODO: Need to either get the page URL from the extension preferences, or send an event to the extension
    // where the extension can open the new window
    // chrome.extension.sendMessage({url: url}, function(response) {
    //   console.log(response);
    // });

    return false;
  });
});

$("a[data-reply-to='']").each(function(i,e){
  $(e).click(function(evt){
    var post = $(evt.target).parents(".post-container");
    var url = "https://alpha.app.net/" + $(post).data('post-author-username') + "/post/" + $(post).attr('data-post-id');
    var postURL = "http://pk2.dev/admin/?reply_to=" + encodeURI(url);
    window.open(postURL);
    return false;
  });
});
