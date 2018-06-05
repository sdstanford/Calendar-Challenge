var events = [];

// New Event Object Constructor
function Event(title, location, date, start, end) {
    this.title = title,
    this.location = location,
    this.date = date,
    this.start = start,
    this.end = end
};

$(document).ready(function(){
    $("td").dblclick(function(){
        $("#myModal").modal();
    });
});
