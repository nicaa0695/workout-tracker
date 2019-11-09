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

function getWorkouts() {
    $.ajax({
        url: 'http://localhost:3000/workouts',
		method: 'get',
        dataType: 'json'
    }).done(function (data) {

            console.log("the data is: ", data)
            let myworkout = new Workout(data)
            debugger
            let myWorkoutHTML = myworkout.workoutHTML()
            $('div#ajax-workouts').html(myWorkoutHTML)
			document.getElementById('ajax-workouts').innerHTML += myWorkoutHTML
    })
}

class Workout {
	constructor(obj) {
		this.id = obj.id
		this.date = obj.date
        this.training = obj.training
        this.mood = obj.mood
        this.length = obj.length
		// this.exercises = exercises
    }

    static newWorkoutForm() {
		return (`
		<strong>New workout exercises form</strong>
            <form>
                <input id='workout-date' type='text' name='date'></input><br>
                <input type='text' name='training'></input><br>
                <input type='text' name='mood'></input><br>
                <input type='text' name='length'></input><br>

				<input type='submit' />
			</form>
		`)
	}
}
    
Workout.prototype.workoutHTML = function () {

    let workoutExercises = this.exercises.map(exercise => {
        return (`
            <p>${exercise.name}</p>
            <p>${exercise.sets}</p>
            <p>${exercise.reps}</p>
        `)
    })
        return (`
        <div>
            <h3>${this.date}</h3>
            </p>${this.training}</p>
            </p>${this.mood}</p>
            </p>${this.length}</p>
            </p>${workoutExercises}</p>
        </div>
        `)
}

	

function listenForNewWorkoutFormClick() {
	$('button#ajax-new-workout').on('click', function (event) {
		event.preventDefault()
		let newWorkoutForm = Workout.newWorkoutForm()
        document.querySelector('div#new-workout-form-div').innerHTML = newWorkoutForm
	})
}



