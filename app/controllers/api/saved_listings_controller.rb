class Api::SavedListingsController < ApplicationController

    def index
        @saved_listings = SavedListing.where(lister_id: current_user.id)
        return :index
    end

    def destroy
        @saved_listing = SavedListing.find(params[:id])
        if current_user.id == @listing.lister_id
            @saved_listing.destroy
            render json: ["couldnt destroy the save my b"], status: 200
        else
            render json: ["Sorry an error has occured deleting the listing"], status: 404
        end
        
    end
end

