
def amenities_arr
    required_amen = params["amenities"].to_enum.to_h
    amen_arr = required_amen.select {|k,v| v == "true"}
    return amen_arr.keys
end

# if params["amenities"]
#     @listings = @listings.select {|listing| (amenities_arr & listing.amenities) == amenities_arr }
# end

@listings.each do |listing|
    json.set! listing.id do
        json.partial! "/api/listings/listing", listing: listing
        json.imageUrl url_for(listing.photo) if listing.photo.attached?
        json.amenities listing.amenities
        json.saved listing.saved?(current_user) if logged_in?
        json.lister do
            json.extract! listing.lister, :email, :name, :phone
        end
    end
end