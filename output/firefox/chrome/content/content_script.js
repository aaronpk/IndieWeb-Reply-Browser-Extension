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

var IndieWebReplyModule = (function () {
    // Private
    
    function openNoteUI(verb, replace) {
        
        kango.invokeAsync('kango.storage.getItem', verb + 'URL', function (postURL) {
            if (postURL === undefined) {
                alert('You must set a Reply Post URL in Chrome options in order to use IndieWeb Reply');
                return false;
            }
            
            // Replace template vars
            for (var template in replace) {
                if (replace[template] == undefined)
                    continue;
                postURL = postURL.split('{' + template + '}').join(encodeURIComponent(replace[template].replace(/^\s+|\s+$/g, '')));
            }
            
            // replace any unreplaced templates with nothing
            postURL = postURL.replace(/\{[a-zA-Z0-9_-]+\}/gi, '');
            
            window.open(postURL);
        });
    }
    
    function parseQueryString(url) {
        var uri = new URI(url);
        return uri.search(true);
    }
    
    function parseQueryStringFragment(url) {
        var uri = new URI(url);
        var fragment = '?' + uri.fragment();
        var fragURI = new URI(fragment);
        
        return fragURI.search(true);
    }
    
    function createReplacementButton(text, clickCallback) {
        return $('<div />')
            .text(text)
            .css({
            	'background-color': '#759AE9',
				'background-image': 'linear-gradient(top, #759AE9 0%, #376FE0 50%, #1A5AD9 50%, #2463DE 100%)',
				'border-top': '1px solid #1F58CC',
				'border-right': '1px solid #1B4DB3',
				'border-bottom': '1px solid #174299',
				'border-left': '1px solid #1B4DB3',
				'border-radius': '0.5em',
				'-webkit-box-shadow': 'inset 0 0 2px 0 rgba(57, 140, 255, 0.8)',
				'box-shadow': 'inset 0 0 2px 0 rgba(57, 140, 255, 0.8)',
				'color': 'white',
				'font-family': '"helvetica neue", helvetica, arial, sans-serif',
				'padding': '0.5em',
				'text-shadow': '0 -1px 1px #1A5AD9',
				'display': 'inline'
            })
            .click(clickCallback);
    }
    
    function bindTwitterReplies() {
        $("a.js-action-reply").each(function(i, e) {
          $(e).unbind("click").click(function(evt) {
            var tweet = $(evt.target).parents(".tweet");
            var url = "https://twitter.com/" + $(tweet).data('screen-name') + "/status/" + $(tweet).attr('data-item-id');
            
            openNoteUI('reply', {
            	url: url,
            	username: '@' + $(tweet).data('screen-name')
			});
            
            return false;
          });
        });
    }
    
    function bindTwitterRetweets() {
        $("a.js-toggle-rt").each(function(i,e) {
          $(e).unbind("click").click(function(evt) {
            var tweet = $(evt.target).parents(".tweet");
            var tweetUrl = "https://twitter.com/" + $(tweet).data('screen-name') + "/status/" + $(tweet).attr('data-item-id');
            
            openNoteUI('post', {
            	tweetURL: tweetUrl,
            	username: '@' + $(tweet).data('screen-name'),
            	text: $(tweet).find('.js-tweet-text').text()
			});
            
            return false;
          });
        });
    }
    
    function bindTwitterFavourites() {
        $("a.js-toggle-fav").each(function(i, e) {
          $(e).unbind("click").click(function(evt) {
            var tweet = $(evt.target).parents(".tweet");
            var url = "https://twitter.com/" + $(tweet).data('screen-name') + "/status/" + $(tweet).attr('data-item-id');
            
            openNoteUI('favourite', {
            	url: url,
            	username: '@' + $(tweet).data('screen-name'),
            	text: $(tweet).find('.js-tweet-text').text()
			});
            
            return false;
          });
        });
    }
    
    function bindAppDotNetReplies() {
        // Set up app.net reply URLs
        $("a[data-reply-to='']").each(function(i, e) {
          $(e).click(function(evt) {
            var post = $(evt.target).parents(".post-container");
            var url = "https://alpha.app.net/" + $(post).data('post-author-username') + "/post/" + $(post).attr('data-post-id');
            
            openNoteUI('reply', { url: url });
            
            return false;
          });
        });
    }
    
    function bindTwitterShareButtons() {
        $('.twitter-share-button, .twitter-mention-button, .twitter-hashtag-button')
			.each(function (i, e) {
				var src = $(e).attr('src');
				var properties = parseQueryStringFragment(src);
				
				var username = '@' + $(e).hasClass('.twitter-share-button')
					? properties.via
					: properties.screen_name;
				
				var hashtags = $(e).hasClass('.twitter-hashtag-button')
					? properties.button_hashtag
					: properties.hashtags;
				
				var newButton = createReplacementButton('Post to your Indieweb Site', function () {
					openNoteUI('post', {
						url: (properties.url ? properties.url : document.location.href),
						username: username,
						hashtags: hashtags,
						text: properties.text
					});
				});
			
				$(e).replaceWith(newButton);
			});
	}
	
	function bindTwitterFollowButtons() {
		$('.twitter-follow-button').each(function (i, e) {
			var urlProps = parseQueryStringFragment($(e).attr(src));
			
			var properties = {
				url: 'https://twitter.com/' + urlProps.screen_name
			};
			
			var newButton = createReplacementButton('Follow on your Indieweb Site', function () { openNoteUI('follow', properties); });
			
			$(e).replaceWith(newButton);
		});
	}
    
    function bindFacebookLikeButtons() {
        $('.fb-like').each(function (i, e) {
            var url = $(e).attr('href');
            
            var properties = {
                url: (url ? url : document.location.href)
            };
            
            var newButton = createReplacementButton('Post to your Indieweb Site', function () { openNoteUI('favourite', properties); });
            
            $(e).replaceWith(newButton);
        });
    }
    
    function bindGooglePlusOneButtons() {
    	$('[id^="___plusone_"]').each(function (i, e) {
    		var q = new URI($(e).find('iframe').attr('src')).search(true);
    		
    		console.log(q.url);
    		
    		var properties = {
    			url: (q.url ? q.url : document.location.href)
    		};
    		
    		var newButton = createReplacementButton('Post to your Indieweb Site', function () { openNoteUI('favourite', properties); });
    		
    		$(e).replaceWith(newButton);
    	});
    }
    
    // Public
    
    return {
        init: function () {
            bindTwitterReplies();
            setTimeout(bindTwitterReplies, 5000); /**/
            
            bindTwitterRetweets();
            setTimeout(bindTwitterRetweets, 5000); /**/
            
            bindTwitterFavourites();
            setTimeout(bindTwitterFavourites, 5000); /**/
            
            bindAppDotNetReplies();
            bindTwitterShareButtons();
            bindTwitterFollowButtons();
            bindFacebookLikeButtons();
            bindGooglePlusOneButtons();
        }
    };
}());

$(document).ready(function () {
    IndieWebReplyModule.init();
});