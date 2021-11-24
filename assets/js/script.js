// Using moment JS to achieve date format- reference https://momentjs.com/
moment(Date);
$("#presentDay").text(moment().format('dddd MMMM do YYYY, h:mm:ss a'));
// Present Time via Moment
var presentTime = moment();
// Returns present time to the closest hour
presentTime = presentTime.beginOf("hour");
// Calculates the start of the current day + 8 to set it at 8 AM
var pastTime = moment().beginOf('day').add(8, "hours");


// Time block variables 
// 8 AM 
var time1 = pastTime.add(0, "h");
time1 = time1.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block1").text(time1);
// 9 AM
var time2 = pastTime.add(1, "h");
time2 = time2.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block2").text(time2);
// 10 AM
var time3 = pastTime.add(1, "h");
time3 = time3.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block3").text(time3);
// 11 AM
var time4 = pastTime.add(1, "h");
time4 = time4.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block4").text(time4);
// 12 PM
var time5 = pastTime.add(1, "h");
time5 = time5.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block5").text(time5);
// 1 PM
var time6 = pastTime.add(1, "h");
time6 = time6.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block6").text(time6);
// 2 PM
var time7 = pastTime.add(1, "h");
time7 = time7.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block7").text(time7);
// 3 PM
var time8 = pastTime.add(1, "h");
time8 = time8.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block8").text(time8);
// 4 PM
var time9 = pastTime.add(1, "h");
time9 = time9.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block9").text(time9);
// 5 PM 
var time10 = pastTime.add(1, "h");
time10 = time10.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block10").text(time10);
// 6 PM
var time11 = pastTime.add(1, "h");
time11 = time11.format('hh:mm A');
// Generates the time formula created above into the HTML File
$(".block11").text(time11);