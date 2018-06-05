var events = [{title: "Running Club", location: "blah", date: "2018-06-06", start: "9", end: "10"}];

// New Event Object Constructor
function Event(title, location, date, start, end) {
    this.title = title,
    this.location = location,
    this.date = date,
    this.start = start,
    this.end = end
};

//Initiate modal pop up when calendar cell is double clicked
$(document).ready(function(){
    displayEvents();
    $("td").dblclick(function(){
        $("#myModal").modal();
    });
});

//Create function adding new event object to events array to run when button is clicked
var addNewEvent = function() {
    event.preventDefault();

    var title = $("#title").val().trim();
    var location = $("#location").val().trim();
    var date = $("#date").val().trim();
    var start = $("#starttime").val();
    var end = $("#endtime").val();

    var newEvent = new Event(title, location, date, start, end);

    events.push(newEvent);

    console.log(events);

    displayEvents();
};

var displayEvents = function() {
    events.forEach(function(event){
        //Split event date at dash to identify day
        var datesplit = event.date.split("-");
        var day = datesplit[2];
        //Create div for event
        var eventDiv = $("<div>");
        eventDiv.addClass("single-event")
        //Creat p and append with text of event name
        var eventName = $("<p>");
        eventName.text(event.title);
        //Append p to event div
        eventDiv.append(eventName);
        //Append both to appropriate calendar field
        $("#" + day).html(eventDiv);
    })
}
