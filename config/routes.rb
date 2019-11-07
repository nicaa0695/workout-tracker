Rails.application.routes.draw do
  # devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # get '/auth/facebook/callback' => 'sessions#create'
  resources :workouts do 
    resources :exercises
  end
  root 'workouts#index'
end
