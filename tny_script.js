"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Hanif Saibou
   Date:   04/21/2025

*/
/* Execute the function to run and display the countdown clock */
setInterval("runClock()", 1000);
runClock();
/* Function to create and run the countdown clock */
function runClock() { 
/* Store the current date and time */
var currentDate = new Date();
var dateStr = currentDate.toLocaleDateString();
var timeStr = currentDate.toLocaleTimeString();

/* Dsiplay the current date and time */
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days until January 1st */
var newYear = new Date("January 1, 2021");
var nextYear = currentDate.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDate) / (1000 * 60 * 60 * 24);

/* Calculate the hours left in the current day */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

/* Calculate the minutes and seconds left in the current hour */
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

/* Display the time left until the next New Year Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(hrsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}