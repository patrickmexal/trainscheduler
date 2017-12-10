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

  
}
	var trainName = "";
	var trainDestination = "";
	var trainTime = 0;
	var trainFrequency = 0;

  $("#submitbutton").on("click", function() {

	event.preventDefault();

	trainName = $("#trainnameinput").val().trim();
	trainDestination = $("#destinationinput").val().trim();
	trainTime = $("#firsttraininput").val().trim();
	trainFrequency = $("frequencyinput").val().trim();

	database.ref().set({
		name: name,
		destination: destination,
		time: time,
		frequency: frequency
	}

        
        
    })

});
  database.ref().on("value", function(snapshot){
  	console.log(snapshot.val());
  	console.log(snapshot.val().name);
  	console.log(snapshot.val().destination);
  	console.log(snapshot.val().time);
  	console.log(snapshot.val().frequency);

  	$
  }