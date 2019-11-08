$(function() {
	console.log('workouts.js is loaded ...')
	listenForClick()
	listenForNewWorkoutFormClick()
});

function listenForClick() {
	$('button#workouts-data').on('click', function (event) {
		event.preventDefault()
		getWorkouts()
	})
}



