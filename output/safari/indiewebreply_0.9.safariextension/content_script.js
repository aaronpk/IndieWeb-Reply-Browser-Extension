// ==UserScript==
// @name IndieWebReply
// @include http://*
// @include https://*
// @require jquery-1.8.3.min.js
// @require URI.js
// ==/UserScript==

/*
 * Copyright (c) 2012 by Aaron Parecki. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

var $ = window.$.noConflict(true);

console.log('User script loaded');

IndieWebReplyModule = (function (){
	// Private
	
	function openNoteUI(replace) {
		
		kango.invokeAsync('kango.storage.getItem', 'postURL', function (postURL) {
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
	}
	
	function parseQueryString(url, callback) {
		var uri = new URI(response.parseQueryString);
		return uri.search(true);
	}
	
	function parseQueryStringFragment(url, callback) {
		var uri = new URI(request.parseQueryStringFragment);
		var fragment = '?' + uri.fragment();
		console.log('Fragment:');
		console.log(fragment);
		var fragURI = new URI(fragment);
		
		return fragURI.search(true);
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
			
			openNoteUI({
				url: url
			});
			
			return false;
		  });
		});
	}
	
	function bindTwitterShareButtons() {
		console.log('Binding twitter share buttons');
		$('.twitter-share-button').each(function (i, e) {
			var src = $(e).attr('src');
			
			parseQueryStringFragment(src, function (properties) {
				var newButton = $('<div>Post to your Indieweb Site</div>')
					.css({
						'padding': '0.5em',
						'border': '1px black solid',
						'cursor': 'pointer'
					})
					.click(function () {
						openNoteUI({
							url: properties.url,
							via: '@' + properties.via,
							hashtags: properties.hashtags,
							text: properties.text
						});
					});
			
				$(e).replaceWith(newButton);
			});
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
	console.log('Document.ready called');
	IndieWebReplyModule.init();
});