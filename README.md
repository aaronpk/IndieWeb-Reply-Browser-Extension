IndieWeb Reply
==============

This browser extension rewrites Twitter.com "reply" buttons to open a browser window to your own site, allowing you to post a reply from your site.

## Setup

Before it can be used, you need to set the URL to redirect to in the IndieWeb Reply extension preferences. This URL is a [web action URL](http://waterpigs.co.uk/articles/web-actions/) which should provide a UI for posting a new note.

You can use <code>{url}</code> in your URL (perhaps in a query parameter) and it will be replaced by the URL of the tweet you’re replying to.

## Usage

On twitter.com, click "Reply" on a tweet:

![A Tweet](https://github.com/aaronpk/IndieWeb-Reply-Browser-Extension/raw/master/example-tweet.png)

A window opens on your own domain so you can reply from your site

![Reply from your site](https://github.com/aaronpk/IndieWeb-Reply-Browser-Extension/raw/master/example-reply.png)