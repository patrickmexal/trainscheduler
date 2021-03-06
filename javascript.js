var config = {
    apiKey: "AIzaSyAD9RYrseSXfL_TaN2W_AicL3i2eoaM4aU",
    authDomain: "folsom-train.firebaseapp.com",
    databaseURL: "https://folsom-train.firebaseio.com",
    projectId: "folsom-train",
    storageBucket: "",
    messagingSenderId: "1066725063678"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  

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

   

}); 

  database.ref().on("value", function(snapshot){
  	console.log(snapshot.val());
  	console.log(snapshot.val().name);
  	console.log(snapshot.val().destination);
  	console.log(snapshot.val().time);
  	console.log(snapshot.val().frequency);

  	$("#thetrainname").text(snapshot.val().name);
  	$("#thedestination").text(snapshot.val().destination);
  	$("#thefrequency").text(snapshot.val().frequency);
  	$("#thenextarrival").text(snapshot.val().time);

  }, function(errorObject) {
  	console.log("Errors handled: " + errorObject.code)
  });
});
 };