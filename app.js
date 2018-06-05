var events = [];

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
};
