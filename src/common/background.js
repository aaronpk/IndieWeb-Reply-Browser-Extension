/*
 * Copyright (c) 2012 by Aaron Parecki. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

chrome.extension.onConnect.addListener(function(port) {
  var tab = port.sender.tab;

  console.debug(tab);

  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(function(info) {
    console.debug(info);
  });
});

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
	console.log('onMessage called with request, sender, response:');
	console.log(request);
	console.log(sender);
	console.log(sendResponse);
	
	var response = {};
	
	// Deal with localStorage requests
	if (request.getLocalStorage !== undefined) {
		console.log('Getting locally stored variable ' + request.getLocalStorage);
		
		response[request.getLocalStorage] = window.localStorage[request.getLocalStorage];
	}
	
	// Deal with parseQueryString requests
	if (request.parseQueryString !== undefined) {
		
	}
	
	// Deal with parseQueryString requests
	if (request.parseQueryStringFragment !== undefined) {
		
	}
	
	console.log('Sending response to onMessage:');
	console.log(response);
	
	// Send the completed response
	sendResponse(response);
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  console.debug(request);
});


