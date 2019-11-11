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
                // debugger
                let myworkout = new Workout(data[0])
            
                let myWorkoutHTML = myworkout.workoutHTML()
                // $('div#ajax-workouts').html(myWorkoutHTML)
        		document.getElementById('ajax-workouts').innerHTML += myWorkoutHTML
            })
        }
        

function listenForNewWorkoutFormClick() {
	$('button#ajax-new-workout').on('click', function (event) {
		event.preventDefault()
		let newWorkoutForm = Workout.newWorkoutForm()
        document.querySelector('div#new-workout-form-div').innerHTML = newWorkoutForm
	})
}
//         }).done(function (data) {

//             console.log("the data is: ", data)
//             let myworkout = new Workout(data[0])
//             debugger
//             let myWorkoutHTML = myworkout.workoutHTML()
//             $('div#ajax-workouts').html(myWorkoutHTML)
// 			document.getElementById('ajax-workouts').innerHTML += myWorkoutHTML
//     })
// }

class Workout {
	constructor(obj) {
		this.id = obj.id
		this.date = obj.date
        this.training = obj.training
        this.mood = obj.mood
        this.length = obj.length
		// this.exercises = obj.exercises
    }

    static newWorkoutForm() {
		return (`
		<strong>New workout form</strong>
            <form>
                <p>Date:</p>
                <input id='workout-date' type='text' name='date'></input><br>
                <p>Training:</p>
                <input type='text' name='training'></input><br>
                <p>Mood:</p>
                <input type='text' name='mood'></input><br>
                <p>Length:</p>
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
    }).join('')
        return (`
        <div>
            <h3>${this.date}</h3>
            <p>${this.training}</p>
            <p>${this.mood}</p>
            <p>${this.length}</p>
            <p>${this.workoutExercises}
            
        </div>
        `)
}

	





