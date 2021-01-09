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


// Timeblock class "container"
    // Business hours = 9-5, 9 timeblocks

// Variables
var form = $(".container");
var currentDate = moment().format("dddd, MMMM Do, YYYY");
var newRow = $("<row>");
var textArea = $("<textarea>");
var newBlock = $(".time-block");
var timeBlock = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"];

// Begin function
$("document").ready(function() {
    // Current date at top of calendar
    $("#currentDay").text(currentDate);
    console.log(currentDate);

    // Hourly rows
    form.append(newRow);

});