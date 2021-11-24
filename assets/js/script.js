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
    // on click function for local storage
    $("button").on("click", function () {

    // sets items to the local storage for each time block value
        localStorage.setItem("9AM", ($time9AM.val()))
        localStorage.setItem("10AM", ($time10AM.val()))
        localStorage.setItem("11AM", ($time11AM.val()))
        localStorage.setItem("12PM", ($time12PM.val()))
        localStorage.setItem("1PM", ($time1PM.val()))
        localStorage.setItem("2PM", ($time2PM.val()))
        localStorage.setItem("3PM", ($time3PM.val()))
        localStorage.setItem("4PM", ($time4PM.val()))
        localStorage.setItem("5PM", ($time5PM.val()))

    })
        //getting the content stored and sending to the screen. When page is refreshed content will stay
        $("#time9AM").append(localStorage.getItem("9AM"));
        $("#time10AM").append(localStorage.getItem("10AM"));
        $("#time11AM").append(localStorage.getItem("11AM"));
        $("#time12PM").append(localStorage.getItem("12PM"));
        $("#time1PM").append(localStorage.getItem("1PM"));
        $("#time2PM").append(localStorage.getItem("2PM"));
        $("#time3PM").append(localStorage.getItem("3PM"));
        $("#time4PM").append(localStorage.getItem("4PM"));
        $("#time5PM").append(localStorage.getItem("5PM"));
    
    });