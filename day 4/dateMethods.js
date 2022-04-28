// today date and time
var dt = Date();
document.write("Date and Time : " + dt + "<br/>");

//todays date
var dt2 = new Date("December 25, 1995 23:15:00");
document.write("getDate() : " + dt2.getDate() + "<br/>");

//day of the week
var dt3 = new Date();
document.write("getDay() : " + dt3.getDay() + "<br/>");
// full year
var dt4 = new Date();
document.write("getFullyeaer() : " + dt4.getFullYear() + "<br/>");

// get hour
var dt5 = new Date();
document.write("getHours() : " + dt5.getHours() + "<br/>");


// milliseconds
var dt6 = new Date();
document.write("getMilliseconds() : " + dt6.getMilliseconds() + "<br/>");

// minutes
var dt7 = new Date();
document.write("getMinutes() : " + dt7.getMinutes() + "<br/>");

// UTC time
var dt6 = new Date();
document.write("getUTCdate() : " + dt6.getUTCDate() + "<br/>");


// UTC
var dt6 = new Date();
document.write("getUTChour() : " + dt6.getUTCHours() + "<br/>");

//setdate
var dt = new Date("Apr 28, 2022 23:30:00");
dt.setDate(24);
document.write(dt + "<br/>");

// to dateString
var dt6 = new Date();
document.write("toDateString() : " + dt6.toDateString() + "<br/>");

// toUTC string

var dt6 = new Date();
document.write("toUTCstring() : " + dt6.toUTCString() + "<br/>");
// GMT string
var dt6 = new Date();
document.write("localestring() : " + dt6.toLocaleString() + "<br/>");

// timestring
var dt6 = new Date();
document.write("timeString() : " + dt6.toTimeString() + "<br/>");

// source
var dt6 = new Date();
document.write("toSource() : " + dt6.toSource() + "<br/>");

// parse
var msecs = Date.parse("Aug 28, 2008 23:30:00");
document.write("Number of milliseconds from 1970: " + msecs + "<br/>");

