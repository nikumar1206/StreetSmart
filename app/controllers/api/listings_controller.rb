class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    private
    def listing_params
        params.require(:listing).permit(:name, :location, :neighborhood, :zip, :realtor_id, :price, :beds, :baths, :description)
    end

    def rb_toggle 
        params[:rb_toggle]
    end

    def location
        params[:location]
    end

    def maxPrice
        params[:maxPrice]
    end

end
