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
  window.localStorage.postURL = evt.target.value;
}

function main() {
  if (window.localStorage == null) {
    alert("LocalStorage must be enabled for changing options.");
    return;
  }

  document.getElementById('postURL').value = window.localStorage.postURL;
}

document.addEventListener('DOMContentLoaded', function () {
  main();
  document.querySelector('#postURL').addEventListener('change', saveURL);
});
