// Using moment JS to achieve date format- reference https://momentjs.com/
moment(Date);
$("#presentDay").text(moment().format('dddd MMMM do YYYY, h:mm:ss a'));
// Present Time via Moment
var presentTime = moment();
// Returns present time to the closest hour
presentTime = presentTime.beginOf("hour");
// Calculates the start of the current day + 8 to set it at 8 AM
var pastTime = moment().beginOf('day').add(8, "hours");