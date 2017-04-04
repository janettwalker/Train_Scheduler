var config = {
	apiKey: "AIzaSyAikjAFZu7-aKF_Mx0zK0Oz9Dz4bmr0XSs",
	authDomain: "train-scheduler-1dd34.firebaseapp.com",
	databaseURL: "https://train-scheduler-1dd34.firebaseio.com",
	projectId: "train-scheduler-1dd34",
	storageBucket: "train-scheduler-1dd34.appspot.com",
	messagingSenderId: "332307435243"
	};

	firebase.initializeApp(config);

	var database = firebase.database();

	var train = "";
	var destination = "";
	var firstTime = 0;
	var frequency = 0;

$("#add-train").on("click", function(event){
	event.preventDefault();

	train = $("#train-input").val().trim();
	destination = $("#dest-input").val().trim();
	firstTime = $("#time-input").val().trim();
	frequency = $("#freq-input").val().trim();

	var newTrain = {
		train: train,
		destination: destination,
		firstTime: firstTime,
		frequency: frequency,
	};

	database.ref().push(newTrain);

	console.log(newTrain.train);
	console.log(newTrain.destination);
	console.log(newTrain.firstTime);
	console.log(newTrain.frequency);

	alert("Train Schedule Successfully Added");

	$("#train-input").val("");
	$("#dest-input").val("");
	$("#time-input").val("");
	$("#freq-input").val("");

  // Prevents moving to new page
  return false;

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	console.log(childSnapshot.val());

	train = childSnapshot.val().train;
	destination = childSnapshot.val().destination;
	firstTime = childSnapshot.val().firstTime;
	frequency = childSnapshot.val().frequency;

  	console.log(train);
  	console.log(destination);
  	console.log(firstTime);
 	console.log(frequency);

 	var trainTimeFormat = moment.unix(firstTime).format("MM/DD/YY");

 	var nextArrival = "";

 	var minAway = "";

    $("#train-table > tbody").append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" +
  trainTimeFormat + "</td><td>" + nextArrival + "</td><td>" + minAway + "</td></tr>");

});

 


