var events = [{date:"2018-06-21", end:"10", id:31, location:"Downtown", start:"9", title:"Yoga"}];
var x = 0;

//Identify today's date with red circle
// var today = new Date();
// console.log(today);
// todaydate = today.split(" ");
// activedate = todaydate[2];
// $("#" + activedate).attr("style", "color:red");


// New Event Object Constructor
function Event(title, location, date, start, end, id) {
    this.title = title,
    this.location = location,
    this.date = date,
    this.start = start,
    this.end = end,
    this.id = id
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
    var id = Math.floor((Math.random() * 100) + 1);

    var newEvent = new Event(title, location, date, start, end, id);

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
        eventDiv.addClass("single-event");
        //Create link and append with text of event name
        var eventName = $("<a>");
        eventName.text(event.title);
        eventName.addClass("event-link");
        eventName.attr("id", "event" + event.id);
        eventName.attr("data-toggle", "modal");
        eventName.attr("data-target", "#eventModal");
        eventName.attr("data-id", "event" + event.id);
        eventName.attr("data-title", event.title);
        eventName.attr("data-location", event.location);
        eventName.attr("data-date", event.date);
        eventName.attr("data-time", event.start + " - " + event.end);
        //Append link to event div
        eventDiv.append(eventName);
        //Append both to appropriate calendar field
        $("#" + day).html(eventDiv);
    })
}

$('#eventModal').on('show.bs.modal', function (event) {
    var a = $(event.relatedTarget) // Button that triggered the modal
    var title = a.data('title') // Extract info from data-* attributes
    var location = a.data('location')
    var date = a.data('date')
    var time = a.data('time')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('#event-title').append(title)
    modal.find('#event-location').append(location)
    modal.find('#event-date').append(date)
    modal.find('#event-time').append(time)
  });

