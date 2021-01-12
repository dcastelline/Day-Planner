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

// Begin function
$("document").ready(function() {
    // Current date at top of calendar
    var currentDate = moment().format("dddd, MMMM Do, YYYY, h:mm a");

    // Retrieve stored 
    var h9 = localStorage.getItem("9:00AM");
    $("#9event").text(h9);

    var h10 = localStorage.getItem("10:00AM");
    $("#10event").text(h10);

    var h11 = localStorage.getItem("11:00AM");
    $("#11event").text(h11);

    var h12 = localStorage.getItem("12:00PM");
    $("#12event").text(h12);

    var h1 = localStorage.getItem("1:00PM");
    $("#1event").text(h1);

    var h2 = localStorage.getItem("2:00PM");
    $("#2event").text(h2);

    var h3 = localStorage.getItem("3:00PM");
    $("#3event").text(h3);

    var h4 = localStorage.getItem("4:00PM");
    $("#4event").text(h4);
    
    var h5 = localStorage.getItem("5:00PM");
    $("#5event").text(h5);

    // Saving entries to local storage
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).siblings(".time").text();
        localStorage.setItem(time, value);
        $("this").siblings(".description").textContent(localStorage.value);
        
    });

});
