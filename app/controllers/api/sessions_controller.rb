class Api::SessionsController < ApplicationController

    def create
        email = params[:user][:email]
        password = params[:user][:password]
        @user = User.find_by_credentials(email, password)
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Incorrect credentials"], status: 422
        end
    end

    def destroy
        p current_user
        if current_user
            logout!
            render json: ["You've been successfully logged out"]
        else
            render json: ["No user found to logout"], status: 404
        end
    end

end