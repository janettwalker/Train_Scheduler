
[View Project](https://janettwalker.github.io/Train_Scheduler/)

# Train Scheduler

This app allows the user to view information about different trains and their estimated arrival times.

## Screenshots
Include a one or two screenshots of main UI/UX points of your app and how it solves a problem

## Technologies used
You can give a brief listing of the technologies you've learned and applied here
- moment.js
- firebase
- jQuery
- mongodb

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisities

What to install and how for local development and testing purposes

```
- node.js: visit node.js and download...
- mongodb: npm install -g mongodb
- mysqldb: brew install mysql
- jasmine: npm i -g jasmine
```

## Running the tests

Explain how to run the automated tests for this system (if applicable)

```
jasmine

jasmine spec/appSpec.js
```

## Built With

* Atom - Sublime Text is pretty cool too I guess
* Balsamiq - Wireframe of choice 
* RoboMongo - Because .pretty() everything is tedious

## Walk throughs of code
For Project presentation, you can include snippets of code you found buggy, interesting, or are overall proud of here.  Try to limit the quantity and size to quick readable bits.

You can also show where you've used technologies you've learned and applied here.

```
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
```

## Author

* **Janet Walker** - *Initial work* - [Janet Walker](https://github.com/janettwalker)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Huge shout out to all of the open source documentation out there!
