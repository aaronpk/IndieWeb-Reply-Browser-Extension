/*
 * Copyright (c) 2012 by Aaron Parecki. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

IndieWebReplyModule = (function (){
	// Private
	
	function openNoteUI(replace) {
		
		chrome.extension.sendMessage({'getLocalStorage': 'IndieWebReplyPostURL'}, function (response) {
			var postURL = response.IndieWebReplyPostURL;
			
			if (postURL === undefined) {
				alert('You must set a Reply Post URL in Chrome options in order to use IndieWeb Reply');
				return false;
			}
			
			// Replace template vars
			for (var template in replace) {
				if (replace[template] == undefined)
					continue;
				postURL = postURL.split('{' + template + '}').join(replace[template]);
			}
			
			window.open(postURL);
		});
	
		return false;
	}
	
	function bindTwitter() {
		$("a.js-action-reply").each(function(i,e){
		  $(e).unbind("click").click(function(evt){
			var tweet = $(evt.target).parents(".tweet");
			var url = "https://twitter.com/" + $(tweet).data('screen-name') + "/status/" + $(tweet).attr('data-item-id');
			
			openNoteUI({
				url: url
			});
			
			return false;
		  });
		});
	}
	
	function bindAppDotNet() {
		// Set up app.net reply URLs
		$("a[data-reply-to='']").each(function(i,e){
		  $(e).click(function(evt){
			var post = $(evt.target).parents(".post-container");
			var url = "https://alpha.app.net/" + $(post).data('post-author-username') + "/post/" + $(post).attr('data-post-id');
			var postURL = "http://pk.dev/admin/?reply_to=" + encodeURI(url);
			window.open(postURL);
			return false;
		  });
		});
	}
	
	function bindTwitterShareButtons() {
		$('.twitter-share-button').each(function(i, e) {
		
		});
	}
	
	// Public
	
	return {
		init: function () {
			bindTwitter();
			setTimeout(bindTwitter, 5000);
			
			bindAppDotNet();
			bindTwitterShareButtons();
		}
	};
}());

$(document).ready(function () {
	IndieWebReplyModule.init();
});