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
		dataType: 'json',
		success: function (data) {
			console.log("the data is: ", data)
			data.map(post => {
				const newWorkout = new Workout(workout)
				const newWorkoutHtml = newPost.postHTML()
				document.getElementById('ajax-workouts').innerHTML += newWorkoutHtml
			})
		}
	})
}
