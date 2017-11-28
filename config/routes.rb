Rails.application.routes.draw do

    post '/' => 'sessions#login'

    get '/users/:id/attended' => 'users#concerts_attended'

    get '/bands' => 'bands#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
