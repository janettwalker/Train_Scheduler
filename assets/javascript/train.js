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

	train = ("#train-input").val().trim();
	destination = ("#dest-input").val().trim();
	firstTime = ("#time-input").val().trim();
	frequency = ("#freq-input").val().trim();

	dataRef.ref().push({
		train: train,
		destination: destination,
		firstTime: firstTime,
		frequency: frequency,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	})

});

