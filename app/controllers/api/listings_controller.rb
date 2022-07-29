class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        # p params["amenities"].to_enum.to_h
        if params[:user_id]
            @listings = Listing.where("lister_id = ?", params[:user_id])
        else 
            if location == "nyc"
                @listings = Listing.where("price < ? AND rent_bool = ?", max_price, "#{(rb_toggle)}")
            else
                @listings = Listing.where("price < ? AND rent_bool = ? AND (LOWER(location) LIKE ? or LOWER(neighborhood) LIKE ?)", "#{max_price}", "#{rb_toggle}", "%#{location}%","%#{location}%" )
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
        if @listing.save
          render :show
        else
          render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        @listing = Listing.find(listing_params[:id])
        p listing_params[:id]
        if @listing.update(listing_params)
          render :show
        else
          render json: @lisiting.errors.full_messages, status: 422
        end
    end


    private
    def listing_params
        params.require(:listing).permit(:name, :location, :neighborhood, :zip, 
            :lister_id, :borough, :neighborhood, :price, :beds, :baths, :description, 
            :property_type, :lat, :lng, :rent_bool, :photo, :minBaths, :minBeds, :minPrice,
            :amenities, :id, :maxPrice)
    end

    def rb_toggle 
        params[:rb_toggle] == "rent" ? true : false
    end

    def location
        if params[:location].downcase == ""
            return "nyc"
        else
            return params[:location].downcase
        end
    end

    def neighborhood
        params[:neighborhood].downcase
    end

    def max_price
        if params[:maxPrice] == ""
            return "99999999"
        else
            return params[:maxPrice]
        end
    end

    def min_price
        if params[:minPrice] == ""
            return "0"
        else
            return params[:minPrice]
        end
    end
    
    def min_beds
        if params[:minBeds] == ""
            return "0"
        else
            return params[:minBeds]
        end
    end
    
    def min_baths
        if params[:minBaths] == ""
            return "0"
        else
            return params[:minBaths]
        end
    end

    def pets_allowed
        params["amenities"]["Pets Allowed"]
    end

    def doorman
        params["amenities"]["Doorman"]
    end

    def private_outdoor_space
        params["amenities"]["Private Outdoor Space"]
    end

    def elevator
        params["amenities"]["Elevator"]
    end

    def dishwasher
        params["amenities"]["Dishwasher"]
    end

    def laundromat
        params["amenities"]["Laundromat"]
    end
    

end
