$(function() {
	console.log('workouts.js is loaded ...')
	listenForClick()
	// listenForNewWorkoutFormClick()
});

function listenForClick() {
	$('button#workouts-data').on('click', function (event) {
		event.preventDefault()
		getWorkouts()
	})
}

function getWorkouts() {
    $.ajax({
        url: 'http://localhost:3000/workouts',
		method: 'get',
        dataType: 'json'
    }).done(function (data) {
			console.log("the data is: ", data)
				let myworkout = new Workout(data[0])
                let myWorkoutHTML = myworkout.workoutHTML()
				document.getElementById('ajax-workouts').innerHTML += myWorkoutHTML
    })
}

class Workout {
	constructor(id, date, training, mood, length, exercises) {
		this.id = id
		this.date = date
        this.training = training
        this.mood = mood
        this.length = length
		this.exercises = exercises
	}
// class Workout {
// 	constructor(obj) {
// 		this.id = obj.id
// 		this.date = obj.date
//         this.training = obj.training
//         this.mood = obj.mood
//         this.length = obj.length
// 		this.exercises = obj.exercises
// 	}

	static newWorkoutForm() {
		return (`
		<strong>New workout exercises form</strong>
			<form>
				<input id='workout-training' type='text' name='training'></input><br>
				<input type='text' name='training'></input><br>
				<input type='submit' />
			</form>
		`)
	}
}

// function listenForNewWorkoutFormClick() {
// 	$('button#ajax-new-workout').on('click', function (event) {
// 		event.preventDefault()
// 		let newWorkoutForm = Workout.newWorkoutForm()
//         document.querySelector('div#new-workout-form-div').innerHTML = newWorkoutForm
// 	})
// }



