class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        if params[:user_id]
            @listings = Listing.where("lister_id = ?", params[:user_id])
        else 
            if location == "nyc"
                @listings = Listing.where("price < ? AND rent_bool = ?", maxPrice, "#{(rb_toggle)}")
            else
                @listings = Listing.where("price < ? AND rent_bool = ? AND (LOWER(location) LIKE ? or LOWER(neighborhood) LIKE ?)", "#{maxPrice}", "#{rb_toggle}", "%#{location}%","%#{location}%" )
            end
        end
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.lister = current_user
        @listing.location = "#{@listing.name}, #{@listing.borough}, New York, #{@listing.zip}"
        if @listing.save!
          render :show
        else
          render json: ["Could not create new listing"], status: 422
        end
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing.update(listing_params)
          render :show
        else
          render json: ["Could not create new listing"], status: 422
        end
    end


    private
    def listing_params
        params.require(:listing).permit(:name, :location, :neighborhood, :zip, :lister_id, :borough, :neighborhood, :price, :beds, :baths, :description, :property_type, :lat, :lng, :rent_bool, :photo)
    end

    def rb_toggle 
        params[:rb_toggle] == "rent" ? true : false
    end

    def location
        params[:location].downcase
    end

    def neighborhood
        params[:neighborhood].downcase
    end

    def maxPrice
        params[:maxPrice]
    end


end
