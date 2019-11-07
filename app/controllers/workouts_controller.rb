class WorkoutsController < ApplicationController
    # skip_before_action :authenticate_user!, only: [:index]
    before_action :find_workout, only: [:show, :edit, :update, :destroy]

    def index
        if params[:training]
            @workouts = Workout.by_training(params[:training])
            # @filter = params[:training]
            
        else
            @workouts = Workout.all 
        end
    end

    def show
    end 

    def new 
        @workout = Workout.new
    end 

    def create 
        @workout = Workout.new(workout_params)
        # binding.pry
        # @workout = Workouts.build(workout_params)
        if @workout.save 
            redirect_to workout_path(@workout)
        else 
            render :new
        end
    end 

    def edit
        # redirect_if_wrong_user
        @workout = Workout.find(params[:id])
    end
    
    def update
        # redirect_if_wrong_user
        @workout = Workout.find(params[:id])
        @workout.update(date: params[:workout][:date], training: params[:workout][:training], mood: params[:workout][:mood], length: params[:workout][:length])
        redirect_to workout_path(@workout)
    end 


    def destroy 
        # redirect_if_wrong_user
        @workout.destroy
        redirect_to workouts_path
    end



    private 

    # def redirect_if_wrong_user
    #     if current_user != @workout.user
    #         flash[:message] = "You can't edit or delete a workout from another user."
    #         redirect_to workouts_path
    #         # redirect_to user_session_path(current_user)
    #     end
    # end

    def workout_params
        params.permit(:date, :training, :mood, :length) 
    end 

    def find_workout
        @workout = Workout.find(params[:id])
    end  
end
