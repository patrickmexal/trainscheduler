var config = {
    apiKey: "AIzaSyC527f6DeGuGAQxi5uEK48GrHYaPtyFleI",
    authDomain: "thehappyyetiproject.firebaseapp.com",
    databaseURL: "https://thehappyyetiproject.firebaseio.com",
    projectId: "thehappyyetiproject",
    storageBucket: "thehappyyetiproject.appspot.com",
    messagingSenderId: "1019112304139"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  database.ref().on('child_added',function(snapshot){
	var newName = $('<td>').text(snapshot.val().name);
    var newRole = $('<td>').text(snapshot.val().role);
    var newStartDate = $('<td>').text(snapshot.val().date);
    // var newMonthsWork = $('<td>').text($('#employeename').val());
    var newMonthsRate = $('<td>').text(snapshot.val().monthsRate);
    var newBilled = $('<td>').text(snapshot.val().billed);
    var newRow = $('<tr>').append(newName, newRole, newStartDate, newMonthsRate, newBilled);
    $('#table-head').append(newRow);
})

  $("#submitbutton").on("click", function() {
	event.preventDefault();

	database.ref().push({
        name: $("#trainnameinput").val(),
        destination: $("#destinationinput").val(),
        first: $("firsttraininput").val(),
        frequency: $("#frequencyinput").val(),
        
        
    })

})