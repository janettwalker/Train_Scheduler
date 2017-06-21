
**[View Project](https://janettwalker.github.io/Train_Scheduler/)**
----
# Train Scheduler

This app allows the user to view information about different trains and their estimated arrival times.

## Screenshots
Images of the train schedule and how users can add trains to the schedule.

![Schedule](http://i1044.photobucket.com/albums/b447/janetwalker271989/Screen%20Shot%202017-06-19%20at%201.19.53%20PM_zpsyb3rao9l.png "A view of the schedule.")

![Add Train](http://i1044.photobucket.com/albums/b447/janetwalker271989/Screen%20Shot%202017-06-19%20at%201.20.03%20PM_zpscf6az0rt.png "Where users can add a train to the schedule.")




## Technologies used
You can give a brief listing of the technologies you've learned and applied here
- moment.js
- firebase
- jQuery
- Bootstrap

## Getting Started
Clone a copy of the repo and add a project in firebase. Add your firebase code. Watch your data post and update.

### Prerequisities

What to install and how for local development and testing purposes

```
- firebase: [click here](https://console.firebase.google.com), create an account and insert your API information into train.js

```

## Built With

* Sublime Text
* Bootstrap
* jQuery

## Walk throughs of code
The click event that adds train information to firebase

```
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
```

## Author

* **Janet Walker** - *Initial work* - [Janet Walker](https://github.com/janettwalker)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Huge shout out to all of the open source documentation out there!
