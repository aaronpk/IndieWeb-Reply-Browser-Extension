IndieWeb Reply
==============

This cross-browser extension rewrites Twitter.com "reply" buttons to open a browser window to your own site, allowing you to post a reply from your site.

## Installation

IndieWeb Reply is built with [kango](http://kangoextensions.com) and as such is cross-browser (apart from IE). The different versions are built in the repo, but until we offer signed, packaged downloads you’ll have to install them manually.

### Chrome

1. Clone the repo to your computer
1. In chrome, navigate to `chrome://chrome/extensions`
1. Enable developer mode (top right corner)
1. Click "Load Packaged Extension"
1. Navigate to the `/output/chrome/` folder within the cloned repo
1. Continue to [Setup](#setup)

### Safari

1. Go Develop -> Show Extension Builder
1. Click the little plus sign in the bottom left, select "Add Extension"
1. Navigate to `/output/safari` and select the folder. Okay.
1. Click "Install" (top right)
1. There should be a new IndieWeb Reply button in your toolbar. Click this to set enter the options dialog, then continue

## Setup

Before it can be used, you need to set the URL to redirect to in the IndieWeb Reply extension preferences. This URL is a [web action URL](http://waterpigs.co.uk/articles/web-actions/) which should provide a UI for posting a new note.

For more, see [advanced setup](#advanced-setup)

## Usage

IndieWeb Reply has two main functions: Twitter Reply hijacking and Tweet button hijacking. These let you do hijack the "reply" links on twitter.com to redirect to your own site, and also hijack embedded Tweet buttons on other websites, replacing them with a "Post to your indieweb site" button with all the same metadata attached.

### Twitter.com

On twitter.com, click "Reply" on a tweet:

![A Tweet](https://github.com/aaronpk/IndieWeb-Reply-Browser-Extension/raw/master/example-tweet.png)

A window opens on your own domain so you can reply from your site

![Reply from your site](https://github.com/aaronpk/IndieWeb-Reply-Browser-Extension/raw/master/example-reply.png)

### Other websites

Tweet buttons on other websites should get replaced with a "Post to your indieweb site" button. If you see one which isn’t could you do us a huge favour and add an issue with the offending URL? Much appreciated :)

## Advanced Setup

The real magic to IndieWeb reply is not the ability to redirect twitter buttons to your own site, but the ability to register dynamic placeholders within your web activity URL which get replaced with things like the URL, hashtags, twitter @names and so on.

You can use <code>{url}</code> in your URL (perhaps in a query parameter) and it will be replaced by the URL of the tweet you’re replying to.

For a more up-to-date listing of the placeholders which can be used, install the plugin and have a look in the options dialog.