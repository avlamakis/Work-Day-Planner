$(document).ready(function () {
    // utilizing moment.js file to create the date format reference https://momentjs.com/ to set todays date
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".todaysDate").append(today);

    var now = parseInt(moment().format('HH'));
    console.log(now)

    //time blocks created from 9AM to 6PM identifying by ID
    //read $time9AM-5PM in local storage
    
    var $time9AM = $("#time9AM");
    var $time10AM = $("#time10AM");
    var $time11AM = $("#time11AM");
    var $time12PM = $("#time12PM");
    var $time1PM = $("#time1PM");
    var $time2PM = $("#time2PM");
    var $time3PM = $("#time3PM");
    var $time4PM = $("#time4PM");
    var $time5PM = $("#time5PM");


    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
    //using class attributes to add color to .this
            $(this).addClass("bg-gray");
        }
        if (name > now) {
            $(this).addClass("bg-green")
        }

        if (name === now) {
            $(this).addClass("bg-red")
        }

    })
});