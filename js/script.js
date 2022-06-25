// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: May 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-02-HTML/sw.js", {
    scope: "/ICS20-Unit6-02-HTML/",
  })
}

'use strict'

/**
 * This function calculates if you get free admission
 */
function updateClickCount() {
  // input
  // pass
  
  // process and output
  if (localStorage.updateClickCount) {
    localStorage.updateClickCount = Number(localStorage.updateClickCount) +1
  } else {
      localStorage.updateClickCount = 1
    }
  document.getElementById("cookie").innerHTML = "Your total hits are " + (localStorage.updateClickCount)
}