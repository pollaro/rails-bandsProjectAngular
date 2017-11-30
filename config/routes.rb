Rails.application.routes.draw do

    post '/' => 'sessions#login'

    get '/users/:id/attended' => 'users#concerts_attended'

    get '/bands' => 'bands#index'
    post '/bands/new' => 'bands#new'

    get '/concerts' => 'concerts#all'
    get '/concerts/:id' => 'concerts#show_page'
    post '/concerts/find' => 'concerts#index'

end
