/*
 * Copyright (c) 2012 by Aaron Parecki. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

function saveURL(evt) {
  if (window.localStorage == null) {
    alert('Local storage is required for changing providers');
    return;
  }
  
  kango.invokeAsync('kango.storage.setItem', $(evt.target).attr('id'), evt.target.value);
  
  $('#notice').text('Unsaved Changes Made!').toggleClass('unsaved');
  window.setTimeout(function () {
    $('#notice').text('Changes Saved').toggleClass('unsaved');
  }, 200);
}

function main() {
  if (window.localStorage == null) {
    alert("LocalStorage must be enabled for changing options.");
    return;
  }
  
  $('.monitor').val(function () {
    var self = $(this);
    
    kango.invokeAsync('kango.storage.getItem', self.attr('id'), function (url) {
  	  self.val(url);
    });
  });
}

KangoAPI.onReady(function () {
  main();
  document.querySelector('.monitor').addEventListener('change', saveURL);
});
