class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        if location == "nyc"
            @listings = Listing.where("price < ? AND rent_bool = ?", maxPrice, "#{(rb_toggle)}")
        else
            @listings = Listing.where("price < ? AND rent_bool = ? AND (LOWER(location) LIKE ? or LOWER(neighborhood) LIKE ?)", "#{maxPrice}", "#{rb_toggle}", "%#{location}%")
        end
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end
    
    private

    def listing_params
        params.require(:listing).permit(:name, :location, :neighborhood, :zip, :lister_id, :borough, :neighborhood, :price, :beds, :baths, :description)
    end

    def rb_toggle 
        params[:rb_toggle] == "rent" ? true : false
    end

    def location
        params[:location].downcase
    end

    def maxPrice
        params[:maxPrice]
    end


end
