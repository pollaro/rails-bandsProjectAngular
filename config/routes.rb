Rails.application.routes.draw do

    root 'pages#index'

    post '/' => 'sessions#login'
    post '/new' => 'sessions#register'

    get '/users/:id/attended' => 'users#concerts_attended'

    get '/bands' => 'bands#index'
    post '/bands/new' => 'bands#new'

    get '/concerts' => 'concerts#all'
    get '/concerts/:id' => 'concerts#show_page'
    post '/concerts/find' => 'concerts#index'
    post '/concerts/save' => 'concerts#save'

    get '*unmatchedroute' => 'pages#index'

end
