// Begin function
$("document").ready(function() {
   
    // Current date at top of calendar
    var currentDate = moment().format("dddd, MMMM Do, YYYY, h:mm a");
    $("#currentDay").append(currentDate);

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
        $("this").siblings(".description").text(localStorage.value);
    });

    // Tracking current hour(h)
    h = currentDate.h;
        console.log(h);
    t = $(".time").text();
        console.log(t);
        

    // Background colors
    // if (h < )

});
