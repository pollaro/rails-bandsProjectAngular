class UsersController < ApplicationController

    def concerts_attended
        @concerts = Attend.includes(concert: :band).where(user:current_user)
        puts @concerts
        render json: @concerts.to_json(:include => { :concert => {:include => :band}})
    end
    #
    # private
    # def user_params
    #     params.require(:user).permit(:first_name, :last_name, :email, :city, :password)
    # end
end
