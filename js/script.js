// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the celsius from fahrenheit
 */
function calculateCelsius() {
  // input that takes the fahrenheit from the user and converts it.
  let fahrenheitA = parseFloat(document.getElementById('fahrenheit').value);
  

  //calculates celsius from fahrenheit
    let celsiusA = (fahrenheitA - 32) * 5 / 9;

  // output that displays the celsius
    document.getElementById("fahrenheit-convo").innerHTML = "The Celsius is: " + celsiusA.toFixed(1) + "°";

}