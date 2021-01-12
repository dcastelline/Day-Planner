// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Variables
var currentDate = moment().format("dddd, MMMM Do, YYYY");

// Begin function
$("document").ready(function() {
    // Current date at top of calendar
    $("#currentDay").text(currentDate);
    console.log(currentDate);

    // Saving entries to local storage
    $(".saveBtn").on("click", function() {
        var event = $(this).siblings(".description").val();
        var time = $(this).siblings(".time").text();
        localStorage.setItem(event, time);
        $("this").siblings(".description").text(localStorage.value);
    })

});
