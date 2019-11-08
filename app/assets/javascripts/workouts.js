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

function listenForNewWorkoutFormClick() {
	$('button#ajax-new-workout').on('click', function (event) {
		event.preventDefault()
		let newWorkoutForm = Workout.newWorkoutForm()
		document.querySelector('div#new-workout-form-div').innerHTML = newPostForm
	})
}



