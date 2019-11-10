class WorkoutsController < ApplicationController
    def index
        @workouts = Workout.all 
        respond_to do |f|
            f.html {render :index}
            f.json {render json: @workouts}
        end
    end

    def show
        @workout = Workout.find(params["id"])
		respond_to do |f|
			f.html {render :show}
			f.json {render json: @workout }
		end
    end 

    def new 
        @workout = Workout.new
    end 

    def create 
        @workout = Workout.new(workout_params)
        if @workout.save
			respond_to do |f|
				f.html {redirect_to workouts_path}
				f.json {render json: @workouts}
			end
        else 
            render :new
        end
    end 

    def edit
        @workout = Workout.find(params[:id])
        respond_to do |f|
			f.html {render :edit}
			f.json {render json: @workout}
		end
    end
    
    def update
        @workout = Workout.find(params[:id])
        @workout.update(date: params[:workout][:date], training: params[:workout][:training], mood: params[:workout][:mood], length: params[:workout][:length])
        redirect_to workout_path(@workout)
    end 


    def destroy 
        @workout.destroy
        redirect_to workouts_path
    end

    private 

    def workout_params
        params.permit(:date, :training, :mood, :length) 
    end 

    def find_workout
        @workout = Workout.find(params[:id])
    end  
end

