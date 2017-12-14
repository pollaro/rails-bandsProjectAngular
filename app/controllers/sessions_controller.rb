class SessionsController < ApplicationController
  # skip_before_action :require_login, only: [:index,:login]
    def index
    end

    def register
        user = User.find_by_email(params[:email])
        if user.nil?
            User.create(first_name: params[:firstName], last_name: params[:lastName], email: params[:email], city: params[:city], state: params[:state], password: params[:password])
            user = User.last
            session[:id] = user.id
            session[:firstname]= user.first_name
            session[:lastname] = user.last_name
            session[:city] = user.city
            session[:email] = user.email
            render json: session
        else
            render :json => {:errors => user.errors.full_messages}
        end
    end

    def login
        user = User.find_by_email(params[:logEmail]).try(:authenticate, params[:logPass])
        if user
            session[:id] = user.id
            session[:firstname]= user.first_name
            session[:lastname] = user.last_name
            session[:city] = user.city
            session[:email] = user.email
            render json: session
        else
            flash[:login_error]= "user not found and/or password doesn't match"
            render :json => {:errors => user.errors.full_messages}
        end
    end

    def logout
      session[:id] = nil
      session[:firstname] = nil
      session[:lastname] = nil
      session[:city] = nil
      session[:email] = nil
      puts session[:email]
      render json: session
    end

end
