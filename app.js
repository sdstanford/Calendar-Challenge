var events = [];

// New Event Object Constructor
function Event(title, location, date, allDay, start, end) {
    this.title = title,
    this.location = location,
    this.date = date,
    this.start = start,
    this.end = end
};

//Create new event based on inputs in modal
var createNewEvent = function (event) {
    event.preventDefault();

    var title = $("#title").val().trim();
    var location = $("#location").val().trim();
    var date = $("#date").val().trim();
    var allDay = $("#alldaycheck").val();
    var start = $("#starttime").val();
    var end = $("#endtime").val();

    var newEvent = new Event(title, location, date, allDay, start, end);
}

$(document).ready(function(){
    $("td").dblclick(function(){
        $("#myModal").modal();
    });
});

$("#submit").on("click", createNewEvent());
