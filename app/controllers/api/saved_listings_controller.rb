class Api::SavedListingsController < ApplicationController

    def index
        @user = User.find_by(id: params[:user_id])
        if @user
            @listings = @user.saved_listings
            render "api/listings/index"
        else
            render json: ["Could not display saved listings. Please try again later "], status: 422
        end
    end

    def create
        @listing = Listing.find_by(id: params[:listing_id])
        @listing.lister_id = current_user
        if @listing.save
            render "api/users/show"
        else
            render json: ["Create method for saved listing has failed"], status: 422
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if current_user.id == @listing.lister_id
            @saved_listing.destroy
            render "api/users/show"
        else
            render json: ["Sorry an error has occured deleting the listing"], status: 404
        end
        
    end

end

