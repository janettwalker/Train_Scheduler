// initializing firebase
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

// variables to define input from text box
	var train = "";
	var destination = "";
	var firstTime = 0;
	var frequency = 0;

// on click event for button that adds train info
$("#add-train").on("click", function(event){
	event.preventDefault();

// users input from text boxes
	train = $("#train-input").val().trim();
	destination = $("#dest-input").val().trim();
	firstTime = moment($("#time-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
	frequency = $("#freq-input").val().trim();

// creates an object for storing data
	var newTrain = {
		train: train,
		destination: destination,
		firstTime: firstTime,
		frequency: frequency,
	};

// uploads train data to the database
	database.ref().push(newTrain);

	console.log(newTrain.train);
	console.log(newTrain.destination);
	console.log(newTrain.firstTime);
	console.log(newTrain.frequency);

	alert("Train Schedule Successfully Added");



// Prevents moving to new page
  return false;

});


// on click event for firebase and for adding info to database and table
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	console.log(Object.keys(childSnapshot.val()));
	// storing snapshots into variables
	var sv = childSnapshot.val();

	var svArr = Object.keys(sv).map(function(arr){
			var temp = sv[arr];
			temp.key = arr;
			return temp;
	});

	svArr.sort(function(a, b){
		return a.timeStamp - b.timeStamp;
	});

	var key = sv.train;

	console.log(sv);
	console.log(sv.train);
	console.log("svArr: ", svArr);

	var train = childSnapshot.val().train;
	var destination = childSnapshot.val().destination;
	var firstTime = childSnapshot.val().firstTime;
	var frequency = childSnapshot.val().frequency;

  	console.log(train);
  	console.log(destination);
  	console.log(firstTime);
 	console.log(frequency);


 	var differenceTimes = moment().diff(moment.unix(firstTime), "minutes");
  	var tRemainder = moment().diff(moment.unix(firstTime), "minutes") % frequency;
  	var minAway = frequency - tRemainder;

// To calculate the arrival time, add the minAway to the currrent time
 	var nextArrival = moment().add(minAway, "m").format("hh:mm A")

	console.log(minAway);
  	console.log(nextArrival);
  	console.log(moment().format("hh:mm A"));
  	console.log(nextArrival);
  	console.log(moment().format("X"));

  	    $("#train-table > tbody").append(
    	"<tr><td>" + train + "</td><td>" + destination + "</td><td>" +
  	frequency + "</td><td>" + nextArrival + "</td><td>" + minAway + "</td><td>" + "<button class='btn btn-primary delete' attr='key'>" + "<span class='glyphicon glyphicon-remove-sign' aria-hidden='true'>" + "</span>" + "</button></td></tr>");


// deleting from firebase
	$('.delete').on("click", function(){

		console.log("here");
		database.ref().child(key).remove();
		

	});

// clearing text from text boxes
	$("#train-input").val("");
	$("#dest-input").val("");
	$("#time-input").val("");
	$("#freq-input").val("");

});









 


