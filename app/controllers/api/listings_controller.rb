class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @listings = Listing.all
        render :index
    end

    private
    def listing_params
        params.require(:listing).permit(:name, :location, :neighborhood, :zip, :realtor_id, :price, :beds, :baths)
    end

end
